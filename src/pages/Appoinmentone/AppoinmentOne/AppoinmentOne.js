import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBannar/AppoinmentBanner';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const AppoinmentOne = () => {
    const [selectedDate, setSelectedDate]=useState(new Date())
    return (
        <div>
            <AppoinmentBanner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppoinmentBanner>
            <AvailableAppoinment
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AvailableAppoinment>
        </div>
    );
};

export default AppoinmentOne;