import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Order.css';

const Order = (props) => {
    const { _id, name, status, price, description,date, imgurl } = props.order;


    return (
        <Card className='srv-Single'>
            
                <Card.Img variant='top' src={imgurl} className='order-img' />
            
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>Paid Amount : ${price}</Card.Subtitle>
                <Card.Text><p>{(new Date(date).toDateString('dd/MM/yyyy'))}</p>{description}</Card.Text>
                <Button size={'sm'} variant={(status==='pending' && 'danger') || (status === 'ongoing'? 'warning':'primary')} block>{status}</Button>
            </Card.Body>
        </Card>



        // <div className='order-container'>
        //     <div className='order-image'>
        //         <img src={imgurl} alt="customer" />
        //     </div>
        //     <div className='order-price'>
        //         <h5>${price}</h5>
        //     </div>
        //     <div className='order-status'>

        //         <Button size={'sm'} variant={(status==='pending' && 'danger') || (status === 'Ongoing'? 'warning':'primary')} block>{status}</Button>                


        //     </div>
        //     <div className='order-title'>
        //         <h6>{name}</h6>
        //     </div>

        //     <div className='order-description'>
        //         <p>{description}</p>
        //     </div>


        // </div>
    );
};

export default Order;