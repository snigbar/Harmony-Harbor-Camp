import React from 'react'
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'


const Leaflet = () => {
  return (

    <section className='w-11/12 sm:w-3/4 md:w-11/12 py-8 mx-auto h-full'>
    

    <h1 className='text-3xl text-indigo-950 font-semibold uppercase text-center'>Get directions to our location</h1>
   
    <p className="text-center text-md font-normal my-5"> 456 Elm Avenue, Springfield, Anytown, USA, 12345</p>

    <hr className='border-t border-indigo-800 border-8 mx-auto'/>
 
    <MapContainer center={[37.123456, -95.987654]} zoom={13} scrollWheelZoom={false} style={{height:"70vh", width:"100%", scrollX:"none"}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[37.123456, -95.987654]}>
  <Popup>
  456 Elm Avenue, Springfield, Anytown, USA, 12345
      </Popup>
  </Marker>
</MapContainer>
</section>
  )
}

export default Leaflet