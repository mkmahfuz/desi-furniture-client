import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';

import CustomerHome from '../CustomerHome/CustomerHome';

const AddReview = () => {
    const [loggedInUser] = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('form submitted');
    };

    return (
        <div>
            <CustomerHome></CustomerHome>

            <Container className='checkout-container'>

                <Row>
                    <Col className='checkout-header'>
                        <h2>Add Review</h2>
                    </Col>
                </Row>

                <Row>
                    <Col className='checkout-action'>
                        <div className="payment-body">
                            <div className="payment-right">
                                <Form onSubmit={handleSubmit}>

                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder={loggedInUser.name} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDesignation">
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Control type="text" placeholder="Designation" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridComapny">
                                        <Form.Label>Company name</Form.Label>
                                        <Form.Control type="text" placeholder="Company Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridReview">
                                        <Form.Label>Review</Form.Label>
                                        <Form.Control type="text" placeholder="Details Review for the service of our comapny" />
                                    </Form.Group>


                                    <Form.Group as={Col} controlId="formBasicSubmit">
                                        <Form.Label ></Form.Label>
                                        <Button variant="primary" type="submit">Submit</Button>
                                    </Form.Group>



                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    );
};

export default AddReview;