import React from 'react';
import { Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'


const Testimonial = (props) => {
    const { _id, title, subtitle, description, imgurl } = props.review;
   
    return (
        <Card className='trSingle'>
        <Card.Img variant='top' src={imgurl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{subtitle}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'orange' }} />
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'orange' }} />
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'orange' }} />
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'gray' }} />
        </Card.Body>
    </Card>
    );
};

export default Testimonial;