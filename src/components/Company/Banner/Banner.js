import React, { useState } from 'react';
import './Banner.css';
import { Button, Modal } from 'react-bootstrap';
// import img from '../../../images/Banners/interior.jpg';

const Banner = (props) => {
    const { _id, title, subtitle, description, imgurl } = props.banner;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const handleBuy = (id) => {
    //     console.log(id);
    // }


    return (
        <div className="top-banner">
            <div className='top-banner-text'>
                <p>{title}</p>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                {/* <Button variant="primary" size="sm" onClick={() => handleBuy(_id)}>Buy Now</Button> */}
                <Button variant="primary" size="sm" onClick={handleShow}>Buy Now</Button>
            </div>
            <div className="top-banner-img">
                <img src={imgurl} alt='top-banner img'></img>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Buy Used Furniture</Modal.Title>
                </Modal.Header>
                <Modal.Body>Buy Used furnitures not implemented... this is just a demo modal</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}> Close</Button>                    
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Banner;