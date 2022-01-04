import React from 'react';
import { Card } from 'react-bootstrap';

const Compliant = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <Card className='shadow p-3 mb-5 bg-body rounded ms-auto my-5' style={{ width: '18rem' }}>
                        <Card.Body>
                            <h2><i class="fas fa-bullseye"></i></h2>
                            <h4>Mission</h4>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className='col-md-6'>
                    <Card className='shadow p-3 mb-5 bg-body rounded mx-5 my-5' style={{ width: '18rem' }}>
                        <Card.Body>
                            <h2><i class="fas fa-eye"></i></h2>
                            <h4>Vision</h4>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <div className='justify-text'>
                <h4><u> Be Compliant </u></h4>

                <p className='text-start'>Short-term vacation rentals have mushroomed with many communities longing to go on vacations on work or leisure. To provide the best of services, many rental providers are struggling because of enforce regulations that have to be followed to preserve security, protection, checks, quality,</p>

                <p className='text-start'> At Savvy, we have been assessing the present changing situation and moulding our approach towards providing the best services and support to our clients and ensuring that our client are fully compliant for them to provide their customers with enjoyable, flexible and cost-effective</p>
                <p className='text-start'> <b> Know more...</b></p>
            </div>

        </div>
    );
};

export default Compliant;