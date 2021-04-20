import React from 'react';
import CompanyFooter from '../Company/CompanyFooter/CompanyFooter';

import Intro from '../Company/Intro/Intro';
import Masters from '../Company/Masters/Masters';
import Projects from '../Company/Projects/Projects';
import Services from '../Company/Services/Services';
import Testimonials from '../Company/Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='home-container'>            
            <Intro></Intro>
            <Services></Services>
            <Projects></Projects>            
            <Testimonials></Testimonials>
            <Masters></Masters>
            <CompanyFooter></CompanyFooter>
            
        </div>
    );
};

export default Home;