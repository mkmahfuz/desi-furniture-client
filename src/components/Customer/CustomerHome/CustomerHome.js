import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomerHome.css';

const CustomerHome = () => {
    return (
        <Container fluid className='customer-home-container'>
            <Row>
                <Col className='customer-nav'>                
                <ul>
                    <li><Link to='/checkout'>Book</Link></li>
                    <li><Link to='/orders'>Booking List</Link></li>
                    <li><Link to='/addreview'>Review</Link></li>
                </ul>            
                </Col>
            </Row>
          
        </Container>
       
    );
};

export default CustomerHome;