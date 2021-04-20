import React, { useContext} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import CustomerHome from '../CustomerHome/CustomerHome';

const AddReview = () => {
    const [loggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);
    let history = useHistory();

    const { register, handleSubmit,errors } = useForm();
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            designation: data.designation,
            company: data.company,
            review: data.review,
            cusimgurl: loggedInUser.photo
        };
        //console.log(data);
        console.log(reviewData);
        //post servicedata to server to save to mongodb
        const url = 'http://localhost:5050/addreview';
        // const url = 'https://ancient-ocean-50478.herokuapp.com/addservice';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {

                
                history.push('/home');
                // <Redirect to = "/home"/>
                console.log("ddd:", data);
            });

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

                                <Form  onSubmit={handleSubmit(onSubmit)}>

                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="name" defaultValue={loggedInUser.name} {...register('name')} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridDesignation">
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Control type="text" name="designation" defaultValue="CEO" {...register('designation')}/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridComapny">
                                        <Form.Label>Company name</Form.Label>
                                        <Form.Control type="text" name="company" defaultValue="Company name" {...register('company')} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridReview">
                                        <Form.Label>Review</Form.Label>
                                        <Form.Control type="text" name="review" defaultValue="Details Review for the service of our comapny" {...register('review')}/>
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