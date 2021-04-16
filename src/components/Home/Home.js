import React from 'react';
import Contact from '../Company/Contact/Contact';
import Intro from '../Company/Intro/Intro';
import Masters from '../Company/Masters/Masters';
import Projects from '../Company/Projects/Projects';
import Services from '../Company/Services/Services';
import Testimonials from '../Company/Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='home-container'>            
            <Intro></Intro>
            <Projects></Projects>
            <Services></Services>
            <Testimonials></Testimonials>
            <Masters></Masters>
            <Contact></Contact>
        </div>
    );
};

export default Home;