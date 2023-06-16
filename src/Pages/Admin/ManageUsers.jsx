import React, { useRef, useState } from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import UseUsers from '../../Hooks/useUsers'
import UserRow from './UserRow'



const ManageUsers = () => {

    const [users,_,refetch] = UseUsers()
    console.log(users)


  return (
    
    <table className="table w-4/5">
    {/* head */}
    <thead>
      <tr>
        <th className=' text-white bg-primary hover:bg-indigo-800 text-center w-max'>Name</th>
        <th className=' text-white bg-primary hover:bg-indigo-800 text-center w-max'>Email</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Role</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Gender</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Delete</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Change Role</th>
      </tr>
    </thead>
    <tbody>
    {/* values */}

    {
        users.map((item) => (
            <UserRow key={item._id} role={item.role} item={item} refetch={refetch}></UserRow>
        ))
    }
    </tbody>   
  </table>
  )
}

export default ManageUsers