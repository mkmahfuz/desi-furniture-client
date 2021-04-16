import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Service = (props) => {
    const { _id, title, subtitle, description, imgurl } = props.service;
    const handleClick = (id) => {
        console.log(id);
    }

    return (
        <Card className='trSingle'>
        <Card.Img variant='top' src={imgurl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{subtitle}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" size="sm" onClick={() => handleClick(_id)}>Show Details</Button>
        </Card.Body>
    </Card>
    );
};

export default Service;