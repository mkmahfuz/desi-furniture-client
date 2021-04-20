import React, { useContext} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CheckoutContext} from '../../../App';

import CustomerHome from '../CustomerHome/CustomerHome';
import Payment from '../Payment/Payment';
import './Checkout.css';

const Checkout = () => {
    const [checkoutService] = useContext(CheckoutContext);
   
    const id = checkoutService;
    

    return (
        <div>
            <CustomerHome></CustomerHome>
            {console.log('id:',id)}      
            

            <Container className='checkout-container'>
                
                <Row>
                    <Col className='checkout-header'>
                        <h2>Book</h2>
                    </Col>
                </Row>

            
                <Row>
                <Col>
                {
                id === null ? <div style={{textAlign: 'center',marginBottom:'5rem'}}><h2 style={{color:'red'}}>No service selected</h2><h4>Please select a service first</h4></div>:<Payment></Payment>
                }
                </Col>
                </Row>

            </Container>

            

        </div>
    );
};

export default Checkout;