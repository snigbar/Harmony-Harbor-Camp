import React from 'react'
import Carousel from '../../Components/Carousel'
import PopularClasses from './PopularClasses'
import PopularInstructors from './PopularInstructor'
import Leaflet from './Leaflet'

const Home = () => {
  return (
  <>
   <Carousel></Carousel>
   <PopularClasses></PopularClasses>
   <PopularInstructors></PopularInstructors>
   <Leaflet></Leaflet>
   </>
  )
}

export default Home