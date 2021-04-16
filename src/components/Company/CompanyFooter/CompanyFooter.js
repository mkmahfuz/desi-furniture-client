import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle,faFacebook,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';

import './CompanyFooter.css';

const CompanyFooter = () => {
    return (
        <div className="footer-container">

            <div className="footer-slogan"><h2>STAY IN TOUCH</h2></div>
            <div className="footer-links">
                <ul>
                    <li> <Link to='/home'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT US</Link></li>
                    <li><Link to='/services'>SERVICES</Link></li>
                    <li> <Link to='/projects'>PROJECTS</Link></li>
                    <li><Link to='/contact'>CONTACT</Link></li>
                    <li><Link to='/admin'>ADMIN</Link></li>
                </ul>
            </div>
            <div className="footer-address">
                <p>Desi Furnitures</p>
                <p>123 East Sher #11</p>
                <p>Moon City, DHK BD</p>
                <p>Open Hours M-F 10AM-5PM</p>
            </div>
            <div className="footer-social">
                <p></p>
            <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '1rem',color:'blue' }} />
            <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '1rem',color:'blue' }} />
            <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '1rem',color:'orange' }} />
            <FontAwesomeIcon icon={faYoutube} style={{ marginRight: '1rem',color:'red' }} />
            </div>

        </div>
    );
};

export default CompanyFooter;