import React, { useContext } from 'react'
import UseClasses from '../../Hooks/UseClasses';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const InstructorClassesDashBoard = () => {
  const [classes] = UseClasses()
  const {user} = useContext(AuthContext)
  const classesByInstructor = classes.filter((classItem) => classItem.instructorEmail === user.email)
 
   // '_id', 'className', 'classImage', 'instructorName', 'instructorEmail', 'availableSeats', 'price', 'status', 'enrolled', 'value'
  return (
    <table className="table w-4/5 text-center">
    {/* head */}
    <thead className='mx-auto'>

      <tr>
        <th className=' text-white bg-primary hover:bg-indigo-800 text-center w-max'>Class Name</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Email</th>
        <th className=' text-white bg-primary hover:bg-indigo-800 text-center w-max'>Price</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>availableSeats</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Status</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Feedback</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Update</th>
       
      </tr>
    </thead>
    <tbody>
    {/* values */}

    {
        classesByInstructor.map((item) => (
            <tr key={item._id} className={`text-end text-zinc-800 ${item.status === 'pending'? 'bg-indigo-100':item.status === 'denied'?'border border-red-700 text-red-700':''}`}>
            <td>
            {item.className}
            </td>
            <td className="text-end text-sm">{item.instructorEmail}</td>
            <td className="text-end text-sm">${item.availableSeats}</td>
            <td className="text-sm font-semibold">{item.price}</td>
            <td className='text-end text-sm'>{item.status}</td> 
            <td className="text-end text-sm">{item.feedback} dfdfdsfsd</td> 
            <td><Link to={`/dashboard/instructorclasses/update/${item._id}`}><button className="bg-white"><FaEdit></FaEdit></button></Link></td>
          </tr>
        ))
    }
    </tbody>   
  </table>
  )
}

export default InstructorClassesDashBoard