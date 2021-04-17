import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CheckoutContext } from '../../../App';
import './Service.css';

const Service = (props) => {
    const { _id, title, subtitle,price, description, imgurl } = props.service;
    const history = useHistory();
    const [checkoutService, setCheckoutService] = useContext(CheckoutContext);

    const handleClick = (id) => {
        setCheckoutService(id);
        console.log(checkoutService);
        const url = '/checkout';
        history.push(url);
    }

    return (
        <Card className='srv-Single'>
        <Card.Img variant='top' src={imgurl} />
        <Card.Body>
            <Card.Title>{subtitle}</Card.Title>
            
            <Card.Subtitle>Starting from : ${price}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" size="sm" onClick={() => handleClick(_id)}>Book Now</Button>
        </Card.Body>
    </Card>
    );
};

export default Service;