import React from 'react';
import person1 from '../../../assets/images/people1.png'
import person2 from '../../../assets/images/people2.png'
import person3 from '../../../assets/images/people3.png'
import Tastimonial from './Tastimonial';
const Tastimonialdata = () => {
    const testimonialdata=[
        {
            id:1,
            details:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person1,
            imgname: 'Winson Herry',
            imginfo: 'California'
        },
        {
            id:2,
            details:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person2,
            imgname: 'Winson Herry',
            imginfo: 'California'
        },
        {
            id:3,
            details:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: person3,
            imgname: 'Winson Herry',
            imginfo: 'California'
        },
    ]
    return (
        <div className='mt-20'>
            <h5 className='text-2xl font-bold text-secondary'>Testimonial</h5>
            <h3 className='text-4xl font-bold'>What Our Patients Says</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-64'>
              {
                testimonialdata.map(testi => <Tastimonial
                key={testi.id}
                testi={testi}
                ></Tastimonial>)
              }
            </div>
        </div>
    );
};

export default Tastimonialdata;