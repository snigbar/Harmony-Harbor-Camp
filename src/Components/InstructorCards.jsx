import React from 'react'
import { Link } from 'react-router-dom'
import UseClasses from '../Hooks/UseClasses';
import {FaUserGraduate} from 'react-icons/fa';
const InstructorCards = ({data}) => {

    const {name, pictureurl, students,_id} = data;
    const [classes] = UseClasses()

    const classesByInstructor = classes.filter((classItem) => classItem.instructorName === name).filter((classes)=> classes.status !== 'pending');;

  return (
    <div className="my-4 px-1 w-full">

    <article className="overflow-hidden rounded-lg shadow-lg">

        
    <img alt={name} className="block w-full h-64 object-cover object-top transition-opacity" src={pictureurl}/>


    <header className="flex flex-col items-center gap-2 leading-tight p-2 md:p-4">
        <h1 className="text-lg">
          {name}
           
        </h1>
        
        <div className='flex items-center gap-2'>Instructor</div>
     
    </header>

    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <p className="text-sm">
                <FaUserGraduate className='text-xs inline mb-1 me-1 text-slate-400'/>students: {students}
            </p>
            <p className="text-sm"># Total Courses: {classesByInstructor.length}</p>

           
    </footer>

    <Link to={`/instructors/${_id}`} className='flex justify-center py-4'> <button className="rounded-full py-2 px-4 bg-gradient-to-r from-indigo-700 to-indigo-600 hover:bg-gradient-to-l text-white font-bold transition duration-500 ease-in-out">See Classes</button></Link>

</article>


</div>
    
  )
}

export default InstructorCards