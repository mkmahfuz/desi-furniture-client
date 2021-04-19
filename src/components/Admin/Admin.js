import React, { useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Admin.css';
import { faList, faPlus, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import OrderList from './OrderList/OrderList';
import AddService from './AddService/AddService';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageServices from './ManageServices/ManageServices';

const Admin = () => {

    const [displayData, setDisplayData] = useState('order');

    const showData = (evnt) => {
        //setDisplayData(false);
        console.log(evnt.target.id);
        const evntId = evnt.target.id || 'order';
        setDisplayData(evntId);
       
    }

    return (
        <Container>
            <Row style={{ marginTop: '1rem' }}>
                <Col sm={3} id="col-left">
                    <div id="admin-left">

                        <h5 id="order" className='border-around' onClick={(evnt) => showData(evnt)}><FontAwesomeIcon icon={faList} style={{ marginRight: '.5rem' }}></FontAwesomeIcon>Order List</h5>
                        <h5 id="add" className='border-around' onClick={(evnt) => showData(evnt)}><FontAwesomeIcon icon={faPlus} style={{ marginRight: '.5rem' }}></FontAwesomeIcon>Add Service</h5>
                        <h5 id="make" className='border-around' onClick={(evnt) => showData(evnt)}><FontAwesomeIcon icon={faUserPlus} style={{ marginRight: '.5rem' }}></FontAwesomeIcon>Make Admin</h5>
                        <h5 id="manage" className='border-around' onClick={(evnt) => showData(evnt)}><FontAwesomeIcon icon={faThLarge} style={{ marginRight: '.5rem' }}></FontAwesomeIcon>Manage Services</h5>

                    </div>
                </Col>
                <Col sm={9}>
                    {console.log(displayData === 'add')}
                    <div id="order-list" >
                        {displayData === 'order' && <OrderList></OrderList>}
                    </div>
                    <div id="add-fruit" >
                        {displayData === 'add' && <AddService></AddService>}
                    </div>
                    <div id="make-admin" >
                        {displayData === 'make' && <MakeAdmin></MakeAdmin>}
                    </div>
                    <div id="manage-fruit" >
                        {displayData === 'manage' && <ManageServices></ManageServices>}
                    </div>
                </Col>
            </Row>
        </Container>


    );
};

export default Admin;