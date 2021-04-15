import React from 'react';
import './Banner.css';
import { Card, Button } from 'react-bootstrap';

const Banner = (props) => {
    const {_id,title,subtitle,description,imgurl} = props.banner;

    const handleClick = (id) => {
        console.log(id);
    }

    return (
        <Card className='trSingle'>
            <Card.Img variant='top' src='../../../images/Banners/chair-1.jpg' />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>

                <Card.Footer className="text-primary" id='card-footer'>
                    <Button variant="primary" size="sm" onClick={() => handleClick(_id)}>Buy Now</Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    );
};

export default Banner;