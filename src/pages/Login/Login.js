import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';
import ContenewWithGoogle from '../SignUp/ContinewWithGoogle/ContenewWithGoogle';

const Login = () => {
    const { register,formState:{errors}, handleSubmit }=useForm();
    const {LoginUser}=useContext(AuthContext)
    const  [loginError, setLoginError]=useState();
    const location=useLocation()
    const navigate= useNavigate();
    const from =location?.state?.from?.pathNmae || '/'
    const handleLogin=(data)=>{

        console.log(data)
         LoginUser(data.email, data.password)
         .then(result => {
            const user=result.user;
            console.log(user)
            
            navigate(from, {replace:true})
         })
         .catch(e => {
            console.error(e)
            setLoginError(e.message)
        })
    }
    return (
        <div className='w-4/12 m-auto p-5 mt-44 shadow-2xl'>
            <div className=' '>
                <h1 className='text-4xl text-center font-bold text-secondary'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
               
                
                <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-xl">Your Email</span>
                </label>
                    <input type="email" {...register("email", {required: "Email Address is required"})} placeholder="Your Email" className="input input-bordered w-full" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                <label className="label">
                    <span className="label-text text-xl">password</span>
                </label>
                <input type="password" {...register("password", {required:true, })} placeholder="passwrd" className="input input-bordered w-full" />
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
                 <p><Link className='text-blue-700'>Forgate password</Link></p>
                <input className="btn btn-accent mt-5 w-full font-bold" value='Submit' type="submit" />
                <p className='text-red-600'>{loginError} </p>
                <p className='text-xl'>New to Doctors Portal? <Link className='text-secondary ' to='/signup'>Create new Acount</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
                <ContenewWithGoogle></ContenewWithGoogle>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;