import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
     const servicedata=[
         {
            _id: 1,
            name:"Fluoride Treatment",
             details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
             img: fluoride
         },
         {
            _id: 2,
            name:"Cavity Filling",
             details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
             img: cavity
         },
         {
            _id: 3,
            name:"Teeth Whitening",
             details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
             img: whitening
         },
     ]
    return (
        <div className='mt-28 t'>
            <h5 className='text-primary text-xl text-center font-bold'>OUR SERVICES</h5>
            <h2 className='text-4xl text-center font-bold '>Services We Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-40'>
            {
                servicedata.map(service => <Service
                key={service._id}
                service={service}
                >
                </Service>)
            }
            </div>
            <div className="hero ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} alt='' className="w-1/2  rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;