import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import Footer from '../Components/Footer'

const Main = () => {
  return (
    <Container maxWidth='xl' sx={{padding: "1rem 0"}}>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </Container>
  )
}

export default Main