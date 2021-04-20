import React from 'react';
import { Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Testimonial = (props) => {
    const { _id, name,designation,company,review,cusimgurl } = props.review;
   
    return (
        <Card className='srv-Single'>
        <Card.Img variant='top' src={cusimgurl} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{designation}</Card.Subtitle>
            <Card.Text><p>{company}</p>{review}</Card.Text>
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'orange' }} />
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'orange' }} />
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'orange' }} />
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'gray' }} />
        </Card.Body>
    </Card>
    );
};

export default Testimonial;