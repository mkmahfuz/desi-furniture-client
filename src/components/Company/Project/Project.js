import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Project.css';
//import img from '../../../images/Projects/project-1.jpg';
import { useSpring, animated } from 'react-spring';

const Project = (props) => {
    const [flipped, setFlipped] = useState(false);
    const springprops = useSpring({ transform: `rotateY(${flipped ? 180 : 0}deg)` }); // spring react animation properties

    const { _id, title, subtitle, description, imgurl } = props.project;
    const handleClick = (id) => {
        console.log(id);
    }

    return (
        <div onMouseEnter={() => setFlipped(state => !state)}>

            <Card className='trSingle1'>
                <animated.div style={springprops}>
                    <Card.Img variant='top' src={imgurl} />
                </animated.div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{subtitle}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary" size="sm" onClick={() => handleClick(_id)}>Show Details</Button>
                </Card.Body>
            </Card>
        </div>


    );
};

export default Project;