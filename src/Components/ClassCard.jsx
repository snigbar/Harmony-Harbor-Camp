import React, { useContext } from 'react'
import {FaUserGraduate} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import UseCarts from '../Hooks/useCarts';
import useAdmin from '../Hooks/UseAdmin';
import UseIsInstructor from '../Hooks/UseIsInstructor';





const ClassCard = ({data}) => {

    const {className, classImage, price,instructorName,availableSeats, _id,status} = data;
    const [_, refetch] = UseCarts()

    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const [isAdmin] = useAdmin()
    const [isInstructor] = UseIsInstructor()

    const handleSelectClass = () =>{
      if(user){
        const cartItem = {className, classImage, price, instructorName, email:user.email, classId:_id}
        
        fetch('https://harmony-harbor-backend.vercel.app/cart',{
          method: "POST",
          headers:{
            'content-type': "application/json"
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            refetch()
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'added To cart',
              showConfirmButton: false,
              timer: 1500
            })
            
          }
        })
      }else{
        Swal.fire({
          title: 'Login Please',
          text: "You need to login first",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'login'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state:{from:location}})
          }
        })
      }  
    }



  return (
        
    <div className='my-4 px-1 w-full'>

    <article className={`overflow-hidden rounded-lg shadow-lg ${status === 'pending' && 'bg-indigo-100'} ${status === 'denied' || availableSeats <= 0 && 'bg-red-100'}`}>

        
    <img alt={className} className="block w-full h-64 object-cover object-top transition-opacity" src={classImage}/>


    <header className="flex flex-col items-center gap-2 leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          {className}
           
        </h1>
        
        <div className='flex items-center gap-2'>Instructor: {instructorName}</div>
     
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <p className="text-sm">
                <FaUserGraduate className='text-xs inline mb-1 me-1 text-slate-400'/>Avaialable Seats: {availableSeats}
            </p>
            <p className="text-sm">Price: {price}$</p>

           
    </footer>
    {
      status === 'approved'? <div className='flex justify-center py-4 mx-auto'><button className={`${isAdmin || isInstructor || availableSeats <= 0 ? 'btn btn-disabled': "rounded-full py-2 px-6 bg-gradient-to-r from-indigo-700 to-indigo-600 hover:bg-gradient-to-l text-white font-bold transition duration-500 ease-in-out"}`} onClick={handleSelectClass}>Select</button></div>:<div className='flex justify-center py-4 mx-auto'><button className='btn btn-disabled '>{status}</button></div>
    }
    

</article>


</div>



  )
}

export default ClassCard