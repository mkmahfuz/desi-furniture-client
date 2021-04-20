import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [info, setInfo] = useState(false);


    useEffect(() => {
        const url = 'http://localhost:5050/allServices';
        // const url = 'https://ancient-ocean-50478.herokuapp.com/allFruits';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                setServices(data);
                setInfo(false);
            });
    }, [info]);



    const deleteService = (id) => {
        //console.log(id);
        const url = `http://localhost:5050/deleteService/${id}`;
        // const url = `https://ancient-ocean-50478.herokuapp.com/deleteFruit/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInfo(data);

            });

    };


    return (
        <div>
            <h2>Manage Services </h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(service => <tr key={service._id}>
                            <td>{service.name}</td>
                            <td>{service.description}</td>
                            <td>{service.price}</td>
                            <td><button onClick={() => deleteService(service._id)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </Table>


            <div style={{ marginTop: '2rem' }}>

                {
                    <p>{info && 'Service Deleted successfully'}</p>
                }
            </div>
        </div>
    );
};

export default ManageServices;