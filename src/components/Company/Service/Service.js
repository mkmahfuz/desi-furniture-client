import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CheckoutContext } from '../../../App';
import './Service.css';
import { useSpring, animated } from 'react-spring';

const Service = (props) => {
    const [flipped, setFlipped] = useState(false);
    const springprops = useSpring({ transform: `rotateY(${flipped ? 180 : 0}deg)` }); // spring react animation properties

    const service = props.service;
    const { _id, name, price, description, imgurl } = service;
    const history = useHistory();
    const [checkoutService, setCheckoutService] = useContext(CheckoutContext);

    const handleClick = (id) => {
        setCheckoutService(id);
        console.log(checkoutService);
        const url = '/checkout';
        history.push(url);
    }

    return (
        <div onMouseEnter={() => setFlipped(state => !state)}>


            <Card className='srv-Single'>
                <animated.div style={springprops}>
                    <Card.Img variant='top' src={imgurl} />
                </animated.div>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>

                    <Card.Subtitle>Starting from : ${price}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary" size="sm" onClick={() => handleClick(_id)}>Book Now</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;