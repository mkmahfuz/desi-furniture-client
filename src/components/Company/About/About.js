import React from 'react';
import CompanyFooter from '../CompanyFooter/CompanyFooter';
import Masters from '../Masters/Masters';

const About = () => {
    return (
        <div style={{marginTop:'2rem'}}>
            <div style={{textAlign: 'center',padding:'0 1rem'}}>
                <h4>IN WOOD WE TRUST</h4>
                <p>We have more than 30 years of experiences.
                Our wood masters are happily waiting to fulfill your need. Wood or Metal.
                Custom or pre designed.</p>
                <p> Even you can buy, sell or rent furnitures.
                </p>
            </div>
            <Masters></Masters>
            <CompanyFooter></CompanyFooter>
        </div>
    );
};

export default About;