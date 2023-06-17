import React from 'react'
import img1 from '../../assets/whyus/instructor.jpg'
import img2 from '../../assets/whyus/instruments.jpg'
import img3 from '../../assets/whyus/performance.jpg'
import img4 from '../../assets/whyus/workshop.jpg'
import { Fade, Slide } from 'react-awesome-reveal'

const WhyUs = () => {
    const whyUs =  [
        {
          feature: 'Expert Instructors',
          description: 'Learn from highly skilled and experienced instructors at Harmony Harbor. Our team of music professionals will guide you through personalized lessons, providing expert guidance and support to help you master your chosen instrument.',
          img:img1
        },
        {
          feature: 'Diverse Instrument Selection',
          description: 'Explore a wide range of musical instruments at Harmony Harbor. Whether you\'re interested in piano, guitar, violin, or drums, we offer comprehensive lessons for various instruments, catering to all musical preferences and skill levels.',
          img:img2
        },
        {
          feature: 'Interactive Workshops and Ensemble Sessions',
          description: 'Enhance your musical journey through interactive workshops and ensemble sessions. Join fellow students to collaborate, play together, and refine your skills in a dynamic and supportive group setting.',
          img:img4
        },

        {
          feature: 'Performance Opportunities',
          description: 'Showcase your talent on stage with our performance opportunities at Harmony Harbor. From recitals to ensemble performances, our students have the chance to demonstrate their progress and gain confidence in front of a supportive audience as performers.',
          img:img3
        },
      ];
  return (
    <section className='w-11/12 sm:w-3/4 md:w-11/12 py-8 mx-auto'>
    <div className="hero bg-base-100">
    <div className="text-center text-indigo-950 dark:text-white">
    <Slide>
    <h1 className='text-3xl font-semibold uppercase'>Your Gateway to Unforgettable Summers</h1>
    </Slide>
    <Fade delay={1e2} cascade damping={1e-1}>
    <p className="text-center text-sm md:text-lg mt-6 w-full md:w-4/5 mx-auto">Choose Harmony Harbor for your summer instrument learning experience and harmonize your passion for music with the joys of summer, surrounded by expert instructors and a supportive community of fellow music enthusiasts</p>
    </Fade>
    </div>
    </div>

<div className="w-full py-6 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">

 { whyUs.map((element) =>  <div className="w-4/5 h-96 md:w-72 text-center px-2 py-3 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl text-slate-700 dark:text-white">
    <img className="h-40 object-cover rounded-xl w-full" src={element.img} alt=""/>
    <div className="p-2 text-center">
    <h2 className="font-bold text-lg mb-2 ">{element.feature}</h2>
    <p className="text-sm pb-2">{element.description}</p>
    </div>
  </div>)}

  </div>
  
  
  



    </section>
  )
}

export default WhyUs