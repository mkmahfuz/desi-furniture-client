import React from 'react';
import './Footer.css'
const Footer = () => {
    const crdate = new Date();
    const year = crdate.getFullYear();

    return (
        <div>
            <footer className='footer'>
                <p>All rights reserved &copy; Hero3 Desi Furniture Group -{year}</p>
            </footer>
        </div>
    );
};

export default Footer;