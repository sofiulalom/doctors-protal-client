import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: users= [], refetch}=useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/users`)
            const data =await res.json();
            return data ;
        }
    });
    const handleMackAdmin=id=>{
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers:{
                authorization: `berare ${localStorage.getItem('accessToken')}`
            }
            
        })
        .then(res => res.json())
        .then( data=> {
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Mack admin successfull')
                refetch();
            }
        })
    }
    return (
        <div>
            <h1 className="text-2xl">All users</h1>
            <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
               
                {
                    users?.map((user, i) => <tr key={user._id} className="hover">
                    <th>{i+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{ user?.role !== 'admin' && 
                        <button onClick={()=> handleMackAdmin(user._id)} className='btn btn-xs btn-outline'>Mack Admin</button>}</td>
                    <td><button className='btn btn-xs btn-outline'>Delete</button></td>
                </tr>)
                }
                
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default AllUsers;