import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/Authprovider';

const BookingModal = ({tritment,selectedDate ,setTritMent, refetch}) => {
    const {user}=useContext(AuthContext)
    const { name:tritmantName  ,slots}=tritment;
    const date =format(selectedDate, 'PP');
    const handleBooking=event=> {
         event.preventDefault();
         const form =event.target;
         const slot=form.slot.value;
         const name=form.name.value;
         const email=form.email.value;
         const phone =form.phone.value;
        

          const booking ={
            appoinmentDate: date,
            tritmantName: tritmantName,
            patient: name,
            email,
            slot,
            phone,
          }
  
        console.log(booking)
         fetch('http://localhost:5000/bookings', {
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking),

         })
         .then(res => res.json())
        .then(data => {
          console.log(data)
        if(data.acknowledged){
 
          setTritMent(null)
          toast.success('Successfully confirmd!')
          
          refetch()
        }else{
            toast.error(data.message)
        }
        })
         
    }
    return (
        <div>
       <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">{tritmantName}</h3>
            <form onSubmit={handleBooking} className='mt-6 grid gap-6 grid-cols-1'>
            <input type="text" disabled value={date} className="input input-bordered w-full " />
            <select name='slot' className="select select-bordered w-full">
            
            {
              slots.map((slot, i)=> <option
               value={slot}
               key={i}
              >{slot}</option>)
            }
            </select>
            <input naem='name' type="text" defaultValue={user?.displayName} className="input input-bordered w-full " />
            <input name='email'  type="email" defaultValue={user?.email} disabled className="input input-bordered w-full " />
            <input name='name'  type="text"  defaultValue={user?.displayName}className="input input-bordered w-full " />
            <input name='phone'  type="text" placeholder='name' className="input input-bordered w-full " />
            
            <input className='btn btn-accent w-full' type="submit" value="Submit" />
            </form>
        </div>
        </div>
        </div>
    );
};

export default BookingModal;
