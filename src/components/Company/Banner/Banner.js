import React from 'react';
import './Banner.css';
import {Button } from 'react-bootstrap';
// import img from '../../../images/Banners/interior.jpg';

const Banner = (props) => {
    const { _id, title, subtitle, description, imgurl } = props.banner;


    const handleBuy = (id) => {
        console.log(id);
    }
    const handleRent = (id) => {
        console.log(id);
    }

    return (
        <div className="top-banner">
            <div className='top-banner-text'>
                <p>{title}</p>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                <Button variant="primary" size="sm" onClick={() => handleBuy(_id)}>Buy Now</Button>
                <Button variant="secondary" size="sm" onClick={() => handleRent(_id)}>Rent Now</Button>
            </div>
            <div className="top-banner-img">
                <img src={imgurl} alt='top-banner img'></img>
            </div>
        </div>
    );
};

export default Banner;