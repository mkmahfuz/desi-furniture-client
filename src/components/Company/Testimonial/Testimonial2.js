import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Testimonial2.css';

const Testimonial2 = (props) => {
    const { _id, name,designation,company,review,cusimgurl } = props.review;
    return (
        <div className='review-container'>
            <div className='review-image'>
            <img src={cusimgurl} alt="customer"/>
            </div>
            <div className='review-title'>
                <h5>{name}</h5>
                <h6>{designation}</h6>
                <p>{company}</p>
            </div>
            <div className='review-description'>
                <p>{review}</p>
            </div>
            <div className='review-rating'>
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'orange' }} />
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'orange' }} />
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'orange' }} />
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'orange' }} />
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '2rem',color:'gray' }} />
            </div>
            

        </div>
    );
};

export default Testimonial2;