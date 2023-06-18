import React from 'react'
import UseCarts from '../../../Hooks/useCarts'
import { FaRegTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const MyClasses = () => {

 
    const [cart,refetch] = UseCarts()
    // classImage,className,email,instructorName,price_id



    // handling delete
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
             
                fetch(`https://harmony-harbor-backend.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            
                        }
                    })
            }
        })
    }

  return (
    
    <table className="table w-[50vw]">
    {/* head */}
    <thead>
      <tr>
        <th className=' text-white bg-primary hover:bg-indigo-800 text-center w-max'>#</th>
        <th className=' text-white bg-primary hover:bg-indigo-800 text-center w-max'>image</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Name</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Price</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Action</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Enroll</th>
      </tr>
    </thead>
    <tbody>
    {/* values */}

    {
        cart.map((item,index) => (
            <tr key={item._id}>
            <td>
            {index + 1}
            </td>
            <td>
                <div className="avatar">
                <div className="w-24 rounded-xl">
                <img src={item.classImage} />
                </div>
                </div>
            </td>
            <td className="text-lg font-semibold">
            {item.className}<span className='text-xs ms-2'>by {item.instructorName}</span>
            </td>
            <td className="text-end">${item.price}</td>
            <td>
            <button className=" bg-white text-lg dark:bg-inherit text-indigo-900 dark:text-white" onClick={()=>handleDelete(item)}>
             <FaRegTrashAlt></FaRegTrashAlt>
            </button>
            </td>    
            <td>
            <Link to={`/dashboard/payment/${item._id}`}><button className="btn btn-primary btn-outline dark:bg-primary dark:text-white">
             Enroll Now
            </button>
            </Link>
               
            </td>    
          </tr>
        ))
    }
    </tbody>   
  </table>
  )
}

export default MyClasses