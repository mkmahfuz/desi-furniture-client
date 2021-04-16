import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Testimonial.css';

const Testimonial2 = (props) => {
    const { _id, title, subtitle, description, imgurl } = props.review;
    return (
        <div className='review-container'>
            <div className='review-image'>
            <img src={imgurl} alt="customer"/>
            </div>
            <div className='review-title'>
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
            </div>
            <div className='review-description'>
                <p>{description}</p>
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