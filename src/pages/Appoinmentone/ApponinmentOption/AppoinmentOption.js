import React from 'react';

const AppoinmentOption = ({appoinmentoption, setTritMent}) => {
    const {name,price, slots}=appoinmentoption;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="text-secondary text-2xl font-bold text-center">{name}</h2>
            <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
             <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces': 'space'} available </p>
             <p className='text-center'><small>Price: ${price}</small></p>
            <div className="card-actions justify-center">
            <label
              disabled={slots.length === 0}
             htmlFor="booking-modal" 
             className="btn btn-primary text-white text-center bg-gradient-to-r from-primary to-secondary"
             onClick={()=> setTritMent (appoinmentoption)}
             >Book Appoinment</label>
            </div>
        </div>
        </div>
    );
};

export default AppoinmentOption;