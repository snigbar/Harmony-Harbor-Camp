import React from 'react'
import Carousel from '../../Components/Carousel'
import PopularClasses from './PopularClasses'
import PopularInstructors from './PopularInstructor'
import WhyUs from './whyUs'
import ContactUs from './ContactUs'




const Home = () => {
  return (
  <>
   <Carousel></Carousel>
   <PopularClasses></PopularClasses>
   <PopularInstructors></PopularInstructors>
   <WhyUs></WhyUs>
   <ContactUs></ContactUs>

   </>
  )
}

export default Home