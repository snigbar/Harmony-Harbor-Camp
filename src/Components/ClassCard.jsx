import React from 'react'
import {FaUserGraduate} from 'react-icons/fa';
import { Link } from 'react-router-dom';




const ClassCard = ({data}) => {

    const {className, classImage, price,instructorName,availableSeats} = data;

  return (
        

    <div className="my-4 px-1 w-full">

    <article className="overflow-hidden rounded-lg shadow-lg">

        
    <img alt={className} className="block w-full h-64 object-cover object-top transition-opacity" src={classImage}/>


    <header className="flex flex-col items-center gap-2 leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          {className}
           
        </h1>
        
        <div className='flex items-center gap-2'>Instructor: {instructorName}</div>
     
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <p className="text-sm">
                <FaUserGraduate className='text-xs inline mb-1 me-1 text-slate-400'/>Avaialable Seats: {availableSeats}
            </p>
            <p className="text-sm">Price: {price}$</p>

           
    </footer>

    <Link to='' className='flex justify-center py-4'> <button className="rounded-full py-2 px-6 bg-gradient-to-r from-indigo-700 to-indigo-600 hover:bg-gradient-to-l text-white font-bold transition duration-500 ease-in-out">Select</button></Link>

</article>


</div>
    


  )
}

export default ClassCard