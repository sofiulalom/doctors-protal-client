import React from 'react';

const Tastimonial = ({testi}) => {
    const {details,img, imgname, imginfo}=testi;
    return (
        <div className="card w-96  text-black">
        <div className="card-body items-center text-justify">
            <p className='text-xl'>{details}</p>
            <div className="card-actions justify-end">
             <img src={img} className="mr-4 mt-4" alt="" />
             <div className='mt-4'>
                 <h4 className='text-2xl  '>{imgname}</h4>
                 <h5 className='text-xl'>{imginfo}</h5>
             </div>
            </div>
        </div>
        </div>
    );
};

export default Tastimonial;