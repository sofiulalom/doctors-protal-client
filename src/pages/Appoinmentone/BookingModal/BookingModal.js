import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({tritment,selectedDate ,setTritMent}) => {
    const {name ,slots}=tritment;
    const date =format(selectedDate, 'PP');
    const handleBooking=event=> {
         event.preventDefault();
         const form =event.target;
         const slot=form.slot.value;
         const name=form.name.value;
         const email=form.email.value;
         const phone =form.phone.value;

          const booking ={
            selectedDate: date,
            tritment: name,
            patient: name,
            email,
            slot,
            phone,
          }
          setTritMent(null)
         console.log(booking);
    }
    return (
        <div>
       <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box relative">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">{name}</h3>
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
            <input name='name' type="text" placeholder="your Name" className="input input-bordered w-full " />
            <input name='email'  type="email" placeholder="Email Address" className="input input-bordered w-full " />
            <input name='phone' type="text" placeholder="Phone number" className="input input-bordered w-full " />
            <input className='btn btn-accent w-full' type="submit" value="Submit" />
            </form>
        </div>
        </div>
        </div>
    );
};

export default BookingModal;