import React, { useState } from 'react'

import { FaRegTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../Hooks/UseAxiosSecure'
import UseUsers from '../../Hooks/useUsers'


const UserRow = ({item, role}) => {

    const [_,refetch] = UseUsers()
    const [axiosSecure] = useAxiosSecure()
  
    const handleRole =(event) =>{
        event.preventDefault()
        const updateRole = event.target.assign.value

        if(updateRole == role) {
        alert(`Already a instructor`)
          return
        }
         
        axiosSecure.patch(`admin/role/${item._id}`, {role: updateRole}).then(res => {

          if(res.data.modifiedCount > 0){  
            refetch();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${item.name} is ${updateRole} now!`,
                showConfirmButton: false,
                timer: 1500
              }) }
        })    


      }


    

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
             
                fetch(`https://harmony-harbor-backend.vercel.app/admin/delete/${item._id}`, {
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
   
    <tr key={item._id}>
            <td>
            {item.name}
            </td>
            <td>
                {item.email}
            </td>
            <td className="font-semibold">
            {item?.role}
            </td>
            <td>{item?.gender}</td>
            <td>
            <button className=" bg-white " onClick={()=>handleDelete(item)}>
             <FaRegTrashAlt></FaRegTrashAlt>
            </button>
            </td>    
            <td>
            
            {item.role === 'admin'?<p className='text-red-700'>admin</p>:
            <form className='flex gap-1' onSubmit={handleRole}>
            <select data-te-select-init className='text-zinc-900 border-none focus:outline-none' name='assign' defaultValue={item.role}>
            <option value="admin">Admin</option>
            <option value="instructor">Instructor</option>      
            </select>
            <button type='submit' className='bg-indigo-50 p-1 hover:bg-indigo-100 rounded'>update</button>
            </form>
            }
            </td>    
          </tr>


  )
}

export default UserRow