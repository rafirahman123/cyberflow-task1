import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container py-5'>
            <h1> Let's make it happen!</h1>
            <div class="row">
                <div class="col-md-6 my-3">
                    <input type="text" class="form-control input-field" placeholder="Full Name" aria-label="First name" />
                </div>
                <div class="col-md-6 my-3">
                    <input type="text" class="form-control input-field" placeholder="Phone Number" aria-label="Last name" />
                </div>
                <div class="col-md-6 my-3">
                    <input type="text" class="form-control input-field" placeholder="Subject" aria-label="Last name" />
                </div>
                <div class="col-md-6 my-3">
                    <input type="text" class="form-control input-field" placeholder="Email" aria-label="Last name" />
                </div>
                <div class="col-md-12 my-3">
                    <input type="text" class="form-control input-field-second" placeholder="Your message" aria-label="Last name" />
                </div>
                <button className='contact-button'>Let's Connect</button>
            </div>
        </div>
    );
};

export default Contact;