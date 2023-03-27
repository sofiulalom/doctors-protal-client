import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManegeDoctor = () => {
    const {data: doctors=[]}=useQuery({
        queryKey: ['mangedoctors'],
        queryFn: async ()=> {
           try{
            const  res= await fetch(`http://localhost:5000/doctors`,{
                headers:{
                    authorization: `Berare ${localStorage.getItem('accessToken')}`
                }
            })
            const  data = await res.json()
            return data;
           }
           catch(error){

           }
        
        }
    })
    return (
        <div>
            <h1 className="text-4xl">Manage Doctor</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
               
                <thead>
                <tr>
                    <th></th>
                    <th>avater</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>spacialty</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
               
                  {
                    doctors?.map((doctor, i) => <tr key={doctor._id} className="hover">
                    <th>{i+1}</th>
                    <td><div className="avatar">
                    <div className="w-24 rounded-full">
                            <img src={doctor.image} alt='' />
                     </div>
                    </div></td>
                    <td>{doctor.name}</td>
                    <td>{doctor.email}</td>
                    <td>{doctor.specialty}</td>
                    <td><button className='btn btn-outline btn-error'>Delete</button></td>
                </tr> )
                  }
                
                
               
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default ManegeDoctor;