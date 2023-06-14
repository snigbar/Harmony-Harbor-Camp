import React from 'react'
import UsePayments from '../../Hooks/usePayments'
import { Link } from 'react-router-dom'
import moment from 'moment/moment'


const PayHistory = () => {
    const [payments, refetch] = UsePayments()

    const dateFormat = (date) =>{
      const parsedDate = moment(date);
      const formattedDate = parsedDate.format("YYYY-MM-DD");
      const formattedTime = parsedDate.format("HH:mm");
      return `${formattedDate} : ${formattedTime}`
    }

    // ['_id', 'email', 'transactionId', 'price', 'date', 'cartId', 'status', 'className', 'classId']
  return (
    
    <table className="table w-[50vw]">
    {/* head */}
    <thead>
      <tr className='text-center'>
        <th className=' text-white bg-primary hover:bg-indigo-800 text-center w-max'>#</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Class Name</th>
        <th className=' text-white bg-primary hover:bg-indigo-800 text-center w-max'>TransactionId</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Price</th>
        <th className=' text-white bg-primary hover:bg-indigo-800'>Date</th>
       
      </tr>
    </thead>
    <tbody>
    {/* values */}

    {
        payments.map((item,index) => (
            <tr key={item._id}>
            <td>
            {index + 1}
            </td>

            <td className="text-sm font-semibold">
            {item.className}
            </td>
            <td className="text-end text-xs">{item.transactionId}</td>
            <td>
            <td className="text-end text-sm">${item.price}</td>
            </td>    
            <td>
            <td className="text-end text-sm">{dateFormat(item.date)}</td> 
            </td>    
          </tr>
        ))
    }
    </tbody>   
  </table>
  )
}

export default PayHistory