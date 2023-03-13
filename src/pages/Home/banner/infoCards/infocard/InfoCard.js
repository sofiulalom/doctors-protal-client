
import React from 'react';

const InfoCard = ({card}) => {
    const {name,description,icons,bgClass}=card;
    return (
        <div className={`card lg:card-side md:card-side text-white shadow-xl p-6  ${bgClass}`}>
        <figure><img src={icons} alt="Movie"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            
            </div>
        </div>
        </div>
    );
};

export default InfoCard;