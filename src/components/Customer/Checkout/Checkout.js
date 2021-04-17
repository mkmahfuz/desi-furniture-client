import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CheckoutContext } from '../../../App';
import CustomerHome from '../CustomerHome/CustomerHome';
import './Checkout.css';

const Checkout = () => {
    const [checkoutService] = useContext(CheckoutContext);

    return (
        <div>
            <CustomerHome></CustomerHome>

            <Container className='checkout-container'>
                
                <Row>
                    <Col className='checkout-header'>
                        <h2>Book</h2>
                    </Col>
                </Row>

                <Row>
                    <Col className='checkout-action'>
                        <div>
                            <h4>this is checkout</h4>
                            <p>service id : {checkoutService}</p>
                        </div>
                    </Col>
                </Row>

            </Container>



        </div>
    );
};

export default Checkout;