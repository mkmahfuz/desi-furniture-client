import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navigation.css'
const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () => {
        setLoggedInUser('');
    };

    return (
        <div className='navLink'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/services'>Services</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/admin'>Admin</Link>
            <span style={{ marginRight: '1rem' }}>{loggedInUser.name || loggedInUser.email}</span>
            {
                !loggedInUser.email ?
                    <Link to='/login'><Button variant='warning'>LogIn</Button></Link> :
                    <Button variant='warning' onClick={signOut}>LogOut</Button>
            }

            {console.log('loggedfrom:header', loggedInUser.email)}
        </div>
    );
};

export default Navigation;