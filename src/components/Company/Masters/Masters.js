import React from 'react';
import { CardColumns, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/Masters/wood-master.jpg';
import img2 from '../../../images/Masters/tools-master.jpg';
import img3 from '../../../images/Masters/metal-master.jpg';
import Master from '../Master/Master';
import './Masters.css';

const Masters = () => {
    const masters = [
        {
            _id: 1,
            title: 'WOOD MASTER',
            subtitle: 'Richard Dome',
            description: 'Professional wood master',
            imgurl: img1,
        },
        {
            _id: 2,
            title: 'TOOLS MASTER',
            subtitle: 'Austin Mendel',
            description: 'ECA certified tool Engineer',
            imgurl: img2,
        },
        {
            _id: 3,
            title: 'METAL MASTER',
            subtitle: 'Anthony Pearson',
            description: 'BSA grade metal craftsman',
            imgurl: img3,
        },

    ];
    return (
        <>
            <Container className='master-container'>
                <Row>
                    <Col className='master-heading'>
                        <h6>THEY CREATE</h6>
                        <h2>OUR MASTERS</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardColumns>
                            {
                                masters.map((master) => <Master key={master._id} master={master}></Master>)
                            }
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Masters;