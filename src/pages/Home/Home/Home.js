import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../banner/Banner';
import Infocards from '../banner/infoCards/Infocards';
import Services from '../services/Services';
import Tastimonialdata from '../Tastimonial/Tastimonialdata';
import ContactUs from './ContactUs/ContactUs';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Infocards></Infocards>
            <Services></Services>
            <Appointment></Appointment>
            <Tastimonialdata></Tastimonialdata>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;