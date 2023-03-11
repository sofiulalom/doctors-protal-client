import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppoinmentOption from '../ApponinmentOption/AppoinmentOption';

const AvailableAppoinment = ({selectedDate}) => {
    const [appoinmentoption, setAppoinmentoption]=useState([]);
    useEffect(()=>{
          fetch(`appoinmentOption.json`)
          .then(res => res.json())
          .then(data => {
            
            setAppoinmentoption(data)
        })
    },[])
    return (
        <section className='my-16'>
            <p className='text-center lg:text-2xl text-secondary font-bold text-xl'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
             {
                appoinmentoption.map(option => <AppoinmentOption
                key={option._id}
                option={option}                
                ></AppoinmentOption>)
             }
            </div>
        </section>
    );
};

export default AvailableAppoinment;