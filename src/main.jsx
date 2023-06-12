import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.StrictMode>
    <RouterProvider router={router} fontFamily="Robot"/>
  </React.StrictMode>
  </React.StrictMode>,
)
