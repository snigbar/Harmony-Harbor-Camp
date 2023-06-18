import React, { useReducer, useRef, useState } from 'react'
import UseClasses from '../../Hooks/UseClasses'
import { BsCheck2Circle, BsClockHistory } from "react-icons/bs";
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';


const ManageClasses = () => {

    const [id, setId] = useState('')
    const [feedback, setFeedback] = useState(false)
    const [message, setMessage] = useState('');
    const [classes,_,refetch] = UseClasses();
    const checkSelection =(event) =>{
      if(event.target.value === 'denied') setFeedback(true)
      else setFeedback(false)
    }

    const openModal = async () => {
      const { value: text } = await Swal.fire({
        input: 'textarea',
        inputLabel: 'Provide Feedback',
        inputPlaceholder: 'Type your message here...',
        inputAttributes: {
          'aria-label': 'Type your message here'
        },
        showCancelButton: true
      });
  
      if (text) {
        setMessage(text);
      
      }
    };


    

    const [axiosSecure] = useAxiosSecure()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const request = e.target.request.value   
        const feedbackValue = message
        axiosSecure.patch(`admin/status/${id}`, {status:request, feedback:feedbackValue}).then(res => {
          if(res.data.modifiedCount > 0){  
            refetch();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Completed`,
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
        <th>Instructor Email</th>
        <th>Available Seats</th>
        <th>Price</th>
        <th>Status</th>
        <th>Action</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
    {/* values */}

    {
        classes.map((item) => (
        <React.Fragment key={item._id}>
            <tr className={`text-center text-sm ${item.status === 'pending'? 'bg-purple-700 text-white':item.status === 'denied'?'text-white bg-red-600':''} dark:text-white`}>
            <td>{item.className} <span className='text-xs font-semibold'>by {item.instructorName}</span></td>
            <td>
            <div className="avatar">
            <div className="w-24 rounded">
            <img alt={item.className} className="block w-full object-cover object-top transition-opacity" src={item.classImage}/>
            </div>
            </div>
            
            </td>
            <td className='text-xs'>{item.instructorEmail}</td>
            <td>{item.availableSeats}</td>
            <td className="font-semibold">${item.price}</td>
            <td>{item.status}</td> 
            <td className='text-center'>{item.status === 'approved'? 
            <p className='text-green-600 text-lg'><BsCheck2Circle/></p>
            :
            <form name='submitForm' onSubmit={handleSubmit}>
            <select data-te-select-init className='text-zinc-900 border-none focus:outline-none dark:bg-white' name='request' onChange={checkSelection} defaultValue={"approved"}>
            <option value="approved">Approve</option>
            <option value="denied">Decline</option>      
            </select>

             {feedback && <button  className='bg-slate-50 hover:bg-slate-100 rounded my-1 text-gray-600 px-2 py-1 dark:text-zinc-600' onClick={openModal}>write feedback</button>}
              

            <button type='submit' className='text-xs mt-1 text-zinc-900 bg-white px-2 py-1' onClick={()=>setId(item._id)}>Submit</button>
            </form>
            }</td> 
            {item.feedback && <td>{item.feedback}</td>}
          </tr>
      
         </React.Fragment>
        ))
    }
    </tbody>   
  </table>
  )
}

export default ManageClasses