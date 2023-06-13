import React from 'react'
import UseCarts from '../../../Hooks/useCarts'
import { FaRegTrashAlt } from 'react-icons/fa'

const MyClasses = () => {

    const [cart] = UseCarts()
    // classImage,className,email,instructorName,price_id

    console.log(cart)

  return (
    <table className="table w-[50vw]">
    {/* head */}
    <thead>
      <tr>
        <th className=' text-white bg-primary hover:bg-indigo-800 text-center w-max'>#</th>
        <th className=' text-white bg-primary hover:bg-indigo-800 text-center w-max'>image</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Name</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Price</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>action</th>
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
            <button className="btn bg-white py-0" onClick={()=>handleDelete(item)}>
             <FaRegTrashAlt></FaRegTrashAlt>
            </button>
            </td>    
            <td>
            <button className="btn btn-primary btn-outline" onClick={()=>handleDelete(item)}>
             Enroll Now
            </button>
               
            </td>    
          </tr>
        ))
    }
    </tbody>   
  </table>
  )
}

export default MyClasses