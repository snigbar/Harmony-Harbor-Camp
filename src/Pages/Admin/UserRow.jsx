import React, { useState } from 'react'

import { FaRegTrashAlt } from 'react-icons/fa'
import Swal from 'sweetalert2'

const UserRow = ({item, role}) => {

   
  
    const handleRole =(event) =>{
        event.preventDefault()
        
      
        if(event.target.assign.value == role) {
        alert(`Already a instructor`)
          return
        }
      
        console.log(event.target.assign.value)
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
             
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
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
            <button type='submit' className='bg-white p-1 hover:bg-slate-100'>update</button>
            </form>
            }
            </td>    
          </tr>
  )
}

export default UserRow