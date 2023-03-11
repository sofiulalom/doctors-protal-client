import React from 'react';
import appointment from '../../../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <form className='mt-28' style={{ backgroundImage: `url(${appointment})` }} >
            <div className='text-center mb-3 p-4'>
                <h4 className='text-2xl text-secondary font-bold'>Contact Us</h4>
                <h2 className='text-4xl font-bold text-white'>Stay connected with us</h2>
            </div>
            <div className='w-96 m-auto p-2'>
            <input type="text" placeholder="Email" className="input input-bordered w-96" />
            <br />
            <input type="text" placeholder="subject" className="input input-bordered w-96 mt-5 mb-5" />
            <br />
            
            <textarea className="textarea textarea-accent w-96 h-60" placeholder="text message"></textarea>
            <br />
            <div className='mt-3  '>
             <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary w-96 font-bold' type="submit" value="submit" />
            </div>

            </div>
        </form>
    );
};

export default ContactUs;