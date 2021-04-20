import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import { UserContext } from '../../../App';

import './OrderList.css';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [info, setInfo] = useState(false);
    
   

    useEffect(() => {
        const url = 'https://immense-garden-35214.herokuapp.com/allorders';
        
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOrders(data);
                setInfo(false);
            });
    }, [info]);

    const updateOrder = (event, id) => {
        const status = event.target.name;
        const order = {status}
        //console.log(id);
        const url = `https://immense-garden-35214.herokuapp.com/updateOrder/${id}`;
        
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInfo(data);

            });

    };
    // const updateTest = (event, id) => {
    //     console.log("status: ", event.target.name);
    //     console.log("orderId: ", id);
    // }


    return (
        <div>
            <h5 id="order-head">All Order's history :</h5>
            <Table striped bordered hover className='td-text-small'>
                <thead>
                    <tr>
                        <th>OrderID</th>
                        <th>Order Date</th>
                        <th>Srv.Name</th>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>PayID</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody className='td-text-small'>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{(new Date(order.date).toDateString('dd/MM/yyyy'))}</td>
                            <td>{order.name}</td>
                            <td>{order.user}</td>
                            <td>{order.email}</td>
                            <td>{order.price}</td>
                            <td>{order.payId}</td>
                            <td>{order.status}</td>
                            <DropdownButton size="sm" id="dropdown-basic-button" title="Update" >
                                <Dropdown.Item name="pending" onClick={(event) => updateOrder(event, order._id)}>Pending</Dropdown.Item>
                                <Dropdown.Item name="ongoing" onClick={(event) => updateOrder(event, order._id)}>Ongoing</Dropdown.Item>
                                <Dropdown.Item name="done" onClick={(event) => updateOrder(event, order._id)}>Done</Dropdown.Item>
                            </DropdownButton>

                        </tr>)
                    }
                </tbody>
            </Table>
            <div style={{ marginTop: '2rem' }}>

                {
                    <p>{info && 'Order status updated successfully'}</p>
                }
            </div>


        </div>
    );
};

export default OrderList;