
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {useState } from 'react';
import Lowadig from '../../Shards/footer/Lowading/Lowadig';
import AppoinmentOption from '../ApponinmentOption/AppoinmentOption';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppoinment = ({selectedDate}) => {
    
    const [tritment, setTritMent]=useState(null)
    const date = format(selectedDate, 'PP')
    
    const { data: appoinmentoption = [], refetch, isLoading}= useQuery({
         queryKey: ['appoinmentOption', date],
         queryFn: async () => {
            const res = await fetch(`http://localhost:5000/v3/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data; 
         }
    });
    if(isLoading){
        return <Lowadig></Lowadig>
    }
    
    
    
    
     
   
    return (
        <section className='my-16'>
            <p className='text-center lg:text-2xl text-secondary font-bold text-xl'>Available Services on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
             {
                appoinmentoption.map(option => <AppoinmentOption
                key={option._id}
                appoinmentoption={option}   
                setTritMent={setTritMent}             
                ></AppoinmentOption>)
             }
            </div>
             
                {  tritment &&
                    <BookingModal
                    setTritMent={setTritMent}
                    selectedDate={selectedDate}
                    refetch={refetch}
                tritment={tritment}
                ></BookingModal>}
         
        </section>
    );
};

export default AvailableAppoinment;