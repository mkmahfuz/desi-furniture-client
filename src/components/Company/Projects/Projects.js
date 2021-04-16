import React from 'react';
import { CardColumns, Col, Container, Row } from 'react-bootstrap';
import Project from '../Project/Project';
import './Projects.css';
import img1 from '../../../images/Projects/project-1.jpg';
import img2 from '../../../images/Projects/project-2.jpg';
import img3 from '../../../images/Projects/project-3.jpg';

const Projects = () => {
    const projects = [
        {
            _id: 1,
            title: 'Project 1',
            subtitle: 'Customizing Furnitures',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img1,
        },
        {
            _id: 2,
            title: 'Project 2',
            subtitle: 'House Interior renovation',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img2,
        },
        {
            _id: 3,
            title: 'Project 3',
            subtitle: 'Modern Work Station',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img3,
        },

    ];
    return (
        <>
            <Container className='project-container'>
                <Row>
                    <Col className='project-heading'>
                    <h6>OUR PROJECTS</h6>
                    <h2>Our latest work. Ongoing and Done.</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <CardColumns>
                            {
                                projects.map((project) => <Project key={project._id} project={project}></Project>)
                            }
                        </CardColumns>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Projects;