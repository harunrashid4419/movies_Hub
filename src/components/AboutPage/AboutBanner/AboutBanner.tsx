import React from 'react';
import banner from '../../../assets/banner.png';

const AboutBanner = () => {
    return (
        <div className='banner'>
            <h1>About US</h1>
            <img src={banner} alt="banner-img" />
        </div>
    );
};

export default AboutBanner;