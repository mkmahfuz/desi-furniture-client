import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const { _id, title, subtitle,price, description, imgurl } = props.service;
    const handleClick = (id) => {
        console.log(id);
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