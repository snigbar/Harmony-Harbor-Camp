import React from 'react'
import Useinstructors from '../../Hooks/useInstructors'
import UseClasses from '../../Hooks/UseClasses'
import { useParams } from 'react-router'
import ClassCard from '../../Components/ClassCard'

const InstructorClasses = () => {

    const [instructors] =Useinstructors()
    const {id} = useParams()
    const instructor = instructors.find(el => el._id === id)
    const [classes] = UseClasses();
    
    const classesByInstructor = classes.filter((classItem) => classItem.instructorName === instructor.name).filter((classes)=> classes.status !== 'pending' && classes.status !== 'denied');
    console.log(classesByInstructor)
  return (
    <section className='w-11/12 sm:w-3/4 md:w-11/12 py-8 mx-auto'>
    <div className="hero bg-base-100">
    <div className="text-center">
    <h1 className='text-3xl text-indigo-950 font-semibold uppercase'>{instructor.name}</h1>
    <p className="text-center text-xl text-indigo-950 mt-6">Expert Instructors, Passionate Musicians</p>
    </div>
    </div>

    <div className="container my-8 mx-auto px-4 md:px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-3">
       
    {classesByInstructor.map(classes =><ClassCard key={classes._id} data={classes}></ClassCard>)}

       </div>
       </div>
    </section>
  )
}

export default InstructorClasses