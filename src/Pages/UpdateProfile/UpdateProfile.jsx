import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaArrowLeft } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';


const UpdateProfile = () => {

    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const [loggedUser, SetLoggedUser] = useState({})
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure()

    // get usr
    axiosSecure.get(`/getme?email=${user?.email}`).then(res => SetLoggedUser(res.data))
    const onSubmit = data => {

    const updateUser = {
        pictureurl: data.photo,
        gender: data.gender,
        contact: data.contact,
        address: data.address,
    };
    axiosSecure.patch(`/updateuser/${user?.email}`, {updateUser}).then(res => {
        if(res.data.modifiedCount > 0){
            reset()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Updated Profile',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/')
        }
    })       
    
  };
  
  
  
    return (
     <>
      <div className="hero min-h-[70vh] bg-base-200">
    <div className="hero-content w-4/5">

      
      <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <div className="card-body">
        {/* name */}
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" name="name" className="input input-bordered" {...register("name", { required: true })}  defaultValue={user?.displayName} readOnly/>
          {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
          </div>

{/* gender and address */}
        <div className="flex gap-3 w-full">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select placeholder="gender" name="gender" className="input input-bordered" {...register("gender", { required: true })} defaultValue={loggedUser?.gender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
          {errors.gender && <span className="text-red-600 text-sm">Gender is required</span>}
          </div>

          <div className="form-control w-full
          ">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input type="text" placeholder="address" name="address" className="input input-bordered" {...register("address", { required: true })} defaultValue={loggedUser?.address}/>
          {errors.address && <span className="text-red-600 text-sm">Address is required</span>}
          </div>
          </div>

         {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" {...register("photo", { required: true })} defaultValue={loggedUser?.pictureurl}/>
          {errors.photo && <span className="text-red-600 text-sm">Photo Url is required</span>}
          </div>
        
        {/* contact */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Contact</span>
            </label>
            <input type="text" placeholder="contact number" name="contact" className="input input-bordered" {...register("contact", { required: true })} defaultValue={loggedUser?.contactNumber}/>
          {errors.contact && <span className="text-red-600 text-sm">Contact Number is required (only numbers)</span>}
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })} defaultValue={user?.email} readOnly/>
          {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
          </div>
  
          <div className="form-control mt-6">
            <button className="btn btn-primary" type='submit'>Update</button>
          </div>
          <div className="form-control">
            <Link to='/' className="text-zinc-600 hover:text-zinc-800 text-lg my-4 cursor-pointer w-full" type='submit'><FaArrowLeft className='inline text-gray-800 mb-1 me-2'/> Update</Link>
          </div>
         
        </div>
      </div>
      </form>
          
        
    </div>
  </div>
     </>
    )
  }
  

export default UpdateProfile