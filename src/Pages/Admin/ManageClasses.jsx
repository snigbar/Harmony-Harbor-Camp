import React, { useRef, useState } from 'react'
import UseClasses from '../../Hooks/UseClasses'
import { BsCheck2Circle, BsClockHistory } from "react-icons/bs";
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [id, setId] = useState('')
    const [feedback, setFeedback] = useState(false)

    const [classes,_,refetch] = UseClasses();

    const feedbackRef = useRef()

    const checkSelection =(event) =>{
      if(event.target.value === 'denied') setFeedback(true)
      else setFeedback(false)
    }


    

    const [axiosSecure] = useAxiosSecure()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const request = e.target.request.value   
        const feedbackValue = feedbackRef.current?.value
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

        console.log(request,feedback)
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
            <tr className={`text-center text-sm ${item.status === 'pending'? 'bg-purple-700 text-white':item.status === 'denied'?'text-white bg-red-600':''}`}>
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
            <select data-te-select-init className='text-zinc-900 border-none focus:outline-none' name='request' onChange={checkSelection} defaultValue={"approved"}>
            <option value="approved">Approve</option>
            <option value="denied">Decline</option>      
            </select>

              {
                feedback && <>
                {/* Open the modal using ID.showModal() method */}
                <div className="p-0 my-1 cursor-pointer hover:bg-red-800" onClick={()=>window.my_modal_1.showModal()}>Give Feedback</div>
                <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Provide Feedback</h3>
                <input type='text' name='feedback' className='px-3 py-2 my-2 border border-slate-300' placeholder='your feedback (max 50 characters)' ref={feedbackRef} maxLength={50}></input>
                <div className="modal-action">
                <button className="btn">Ok</button>
                </div>
                </form>
                </dialog>
                </>
              }

            <button type='submit' className="text-xs mt-2 text-zinc-900 bg-white px-2 py-1" onClick={()=>setId(item._id)}>Submit</button>
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