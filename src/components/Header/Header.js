import React from 'react';
import logo from '../../images/Logo/furniture.png';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt='logo' /><span className='logo-title'>desiFurniture</span>
            <Navigation></Navigation>
        </header>
    );
};

export default Header;