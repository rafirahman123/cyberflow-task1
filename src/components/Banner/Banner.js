import React from 'react';
import bannerimg from '../../image/bannerimg.png';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-6 bannerfirst'>
                    <h1 className='first-part-text text-start'>ADHERE TO STANDARDS</h1>
                    <h6 className='first-part-text-two text-start'>WE ensure you be compliant</h6>
                </div>
                <div className='col-md-6'>
                    <img className='banner-img' src={bannerimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;