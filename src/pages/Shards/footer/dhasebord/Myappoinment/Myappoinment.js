import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/Authprovider';

const Myappoinment = () => {
    const {user}=useContext(AuthContext)

    const url=`http://localhost:5000/bookings?email=${user?.email}`;
    const {data: bookings = []}=useQuery({
         queryKey: ['bookings', user?.email],
         queryFn: async ()=> {
            const res = await fetch(url,{
                headers:{
                    authorization: `berare ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data ;
         } 
        
    })
    return (
        <div className=''>
            <h1 className='text-2xl mt-5 font-bold'>MyAppoinment</h1>
            
            <div className="overflow-x-auto mt-2">
            
            <table className="table w-full">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Treitment</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>payment</th>
                    
                </tr>
                </thead>
                <tbody>
                
                  { bookings &&
                    bookings?.map((booking, i) => <tr className='hover'>
                    <th>{i+1}</th>
                    <td>{booking.patient}</td>
                    <td>{booking.tritmantName}</td>
                    <td>{booking.appoinmentDate}</td>
                    <td>{booking.slot}</td>
                    <td>
                        {booking.price && !booking.paid && <Link to={`/dashbowrd/payment/${booking._id}`}>
                            <button className='btn btn-sm btn-outline btn-primary'>
                            pay</button></Link>
                        
                        
                        }
                        {
                            booking.price && booking.paid && <span className='text-green-500'>paid</span>
                        }
                       </td>
                   
                </tr>)
                 } 
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Myappoinment;