import React from 'react';
import Contact from '../Company/Contact/Contact';
import Intro from '../Company/Intro/Intro';
import Projects from '../Company/Projects/Projects';
import Services from '../Company/Services/Services';
import Testimonials from '../Company/Testimonials/Testimonials';
import chair from '../../images/Banners/chair-1.jpg';

const Home = () => {
    return (
        <div>
            <div>
            <img src={chair} alt="nn"></img>
            </div>
            <h2>This is home</h2>
            <Intro></Intro>
            <Projects></Projects>
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>

        </div>
    );
};

export default Home;