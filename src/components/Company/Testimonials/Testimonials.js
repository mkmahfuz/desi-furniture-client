import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import { CardColumns, Col, Container, Row } from 'react-bootstrap';
import './Testimonials.css';
import img1 from '../../../images/Projects/project-1.jpg';
import img2 from '../../../images/Projects/project-2.jpg';
import img3 from '../../../images/Projects/project-3.jpg';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            title: 'Review 1',
            subtitle: 'Customizing Furnitures',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img1,
        },
        {
            _id: 2,
            title: 'Review 2',
            subtitle: 'House Interior renovation',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img2,
        },
        {
            _id: 3,
            title: 'Review 3',
            subtitle: 'Modern Work Station',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img3,
        },

    ];
    return (
        <>
            <Container className='testimonial-container'>
                <Row>
                    <Col className='testimonial-heading'>
                    <h6>CLIENTS SAY</h6>
                    <h4>We are delighted to make you happy</h4>
                    <p>We always welcome clients critics. We listen and try to improve our services. We are always beside you.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardColumns>
                            {
                                reviews.map((review) => <Testimonial key={review._id} review={review}></Testimonial>)
                            }
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Testimonials;