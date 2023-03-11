import React from 'react';
import clock from '../../../../assets/icons/clock.svg'
import phone from '../../../../assets/icons/phone.svg'
import marker from '../../../../assets/icons/marker.svg'
import InfoCard from './infocard/InfoCard';
const Infocards = () => {
    const cardsdata=[
        {
        id:1,
        name: 'opanig our',
        description: 'Open 9.00 am to 5.00 everyday',
        icons: clock,
        bgClass: 'bg-gradient-to-r from-primary to-secondarybg-gradient-to-r from-primary to-secondary'
    },
        {
        id:2,
        name: 'our Locations',
        description: 'Open 9.00 am to 5.00 everyday',
        icons: marker,
        bgClass: 'bg-accent'
    },  
        {
        id:3,
        name: 'contact Us',
        description: 'Open 9.00 am to 5.00 everyday',
        icons: phone,
        bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
]
    return (
        <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
               cardsdata.map(card => <InfoCard 
               key={card.id}
               card={card}
               ></InfoCard>) 
            }
        </div>
    );
};

export default Infocards;