import React from 'react';
import { CardColumns, Col, Container, Row } from 'react-bootstrap';

import CustomerHome from '../CustomerHome/CustomerHome';
import img1 from '../../../images/Services/rent.jpg';
import img2 from '../../../images/Services/repair.jpg';
import img3 from '../../../images/Services/wood-design.jpg';
import Order from '../Order/Order';
import './Orders.css';


const Orders = () => {
    const orders = [
        {
            _id: 1,
            title: 'Rent',
            subtitle: 'Furniture Rental Service',
            status:'Pending',
            price: 100,
            description: 'We have huge collection of Vintage and Used Furniture, You can simply rent.',
            imgurl: img1,
        },
        {
            _id: 2,
            title: 'Repair',
            subtitle: 'Onsite Repair Service',
            status:'Ongoing',
            price: 150,
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img2,
        },
        {
            _id: 3,
            title: 'Design',
            subtitle: 'Custom Design',
            status:'Done',
            price: 200,
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img3,
        },

    ];
    return (
        <div>
            <CustomerHome></CustomerHome>

            <Container className='checkout-container orders-container'>

                <Row>
                    <Col className='checkout-header'>
                        <h2>Your Bookings</h2>
                    </Col>
                </Row>

                <Row>
                    <Col >
                    <CardColumns>
                            {
                                orders.map((order) => <Order key={order._id} order={order}></Order>)
                            }
                        </CardColumns>
                        
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Orders;