import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import CustomerHome from '../CustomerHome/CustomerHome';

const Orders = () => {
    return (
        <div>
            <CustomerHome></CustomerHome>

<Container className='checkout-container'>

    <Row>
        <Col className='checkout-header'>
            <h2>All Bookings</h2>
        </Col>
    </Row>

    <Row>
        <Col className='checkout-action'>
            <div>
                <h4>this is your all bookings</h4>
                <p>service id : </p>
            </div>
        </Col>
    </Row>

</Container>
        </div>
    );
};

export default Orders;