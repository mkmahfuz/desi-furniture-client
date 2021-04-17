import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import CompanyFooter from '../CompanyFooter/CompanyFooter';
import './Contact.css';

const Contact = () => {

    return (
        <div className='contact-container'>
            <Container>
                <Row>
                    <Col className='contact-heading'>
                        <h2>Any Query?</h2>
                        <h4>Feel free to Contact us.</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='contact-form'>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control placeholder="full name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridAddress2">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control placeholder="last name" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control type="number" placeholder="+1234567" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Button variant="primary" type="submit">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <CompanyFooter></CompanyFooter>
        </div>
    );
};

export default Contact;