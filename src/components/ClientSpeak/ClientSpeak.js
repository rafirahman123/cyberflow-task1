import React from 'react';

const ClientSpeak = () => {
    return (
        <div className='service-section py-5'>
            <h1 className='p-3 text-white pb-5'>Our Clients Speak</h1>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card mx-2" style={{ width: '41rem', height: '10rem' }}>
                        <div class="card-body">
                            <p class="card-text text-start">One of the best complaint support process management. Resolves all my complaint issues.</p>
                            <p className='text-start fw-bold'>-Director</p>
                            <p className='text-start'>for major IT comapny</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card mx-2" style={{ width: '41rem', height: '10rem' }}>
                        <div class="card-body">
                            <p class="card-text text-start">Tacking my properties for rent is easy and managing the client and payment is also fast.</p>
                            <p className='text-start fw-bold'>-CEO</p>
                            <p className='text-start'>of a Manufacturig unit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ClientSpeak;