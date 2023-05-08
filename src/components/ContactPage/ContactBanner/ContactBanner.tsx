import React from 'react';
import './ContactBanner.css';
import banner from '../../../assets/banner.png';

const ContactBanner = () => {
    return (
        <div className='banner'>
            <h1>Contact US</h1>
            <img src={banner} alt="banner-img" />
        </div>
    );
};

export default ContactBanner;