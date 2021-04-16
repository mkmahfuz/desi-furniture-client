import React from 'react';

import './Master.css';

const Master = (props) => {
    const { _id, title, subtitle, description, imgurl } = props.master;


    return (
        <div className="master-banner">
            <div className='master-banner-text'>
                <h5>{title}</h5>
                <h2>{subtitle}</h2>
                <p>{description}</p>
                
            </div>
            <div className="master-banner-img">
                <img src={imgurl} alt='master-banner img'></img>
            </div>
        </div>
    );
};

export default Master;