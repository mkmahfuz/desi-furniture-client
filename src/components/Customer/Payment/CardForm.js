import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useContext,useEffect} from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { CheckoutContext,UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';

const CardForm = () => {
    const [checkoutService,setCheckoutService] = useContext(CheckoutContext);
    const [loggedInUser] = useContext(UserContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState(null);
    const [cardSuccess, setCardSuccess] = useState(null);

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setCardError(error.message);
            setCardSuccess(null);
            console.log('[error]', error);
        } else {
            setCardSuccess(paymentMethod.id);
            setCardError(null);
            console.log('[PaymentMethod]', paymentMethod);
            saveOrder(paymentMethod.id); // if pay success then save the order with pay id
            setCheckoutService(null); // to prevent to resubmit

        }
    };
// jkkjkkjk
//from service checkout and saveorder

    let history = useHistory();

    const [services, setServices] = useState([]);
    const { _id, name,price} = { ...services };

    useEffect(() => {
        const id = checkoutService;
        const url = `https://immense-garden-35214.herokuapp.com/service/${id}`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            });
    }, [checkoutService]);


    const saveOrder = (id) => {
        const {name,price,description,imgurl}= services;
        const orderData = {name,price,description,imgurl};
        const orderDate = new Date();
        orderData.email = loggedInUser.email;
        orderData.user = loggedInUser.name;
        orderData.date = orderDate;
        orderData.payId = id;
        orderData.status = 'pending';
        console.log(orderData);

        //post orderData to server to save to mongodb
        const url = 'https://immense-garden-35214.herokuapp.com/addOrder';
        
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data && history.push('/orders')
                //if data positive then push to order page
                //history.push('/orders');

            });
    };


// llllllllkjkkj

    return (

        <div>
            <Form onSubmit={handleSubmit}>

                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder={loggedInUser.name} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder={loggedInUser.email} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridService">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control type="text" readOnly placeholder={name} />
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicCheckbox">
                    <Form.Label>Pay With</Form.Label>
                    <Form.Check type="checkbox" defaultChecked label="Credit Card" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">

                    <CardElement
                        options={{style: {base: {fontSize: '16px',color: '#424770','::placeholder': {color: '#aab7c4',},},invalid: {color: '#9e2146',},},}}
                    />

                </Form.Group >
                <Form.Group as={Col} controlId="formBasicPrice">
                    <Form.Label style={{paddingRight:'2rem'}}>The cost of this service is ${price} </Form.Label>
                    <Button variant="primary" type="submit" disabled={!stripe}>Pay Now</Button>                   
                </Form.Group>

               
            </Form>


            {
                // if card error
                cardError && <p>Payment error: {cardError}</p>

            }
            {
                // if card success
                cardSuccess && <p>Payment was succesfull: {cardSuccess}</p>

            }

        </div>

    );
};

export default CardForm;