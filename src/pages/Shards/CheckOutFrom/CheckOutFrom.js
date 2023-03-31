import React, { useEffect, useState } from 'react';
import {CardElement,  useElements, useStripe} from '@stripe/react-stripe-js'
const CheckOutFrom = ({booking}) => {
   const [carderror, setCarderror]=useState('')
   const [success, setSuccess]=useState('')
   const [processing, setProcessing]=useState(false)
   const [transactionId, setTransactionId]=useState('')
   const [clientSecret, setClientSecret] = useState("");
    const stripe=useStripe();
    const elements= useElements();
     const {price, email,patient, _id}=booking;

     useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
           authorization: `berare ${localStorage.getItem('accessToken')}`
           },
        body: JSON.stringify({price}),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [price]); 

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(!stripe|| !elements){
        return;
        };

        const card = elements.getElement(CardElement);
        if(card === null){
          return;
        };
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
        if(error){
          console.log('error',error, );
          setCarderror(error.message)
        }else{
           setCarderror('')
        }
        setSuccess('');
        setProcessing(true)
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                name: patient,
                email: email,
              },
            },
          },
        );
        
        if(confirmError){
          setCarderror(confirmError.message);
          return;
        }
        if(paymentIntent.status === "succeeded"){
          console.log('card info', card)
           const payment ={
            price,
            transactionId: paymentIntent.id,
            email,
            bookingId: _id,
           }
          fetch('http://localhost:5000/payments', {
            method: 'POST',
            headers:{
              'content-type' : 'application/json',
              authorization: `berare ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.insertedId){
              setSuccess('congrats! your paymant commpleted');
               setTransactionId(paymentIntent.id)
            }
          })
        }
        setProcessing(false)
       
    }
    return (
         <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button 
        className='btn btn-sm btn-secondary mt-4' 
        type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
          
          <p className="text-red-600">{carderror}</p>

          {
           success && <div>
            <p className="text-3xl text-green-500">{success} </p>
            <p className='text-xl'>your transactionId <span className='font-bold'> {transactionId}</span></p>
           </div>
         }
         </>
         
    );
  };



export default CheckOutFrom;