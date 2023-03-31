import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckOutFrom from '../../../CheckOutFrom/CheckOutFrom';
import Lowadig from '../../Lowading/Lowadig';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking =useLoaderData();
    const navingation=useNavigation();
    const {tritmantName,price,appoinmentDate, slot}=booking;
     if(navingation.state === 'loading'){
      return <Lowadig></Lowadig>
     }
    return (
        <div className='mt-10'>
            <h2 className='text-4xl text-green-700 font-bold mb-4'>Payment </h2>
         <div className="card w-full  shadow-xl">
        <div className="card-body">
            <h2 className="card-title font-bold text-3xl">Payment for {tritmantName}</h2>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your apointment on {appoinmentDate} at {slot} </p>
        </div>
        </div>

         <div className='my-10 w-1/2'>
         <Elements stripe={stripePromise}>
            <CheckOutFrom 
            booking={booking}
            />
        </Elements>

         </div>

        </div>
    );
};

export default Payment;