import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import UseClasses from '../../Hooks/UseClasses';
import { ClassNames } from '@emotion/react';
import { AuBankAccountElement } from '@stripe/react-stripe-js';

const hosting_token = import.meta.env.VITE_Image_Upload_token;


const InstructorUpdateClass = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [classes] = UseClasses()
    const classesUpdate = classes.filter((classItem) => classItem._id === id)
    const {className,price,availableSeats} = classesUpdate[0]

    const [axiosSecure] = useAxiosSecure();
    const [loading, setloading] = useState(false)
    const {user} = useContext(AuthContext)
    const {displayName, email} = user
    const { register, handleSubmit, reset,formState: { errors }} = useForm();
    const hosting_url = `https://api.imgbb.com/1/upload?key=${hosting_token}`

    const onSubmit = data => {
    setloading(true)
    const formData = new FormData();
    formData.append('image', data.image[0])

        fetch(hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                const {className,email,availableSeats,instructorName,price} = data;
                const updateItem = {className, price: parseFloat(price),instructorEmail:email,availableSeats,instructorName,classImage:imgUrl, status:'pending',enrolled:0,value:null,feedback:''}
                
                fetch(`https://harmony-harbor-backend.vercel.app/updateclass/${id}`,{
                    method:'PATCH',
                    headers:{
                        'content-type': "application/json"
                    },
                    body:JSON.stringify(updateItem)
                })
                .then(data => data.json())
                .then(data => {
                    console.log(data)
                    if(data.modifiedCount > 0){
                        setloading(false)
                        reset();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Updated Successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate('/dashboard/instructorclasses')
                    }
                })
            }
        })

    };

  return (
    
        <div className='mx-auto w-4/5'>
        <h1 className='text-4xl text-center text-zinc-800 font-bold leading-[4rem] my-6 dark:text-white'>Update Classes</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
        {/* class name */}
        <div className="form-control w-full mb-4">
        <label className="label">
        <span className="label-text font-semibold">Class Name</span>
        </label>
        <input type="text" placeholder="Class Name"
        {...register("className", { required: true, maxLength: 120 })}
        className="input input-bordered w-full " defaultValue={className} />
        </div>

        <div className="form-control w-full my-4">
        <div className="flex my-4 gap-4">
        {/* name */}
        <div className="form-control w-full mb-4">
        <label className="label">
        <span className="label-text font-semibold">Email</span>
        </label>
        <input type="text" placeholder="email"
        {...register("email", { required: true })}
        className="input input-bordered w-full " defaultValue={email} // Set the default value
        readOnly />
        </div>
        
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text font-semibold">Available Seats</span>
        </label>
        <input type="number" {...register("availableSeats", { required: true, min:1 })} placeholder="Available Seats" className="input input-bordered w-full" defaultValue={availableSeats}/>
        {errors.availableSeats && <p className='text-red-600 mt-1'>Seat be minimum 1</p>}
        </div>

        </div>
        
        <div className="flex my-4 gap-4">
        {/*instructor name */}
        <div className="form-control w-full mb-4">
        <label className="label">
        <span className="label-text font-semibold">Instructor Name</span>
        </label>
        <input type="text" placeholder="Instructor Name"
        {...register("instructorName", { required: true })}
        className="input input-bordered w-full " defaultValue={displayName} // Set the default value
        readOnly />
        </div>
        
        {/* price */}
        <div className="form-control w-full">
        <label className="label">
            <span className="label-text font-semibold">Price</span>
        </label>
        <input type="number" {...register("price", { required: true, min:10})} placeholder="class price" className="input input-bordered w-full " defaultValue={price}/>
        {errors.price && <p className='text-red-600 mt-1'>price should be minimum 10</p>}
        </div>

        </div>
        
        <label className="label">
        <span className="label-text">Class Image</span>
        </label>
        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-primary w-full"/>
        </div>
        <input className="btn btn-primary mt-4 border-none" type="submit" value="Add Item" disabled={loading} />
        </form>
        </div>
  )
}

export default InstructorUpdateClass