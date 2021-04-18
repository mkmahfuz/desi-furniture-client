import React from 'react';
import { Button } from 'react-bootstrap';
import './Order.css';

const Order = (props) => {
    const { _id, title, subtitle, status, price, description, imgurl } = props.order;
     
 
    return (
        <div className='order-container'>
            <div className='order-image'>
                <img src={imgurl} alt="customer" />
            </div>
            <div className='order-price'>
                <h5>${price}</h5>
            </div>
            <div className='order-status'>
                
                <Button size={'sm'} variant={(status==='Pending' && 'danger') || (status === 'Ongoing'? 'warning':'primary')} block>{status}</Button>                
              
                            
            </div>
            <div className='order-title'>
                <h6>{subtitle}</h6>
            </div>

            <div className='order-description'>
                <p>{description}</p>
            </div>


        </div>
    );
};

export default Order;