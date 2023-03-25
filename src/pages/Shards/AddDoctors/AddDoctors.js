import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';


const AddDoctors = () => {
    const {register,formState:{errors}, handleSubmit}=useForm();
    const ImageHostKey=process.env.REACT_APP_Imagebb_key;
   
    const {data: specialtes=[]}=useQuery({
        queryKey: ['specialty'],
        queryFn: async() =>{
            const res =await fetch(`http://localhost:5000/appoinmentSpeciailty`)
            const data = await res.json();
            return data; 
        }
    })
    const handleAddDoctor=data =>{
       
        const image=data.img[0];
        const formData=new FormData();
        formData.append('image', image)
        
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${ImageHostKey}}`,{
            method: 'post',
            body: formData,
        })
        .then(res => res.json())
        .then(imgData => {
            
            if(imgData.success){
                console.log(imgData.data.url);
            }
            const  doctor={
                name: data.name,
                email: data.email,
                specialty: data.specialty,
                image: imgData.data.url,
            }
            fetch(`http://localhost:5000/doctors`, {
                method:'POST',
                headers:{
                    'content-type': 'application/json',
                    authorization:  `Berare ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res=> res.json())
            .then(result =>{
                console.log(result)
            })
            
        })
       
    }
    return (
        <div className='w-96 p-7'>
            <h1 className="text-4xl">Add a doctor</h1>

            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                <span className="label-text text-xl">Specialty</span>
            </label>
            <select 
            {...register('specialty')}
            className="select input-bordered select-ghost w-full max-w-xs">
            {
                specialtes?.map(specialty =><option
                 key={specialty._id}
                 value={specialty.name}
                
                >{specialty.name}</option> )
            }
            
            
            </select>
            </div>
            <div>
            <label className="label">
                <span className="label-text text-xl">Photo</span>
            </label>
                <input type="file" {...register("img", {required: "photo is a required"})} 
                placeholder="photo" className=" w-full" />
            </div>
             
            <input className="btn btn-accent mt-5 w-full font-bold" value='Add a doctor' type="submit" />
            <p className='text-red-600'> </p>
            
            <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            
            </div>
            </form>
         </div>
    );
};

export default AddDoctors;