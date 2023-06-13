import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import Swal from 'sweetalert2';
import {FaEye,FaEyeSlash} from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../../Components/SocialLogin';

const Login = () => {

    const [show, setshow] = useState(true)
    const {signIn} = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const onSubmit = data => {
  
      signIn(data.email,data.password)
      .then(result => {
        const user = result.user;
        Swal.fire({
            title: `Welcome back, ${user?.displayName}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        navigate(from, { replace: true });
    })
    };

  

    
   

  return (
    <div className="hero min-h-[80vh] bg-base-200">
  <div className="hero-content flex-col lg:flex-row">

    <div className="text-center lg:text-left w-full md:w-1/2">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    
    <form onSubmit={handleSubmit(onSubmit)} className='w-2/5'>
    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })}/>
        </div>
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='flex gap-2 items-center justify-between'><input type={show?"password":"text"} placeholder="password" name="password" className="input input-bordered w-full" {...register("password", { required: true })}/><button className='btn' onClick={(e) =>{e.preventDefault();setshow(!show)}}>{show?<FaEye/>:<FaEyeSlash/>}</button></div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
       
  
        <div className="form-control mt-6">
            {/* todo add disable*/}
          <button className="btn btn-primary" type='submit'>Login</button>
        </div>
        <div className="form-control">
          <Link to='/register' className="text-zinc-600 hover:text-zinc-800 text-lg my-4 cursor-pointer" type='submit'>Don't have an account? Register</Link>
        </div>
      <SocialLogin></SocialLogin>
      </div>
    </div>
    </form>


  </div>
</div>
  )
}

export default Login