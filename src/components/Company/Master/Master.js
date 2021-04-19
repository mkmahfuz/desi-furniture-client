import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Master.css';

const Master = (props) => {
    const { _id, title, subtitle, description, imgurl } = props.master;

    const [flipped, setFlipped] = useState(false);
    const springprops = useSpring({ opacity: flipped ? .3: 1}); // spring react animation properties


    return (
        <div className="master-banner" onMouseOver={() => setFlipped(state => !state)}>
            <div className='master-banner-text'>
                <h5>{title}</h5>
                <h2>{subtitle}</h2>
                <p>{description}</p>
                
            </div>
            <animated.div style={springprops} className="master-banner-img">
                <img src={imgurl} alt='master-banner img'></img>
            </animated.div>
        </div>
    );
};

export default Master;