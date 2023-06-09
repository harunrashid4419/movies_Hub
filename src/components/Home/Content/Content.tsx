import React from 'react';
import './Content.css';
import contentImage from '../../../assets/landing-page-tv.jpg';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <div className='container'>
            <div className="content-section">
                <div className="left">
                    <img src={contentImage} alt="ContentImage" />
                </div>
                <div className="right">
                    <h1><span>·</span> Enjoy Your Content</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <Link to='/movies'>View Videos</Link>
                </div>
            </div>
        </div>
    );
};

export default Content;