import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'
import app from '../../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer className="footer p-10  mt-28"  style={{ backgroundImage: `url(${app})` }} >
        <div>
            <span className="footer-title">Services</span> 
            <Link to='/' className="link link-hover">Branding</Link>
            <Link className="link link-hover">Design</Link>
            <Link className="link link-hover">Marketing</Link>
            <Link className="link link-hover">Advertisement</Link>
        </div> 
        <div>
            <span className="footer-title">Company</span> 
            <Link className="link link-hover">About Us</Link>
            <Link className="link link-hover">Contact</Link>
            <Link className="link link-hover"> jobs</Link>
            <Link className="link link-hover">press kit</Link>
            
        </div> 
        <div>
            <span className="footer-title">Legal</span>
            <Link className="link link-hover">Terms of use</Link>
            <Link className="link link-hover">Privacy policy</Link>
            <Link className="link link-hover">Cookie policy</Link>
        </div>
        </footer>
    );
};

export default Footer;