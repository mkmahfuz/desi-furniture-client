import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target.email.value);
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" name='email' defaultValue='yourname@gmail.com' />
                    <Form.Text>Only gmail</Form.Text>
                </Form.Group>


                <Form.Group as={Col} controlId="formBasicSubmit">
                    <Form.Label ></Form.Label>
                    <Button variant="primary" type="submit">Make Admin</Button>
                </Form.Group>

            </Form>
        </div>
    );
};

export default MakeAdmin;