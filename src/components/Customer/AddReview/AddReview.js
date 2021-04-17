import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CustomerHome from '../CustomerHome/CustomerHome';

const AddReview = () => {
    return (
        <div>
            <CustomerHome></CustomerHome>

            <Container className='checkout-container'>

                <Row>
                    <Col className='checkout-header'>
                        <h2>Add Review</h2>
                    </Col>
                </Row>

                <Row>
                    <Col className='checkout-action'>
                        <div>
                            <h4>this is add review</h4>
                            <p>service id : </p>
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default AddReview;