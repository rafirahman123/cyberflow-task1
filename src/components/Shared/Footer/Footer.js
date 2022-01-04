import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer py-4'>
            <div className="row">
                <div className="col-md-3">
                    <i class="fab fa-instagram mx-2"></i>
                    <i class="fas fa-basketball-ball mx-2"></i>
                    <i class="fab fa-youtube mx-2"></i>
                    <i class="fab fa-twitter mx-2"></i>
                </div>

                <div className="col-md-6">
                    <div className='row'>
                        <div className='col-md-3'>
                            <p>Home</p>
                        </div>
                        <div className='col-md-3'>
                            <p>What we do</p>
                        </div>
                        <div className='col-md-3'>
                            <p>Request for Demo</p>
                        </div>
                        <div className='col-md-3'>
                            <p>Contact</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    © 2021|All Rights Reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;