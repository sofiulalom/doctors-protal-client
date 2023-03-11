import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
const Appointment = () => {
    return (
        <div className="hero mt-20 " style={{ backgroundImage: `url(${appointment})` }}>
        <div className="hero-content flex-col lg:flex-row -top-40">
          <img src={doctor} alt='' className="-mt-32 hidden lg:block lg:w-1/2 rounded-lg shadow-2xl" />
          <div>
            <h4 className='text-primary text-xl font-bold'>Aponintment</h4>
            <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Appointment;