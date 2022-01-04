import React from 'react';
import { Card } from 'react-bootstrap';

const Savvy = () => {
    return (
        <div className='savvy-section'>
            <h1 className='p-3'>Why Savvy</h1>
            <div class="row row-cols-1 row-cols-md-3 ">
                <div class="col">
                    <Card className='shadow p-3 mb-5 bg-body rounded mx-2  my-3' style={{ width: '27rem', height: '20rem' }}>
                        <Card.Body>
                            <h2><i class="far fa-clock"></i></h2>
                            <h4>24x7 Support</h4>
                            <Card.Text className='service-text'>
                                We work in a sophisticated environment with a self-managed and highly-skilled team trackng, monitoring all your compliant issues and resolving them.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col">
                    <Card className='shadow p-3 mb-5 bg-body rounded mx-2  my-3' style={{ width: '27rem', height: '20rem' }}>
                        <Card.Body>
                            <h2><i class="fas fa-handshake"></i></h2>
                            <h4>Truly Collaborative</h4>
                            <Card.Text className='service-text'>
                                We work encapsulated in a Matrix Organizational Structure, which enables Transparent Processes, compliant management, 24x7 support, easy complaints, Bridging Geographies and reaching clients
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col">
                    <Card className='shadow p-3 mb-5 bg-body rounded mx-2  my-3' style={{ width: '27rem', height: '20rem' }}>
                        <Card.Body>
                            <h2><i class="fas fa-user"></i></h2>
                            <h4>Customer Centric</h4>
                            <Card.Text className='service-text'>
                                Provide sophisticated features specifically for customers - dashboard, tracking & monitoring their properties, compliant and also raise issues/ concerns/complaints and get them resolved.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col">
                    <Card className='shadow p-3 mb-5 bg-body rounded mx-2  my-3' style={{ width: '27rem', height: '20rem' }}>
                        <Card.Body>
                            <h2><i class="fas fa-portrait"></i></h2>
                            <h4>Self-Packed Portal</h4>
                            <Card.Text className='service-text'>
                                A portal, that is self-driven and will provide all the information as needed. Property, Geolocation, Rentals, Time duration, rates, client management, compliant and other details.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col">
                    <Card className='shadow p-3 mb-5 bg-body rounded mx-2 my-3' style={{ width: '27rem', height: '20rem' }}>
                        <Card.Body>
                            <h2><i class="fas fa-user-friends"></i></h2>
                            <h4>User-Friendly</h4>
                            <Card.Text className='service-text'>
                                Easily navigationally and highly interactive, allows you to enter and access data/information. This will allow to accessible with fully-automated backend processes and data management.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col">
                    <Card className='shadow p-3 mb-5 bg-body rounded mx-2 my-3' style={{ width: '27rem', height: '20rem' }}>
                        <Card.Body>
                            <h2><i class="fas fa-user-lock"></i></h2>
                            <h4>Privacy</h4>
                            <Card.Text className='service-text'>
                                All the personal and professional data will be kept secured and protected and will be available only through authenticated login for multiple user logins.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Savvy;