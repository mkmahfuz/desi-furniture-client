import React from 'react';
import './Payment.css';

//stripe related
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardCompo from './CardCompo';
import CardForm from './CardForm';
//stripe api-key
const stripePromise = loadStripe('pk_test_51IfkhWEoACLwhDo5BvynIMrdRRdGeSyzwONtUeWOujaAKAlHBrd0cTv5h7uvMPbCSlrOIvBi8mCppmkMGw9U4dPK00m69En8S5');

const Payment = () => {
    return (
        <div className="payment-body">
           
            <div className='payment-right'>
                <Elements stripe={stripePromise}> 
                    {/* <CardCompo></CardCompo> */}
                    <CardForm></CardForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;