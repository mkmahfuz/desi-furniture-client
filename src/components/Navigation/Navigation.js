import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navigation.css'
const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [adminUser, setAdminUser] = useState({});

    useEffect(() => {
        const url = 'http://localhost:5050/adminuser?email=' + loggedInUser.email;
        // const url = 'https://ancient-ocean-50478.herokuapp.com/orders?email=' + loggedInUser.email;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(admin => {
                console.log("admin",admin);
                setAdminUser(admin[0]);
            });
    }, [loggedInUser]);


    let history = useHistory();

    const signOut = () => {
        setLoggedInUser('');
        setAdminUser('');
        history.push('/home');
    };

    console.log("adminemail:", adminUser)
    console.log("usermail:", loggedInUser)

    return (
        <div className='navLink'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/services'>Services</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contact'>Contact</Link>
            {
               loggedInUser.email && <Link to='/dashboard'>Dashboard</Link>

            }
            {
               adminUser &&  <Link to='/admin'>Admin</Link>
            }

            <span style={{ marginRight: '1rem' }}>{loggedInUser.name || loggedInUser.email}</span>
            {
                !loggedInUser.email ?
                    <Link to='/login'><Button size='sm' variant='warning'>LogIn</Button></Link> :
                    <Button size='sm' variant='warning' onClick={signOut}>LogOut</Button>
            }

            {console.log('loggedfrom:header', loggedInUser.email)}
        </div>
    );
};

export default Navigation;