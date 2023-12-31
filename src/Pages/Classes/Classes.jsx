import React from 'react'
import UseClasses from '../../Hooks/UseClasses';
import ClassCard from '../../Components/ClassCard';

const Classes = () => {
    const [classes] = UseClasses();
    const filteredClasses = classes.filter((classes)=> classes.status !== 'pending' && classes.status !== "denied");

    return (
      <section className='w-11/12 sm:w-3/4 md:w-11/12 py-8 mx-auto'>
      <div className="hero bg-base-100 text-indigo-950 dark:text-white">
      <div className="text-center">
      <h1 className='text-3xl font-semibold uppercase'>Our Classes</h1>
      <p className="text-center text-xl mt-6">Join a Community of Music Lovers at our Transformative Musical Camp</p>
      </div>
      </div>
  
      <div className="container my-8 mx-auto px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 dark:text-white">
         
      {filteredClasses.map(classes =><ClassCard key={classes._id} data={classes}></ClassCard>)}
  
         </div>
         </div>
      </section>
    )
}

export default Classes