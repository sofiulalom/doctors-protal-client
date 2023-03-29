import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfiremationModal from '../../../ConfiremationModal/ConfiremationModal';

const ManegeDoctor = () => {
    const [deletingDoctor, setDeletingDoctor]=useState(null)
    const closedModal=()=>{
        setDeletingDoctor(null)
    }
    const {data: doctors=[], refetch}=useQuery({
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
    });


    const handleDoctorDelete= doctor =>{
       fetch(`http://localhost:5000/doctors/${doctor._id}`, {
        method: 'DELETE',
        headers:{
            authorization: `Berare ${localStorage.getItem('accessToken')}`
        }
       })
       .then(res => res.json())
       .then(data => {
        
        if(data.deletedCount > 0){
            refetch();
            toast.success(`Doctor ${doctor.name} deleted successfully`)
            
        }
        
       })
    }
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
                    <td>
                    <label onClick={()=> setDeletingDoctor(doctor)}
                     htmlFor="Confiremation-modal" className="btn btn-outline btn-error">Delete</label>
                    </td>
                </tr> )
                  }
                
                
               
                </tbody>
            </table>
            </div>
            {
            deletingDoctor && <ConfiremationModal
              title={`Are you sure want to delete? `}
              message={`if you delete ${deletingDoctor.name}. It cannot be undone`}
              successAction={handleDoctorDelete}
              successDelete="DELETE"
              modalData={deletingDoctor}
              closedModal={closedModal}
              
              >
              </ConfiremationModal>
            }
        </div>
    );
};

export default ManegeDoctor;