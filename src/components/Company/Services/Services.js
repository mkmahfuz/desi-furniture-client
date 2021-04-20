import React, { useEffect,useState } from 'react';
import { CardColumns, Col, Container, Row ,Spinner} from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';
import img1 from '../../../images/Services/rent.jpg';
import img2 from '../../../images/Services/repair.jpg';
import img3 from '../../../images/Services/wood-design.jpg';

const Services = () => {
    const servicesFake = [
        {
            _id: 1,
            title: 'Rent',
            subtitle: 'Furniture Rental Service',
            price: 100,
            description: 'We have huge collection of Vintage and Used Furniture, You can simply rent.',
            imgurl: img1,
        },
        {
            _id: 2,
            title: 'Repair',
            subtitle: 'Onsite Repair Service',
            price: 150,
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img2,
        },
        {
            _id: 3,
            title: 'Design',
            subtitle: 'Custom Design',
            price: 200,
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img3,
        },

    ];

    const [services, setServices] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const url = 'https://immense-garden-35214.herokuapp.com/allServices';
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setServices(data);
                setLoading(false);
            });
    }, []);
    return (
        <div className="services-compo">
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
                    {loading && <div id='spin-loading'><Spinner animation="border" variant="primary" size="lg"/><p>Loading....</p></div>}
                        <CardColumns>
                            {
                                services.map((service) => <Service key={service._id} service={service}></Service>)
                            }
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;