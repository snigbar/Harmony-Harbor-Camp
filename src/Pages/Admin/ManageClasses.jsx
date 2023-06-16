import React, { useState } from 'react'
import UseClasses from '../../Hooks/UseClasses'
import { BsCheck2Circle, BsClockHistory } from "react-icons/bs";
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [id, setId] = useState('')
    
        const [classes,_,refetch] = UseClasses();
       

    

    const [axiosSecure] = useAxiosSecure()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const request = e.target.request.value   
        axiosSecure.patch(`admin/status/${id}`, {status:request}).then(res => {
          if(res.data.modifiedCount > 0){  
            refetch();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `kjbjbk`,
                showConfirmButton: false,
                timer: 1500
              }) }
        })    
    }

  return (
    <table className="table text-center">
    {/* head */}
    <thead className='mx-auto'>

      <tr className='text-white bg-primary hover:bg-indigo-800 text-center w-max pointer'>
        <th>Class Name</th>
        <th>Image</th>
        <th>Instructor Name</th>
        <th>Instructor Email</th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {/* values */}

    {
        classes.map((item) => (
        <React.Fragment key={item._id}>
            <tr className={`text-center text-sm ${item.status === 'pending'? 'bg-purple-700 text-white':item.status === 'denied'?'text-white bg-red-600':''}`}>
            <td>{item.className}</td>
            <td>
            <div className="avatar">
            <div className="w-24 rounded">
            <img alt={item.className} className="block w-full object-cover object-top transition-opacity" src={item.classImage}/>
            </div>
            </div>
            
            </td>
            <td>{item.instructorName}</td>
            <td>{item.instructorEmail}</td>
            <td>{item.availableSeats}</td>
            <td className="font-semibold">${item.price}</td>
            <td>{item.status}</td> 
            <td>{item.status === 'approved'? 
            <p className='text-green-600 text-lg'><BsCheck2Circle/></p>
            :
            <form onSubmit={handleSubmit}>
            <select data-te-select-init className='text-zinc-900 border-none focus:outline-none' name='request'>
            <option value="approved" selected>Approve</option>
            <option value="denied">Decline</option>
            </select>
            <button type='submit' className="text-xs mt-2 text-zinc-900 bg-white px-2 py-1" onClick={()=>setId(item._id)}>Submit</button>
            </form>
            }</td> 
          </tr>
         {item.feedback && <tr className='text-center w-full mx-auto py-2'>{item.feedback}</tr>}
         </React.Fragment>
        ))
    }
    </tbody>   
  </table>
  )
}

export default ManageClasses