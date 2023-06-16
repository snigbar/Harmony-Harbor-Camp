import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UseIsInstructor from '../Hooks/UseIsInstructor'
import { AuthContext } from '../Providers/AuthProvider'

const InstructorRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const [isInstructor, isLoading] = UseIsInstructor()
    const navigate = useNavigate()

   
    if(loading) return  <div className="h-screen flex justify-center items-center">
    <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full border-2 border-white"></div>
    </div> 
    </div>
    
    if(user && isInstructor) return children;

    return navigate('/', {replace:true})
  
}

export default InstructorRoute