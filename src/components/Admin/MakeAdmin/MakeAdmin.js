import React, { useState,useEffect } from 'react';
import { Button, Col,  Form,Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const [info, setInfo] = useState(false);
    const [adminusers, setAdminUsers] = useState([]);

    // const handleSubmit1 = (event) => {
    //     event.preventDefault();

    //     console.log(event.target.email.value);
    // };


    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        const adminData = {
            email: data.email
                        
        };
       
        //post admin user data to server to save to mongodb
        
        const url = 'https://immense-garden-35214.herokuapp.com/addservice';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminData)
        })
            .then(res => res.json())
            .then(data => {

                
                // history.push('/home');                
                console.log("ddd:", data);
                setInfo(data);
            });

    };

    useEffect(() => {
        const url = 'https://immense-garden-35214.herokuapp.com/alladmins';
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setAdminUsers(data);
                setInfo(false);
            });
    }, [info]);

    return (
        <div>
            <h2>Make Admin </h2>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" name='email' placeholder="yourname@gmail.com" {...register('email')}/>
                    <Form.Text>Only gmail</Form.Text>
                </Form.Group>


                <Form.Group as={Col} controlId="formBasicSubmit">
                    <Form.Label ></Form.Label>
                    <Button variant="primary" type="submit">Make Admin</Button>
                </Form.Group>

            </Form>

            <div style={{ marginTop: '2rem' }}>

                {
                    <p>{info && 'Admin user added successfully'}</p>
                }
            </div>
            <h2>Admin User Lists </h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL.No</th>
                        <th>Admin User Email</th>
                        <th>Action</th>                        
                    </tr>
                </thead>
                <tbody className='td-text-small'>
                    {
                        adminusers.map(adminuser => <tr key={adminuser._id}>
                            <td></td>
                            <td>{adminuser.email}</td>
                            <td></td>
                            
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MakeAdmin;