import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinment = ({selectedDate}) => {
    return (
        <div className='mt-16'>
            <p className='text-center text-2xl text-secondary font-bold'>Available Services on {format(selectedDate, 'PP')}</p>
        </div>
    );
};

export default AvailableAppoinment;