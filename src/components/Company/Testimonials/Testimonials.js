import React, { useEffect,useState } from 'react';
import Testimonial2 from '../Testimonial/Testimonial2';
import { CardColumns, Col, Container, Row,Spinner } from 'react-bootstrap';
import './Testimonials.css';
import img1 from '../../../images/Projects/project-1.jpg';
import img2 from '../../../images/Projects/project-2.jpg';
import img3 from '../../../images/Projects/project-3.jpg';

const Testimonials = () => {
    const reviewsFake = [
        {
            _id: 1,
            title: 'Mike Vohn',
            subtitle: 'CEO, Vohn Tech',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img1,
        },
        {
            _id: 2,
            title: 'Elora Chao',
            subtitle: 'MD, Chao Electronics',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img2,
        },
        {
            _id: 3,
            title: 'Susmit Pat',
            subtitle: 'PDM, Dubai Properties',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img3,
        },

    ];

    const [reviews, setReviews] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const url = 'https://immense-garden-35214.herokuapp.com/allReviews';
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setReviews(data);
                setLoading(false);
            });
    }, []);

    return (
        <>
            <Container className='testimonial-container'>
                <Row>
                    <Col className='testimonial-heading'>
                    <h6>CLIENTS SAY</h6>
                    <h4>We are delighted to make you happy</h4>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                    {loading && <div id='spin-loading'><Spinner animation="border" variant="primary" size="lg"/><p>Loading....</p></div>}
                        <div className='card-flex'>
                            {
                                reviews.map((review) => <Testimonial2 key={review._id} review={review}></Testimonial2>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Testimonials;