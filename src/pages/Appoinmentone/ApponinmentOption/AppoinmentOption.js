import React from 'react';

const AppoinmentOption = ({option}) => {
    const {name, slots}=option;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="text-secondary text-2xl font-bold text-center">{name}</h2>
            <p className='text-center'>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
             <p className='text-center'>{slots.length} {slots.length > 1 ? 'spaces': 'space'} available </p>
            <div className="card-actions justify-center">
            <button className="btn btn-primary text-center bg-gradient-to-r from-primary to-secondary">Book Appoinment </button>
            </div>
        </div>
        </div>
    );
};

export default AppoinmentOption;