import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hocke/useToken';
import { AuthContext } from '../AuthProvider/Authprovider';
import ContenewWithGoogle from './ContinewWithGoogle/ContenewWithGoogle';

const SignUp = () => {
    const {register,formState:{errors}, handleSubmit}=useForm();
    const { createSignUp, UpdataeuserProfiele}=useContext(AuthContext)
    const  [loginError, setLoginError]=useState();
    const [createUserEmail,setCreateUserEmail]=useState('')
    const  [token]=useToken(createUserEmail);
    const navigate=useNavigate();

    if(token){
        navigate('/')
    }
    const handleSignUp=data=>{
         console.log(data)
         createSignUp(data.email, data.password)
         .then(result=> {
            const user=result.user;
            console.log(user)
            const userinfo={
                displayName: data.name
            }
            UpdataeuserProfiele(userinfo)
            .then(()=> {
                seveduser(data.name, data.email)
               
            } )
            .catch(e => console.log(e))
         })
         .catch(e => {
            console.log(e)
            setLoginError(e.message)
           
        
        })
      

    }
    const seveduser= (name, email)=>{
         const user={name, email}
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCreateUserEmail(email)
            
           
        })
    }
    
    return (
        <div className='w-4/12 m-auto p-5 mt-44 shadow-2xl'>
        <div className=' '>
            <h1 className='text-4xl text-center font-bold text-secondary'>SignUp</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full ">
            <label className="label">
                <span className="label-text text-xl">Your Name</span>
            </label>
                <input type="text" {...register("name", {required: "Email Address is required"})} placeholder="Name" className="input input-bordered w-full" />
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
             
            <input className="btn btn-accent mt-5 w-full font-bold" value='Sign-Up' type="submit" />
            <p className='text-red-600'>{loginError} </p>
            <p className='text-xl'>Allrady have an acount! <Link className='text-secondary ' to='/login'>you are Login know</Link></p>
            <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <ContenewWithGoogle></ContenewWithGoogle>
            </div>
            </form>
        </div>
    </div>
    );
};

export default SignUp;