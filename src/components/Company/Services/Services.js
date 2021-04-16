import React from 'react';
import { CardColumns, Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
import img1 from '../../../images/Services/rent.jpg';
import img2 from '../../../images/Services/repair.jpg';
import img3 from '../../../images/Services/wood-design.jpg';

const Services = () => {
    const services = [
        {
            _id: 1,
            title: 'Rent',
            subtitle: 'Furniture Rental Service',
            description: 'We have huge collection of Vintage and Used Furniture, You can simply rent.',
            imgurl: img1,
        },
        {
            _id: 2,
            title: 'Repair',
            subtitle: 'Onsight Repair Service',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img2,
        },
        {
            _id: 3,
            title: 'Design',
            subtitle: 'Custom Design',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img3,
        },

    ];
    return (
        <>
            <Container className='service-container'>
                <Row>
                    <Col className='service-heading'>
                    <h6>OUR SERVICES</h6>
                    <h2>WHAT WE OFFER</h2>
                    <p>We have more than 30 years of experiences. Our wood masters are happily waiting to fulfill your need. Wood or Metal. Custom or pre designed. Even you can buy, sell or rent furnitures.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardColumns>
                            {
                                services.map((service) => <Service key={service._id} service={service}></Service>)
                            }
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Services;