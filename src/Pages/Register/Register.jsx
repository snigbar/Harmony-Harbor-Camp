import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin';


const Register = () => {

    const { register, handleSubmit, reset,watch, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

  
    const onSubmit = data => {
  
      createUser(data.email, data.password)
          .then(result => {
  
              const loggedUser = result.user;
              console.log(loggedUser);
  
              updateUserProfile(data.name, data.photo)
              .then(() => {

                    const createUser = {
                    email: data.email,
                    pictureurl: data.photo,
                    gender: data.gender,
                    name: data.name,
                    contact: data.contact,
                    address: data.address,
                    role: 'student'
                    };

                    console.log(data.email, data.photo, data.gender,data.name,data.contact,data.address)
                  fetch('https://harmony-harbor-backend.vercel.app/users', {
                      method: 'POST',
                      headers: {
                          'content-type': 'application/json'
                      },
                      body: JSON.stringify(createUser)
                  })
                      .then(res => res.json())
                      .then(data => {
                          if (data.insertedId) {
                              reset();
                              Swal.fire({
                                  position: 'center',
                                  icon: 'success',
                                  title: `Thank you, ${data.name}`,
                                  showConfirmButton: false,
                                  timer: 3000
                              });
                              reset()
                              navigate('/');
                          }
                      })



              })
              .catch(error => console.log(error))
      })
   
    
  };
  
  
  
    return (
     <>
      <div className="hero min-h-[70vh] bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
  
      <div className="text-center lg:text-left w-full md:w-1/2">
        <h1 className="text-5xl font-bold">Register</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className='w-full lg:w-1/2'>
      <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
        <div className="card-body">
        {/* name */}
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="name" name="name" className="input input-bordered" {...register("name", { required: true })}/>
          {errors.name && <span className="text-red-600 text-sm">Name is required</span>}
          </div>

{/* gender and address */}
        <div className="flex justify-between gap-3 w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Gender</span>
            </label>
            <select placeholder="gender" name="gender" className="input input-bordered" {...register("gender", { required: true })}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
          {errors.name && <span className="text-red-600 text-sm">Gender is required</span>}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input type="text" placeholder="address" name="address" className="input input-bordered" {...register("address", { required: true })}/>
          {errors.name && <span className="text-red-600 text-sm">Address is required</span>}
          </div>
          </div>

         {/* photo url */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input type="text" placeholder="Photo Url" name="photo" className="input input-bordered" {...register("photo", { required: true })}/>
          {errors.photo && <span className="text-red-600 text-sm">Photo Url is required</span>}
          </div>
        
        {/* contact */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Contact</span>
            </label>
            <input type="number" placeholder="contact number" name="contact" className="input input-bordered" {...register("contact", { required: true })}/>
          {errors.photo && <span className="text-red-600 text-sm">contact number is required</span>}
          </div>
  
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" {...register("email", { required: true })}/>
          {errors.email && <span className="text-red-600 text-sm">Email is required</span>}
          </div>

          {/* password */}
          <div className='flex gap-4 justify-between'>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" 
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/
          })}/>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          {errors.password?.type === 'required' && <p className="text-red-600 text-sm">Password is required</p>}
          {errors.password?.type === 'minLength' && <p className="text-red-600 text-sm">Password must be 6 characters</p>}
          {errors.password?.type === 'maxLength' && <p className="text-red-600 text-sm">Password must be less than 20 characters</p>}
          {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm">must have a capital letter ,must have a special character</p>}
          </div>

        <div className="form-control w-full">
        <label className="label">
        <span className="label-text">Confirm Password</span>
        </label>
        <input
        type="password"
        placeholder="confirm password"
        name="confirmpass"
        className="input input-bordered"
        {...register("confirmpass", {
        required: "Confirm Password is required",
        validate: (val) => {
            if (watch('password') != val) {
              return "Your passwords do no match";
            }
        }})}
        />
        {errors.confirmpass && (
        <p className="text-red-600 text-sm">{errors.confirmpass.message}</p>
        )}
</div>
</div>
  
  
          <div className="form-control mt-6">
            <button className="btn btn-primary" type='submit'>Register</button>
          </div>
          <div className="form-control">
            <Link to='/login' className="text-zinc-600 hover:text-zinc-800 text-lg my-4 cursor-pointer" type='submit'>Already have an account? Login</Link>
          </div>
         
        </div>
          {/* google login */}
          <SocialLogin></SocialLogin>
  
      </div>
      </form>
          
        
    </div>
  </div>
     </>
    )
  }
  

export default Register