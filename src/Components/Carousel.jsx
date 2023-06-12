import React from 'react'
import banner1 from '../assets/banner/banner1.jpg'
import banner2 from '../assets/banner/banner2.jpg'
import banner3 from '../assets/banner/banner3.jpg'
import banner4 from '../assets/banner/banner4.jpg'

function Carousel() {

  return (
    <div className="carousel w-full rounded-3xl h-[80vh]">
        {/* slide 1 */}
    <div id="slide1" className="carousel-item relative w-full">
      <img src={banner1} className="w-full object-cover" />
    <div className="absolute w-3/5 h-full bg-gradient-to-r from-[#141414] to-[rgba(0,0,0,0)]">
        <div className='flex flex-col justify-center h-full items-start ms-24 w-full gap-4 text-white'>
        <h1 className="text-6xl tracking-[2px] font-bold">Instrumental Beats, Summer Retreat!</h1>
        <p className="text-xl text-center lg:text-left w-4/5  font-semibold lg:w-3/5">Unleash Your Musical Talent at Harmony Harbor Camp - The Ultimate Summer Musical School Experience!</p>
        <button className="hover:bg-indigo-600 bg-cyan-500 font-semibold text-white py-3 px-6 rounded-full text-lg">Discover More</button>
       
        </div>

    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn rounded-2xl bg-cyan-500 fill-white text-white hover:bg-yellow-400 border-none">❮</a> 
        <a href="#slide2" className="btn rounded-2xl bg-cyan-500 fill-white text-white hover:bg-yellow-400 border-none">❯</a>
      </div>    
      </div> 

    {/* slide 2 */}
    <div id="slide2" className="carousel-item relative w-full">
      <img src={banner2} className="w-full object-cover" />
    <div className="absolute w-3/5 h-full bg-gradient-to-r from-[#141414] to-[rgba(0,0,0,0)]">
        <div className='flex flex-col justify-center h-full items-start ms-24 w-full gap-4 text-white'>
        <h1 className="text-6xl tracking-[2px] font-bold">Discover Your Musical Instrument!!</h1>
        <p className="text-xl text-center lg:text-left w-4/5  font-semibold lg:w-3/5">Calling All Aspiring Musicians! Join Harmony Harbor Camp for a Summer of Melodies and Memories!</p>
        <button className="hover:bg-indigo-600 bg-cyan-500 font-semibold text-white py-3 px-6 rounded-full text-lg">Discover More</button>
       
        </div>

    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn rounded-2xl bg-cyan-500 fill-white text-white hover:bg-yellow-400 border-none">❮</a> 
        <a href="#slide3" className="btn rounded-2xl bg-cyan-500 fill-white text-white hover:bg-yellow-400 border-none">❯</a>
      </div>    
      </div> 

    {/* slide-3 */}
    <div id="slide3" className="carousel-item relative w-full">
      <img src={banner3} className="w-full object-cover" />
    <div className="absolute w-3/5 h-full bg-gradient-to-r from-[#141414] to-[rgba(0,0,0,0)]">
        <div className='flex flex-col justify-center h-full items-start ms-24 w-full gap-4 text-white'>
        <h1 className="text-6xl tracking-[2px] font-bold">Play, Learn, Summer Instruments!</h1>
        <p className="text-xl text-center lg:text-left w-4/5  font-semibold lg:w-3/5">Discover the Magic of Music at Harmony Harbour Camp - Where Summer Meets Symphony!</p>
        <button className="hover:bg-indigo-600 bg-cyan-500 font-semibold text-white py-3 px-6 rounded-full text-lg">Discover More</button>
       
        </div>

    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn rounded-2xl bg-cyan-500 fill-white text-white hover:bg-yellow-400 border-none">❮</a> 
        <a href="#slide4" className="btn rounded-2xl bg-cyan-500 fill-white text-white hover:bg-yellow-400 border-none">❯</a>
      </div>    
      </div> 

    {/* slide-4*/}
    <div id="slide4" className="carousel-item relative w-full">
      <img src={banner4} className="w-full object-cover" />
    <div className="absolute w-3/5 h-full bg-gradient-to-r from-[#141414] to-[rgba(0,0,0,0)]">
        <div className='flex flex-col justify-center h-full items-start ms-24 w-full gap-4 text-white'>
        <h1 className="text-6xl tracking-[2px] font-bold">Summer Sounds: Instrumental Journey!</h1>
        <p className="text-xl text-center lg:text-left w-4/5  font-semibold lg:w-3/5">Experience the Rhythm of Summer at Harmony Harbor Camp - Your Gateway to Musical Excellence!</p>
        <button className="hover:bg-indigo-600 bg-cyan-500 font-semibold text-white py-3 px-6 rounded-full text-lg">Discover More</button>
       
        </div>

    </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn rounded-2xl bg-cyan-500 fill-white text-white hover:bg-yellow-400 border-none">❮</a> 
        <a href="#slide1" className="btn rounded-2xl bg-cyan-500 fill-white text-white hover:bg-yellow-400 border-none">❯</a>
      </div>    
      </div> 
    
    </div>
    
  )
}

export default Carousel