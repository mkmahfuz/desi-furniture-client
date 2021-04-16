import React from 'react';
import Banner from '../Banner/Banner';
import './Intro.css';
import img from '../../../images/Banners/interior.jpg';


const Intro = () => {
    const banners = [
        {
            _id: 1,
            title: 'IN WOOD WE TRUST',
            subtitle: 'USED FURNITURES',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: img,
        },
        
    ];

    return (

        
        <div className="banner-container">
            
            {
                banners.map((banner)=><Banner key={banner._id} banner={banner}></Banner>)
            }
           
        </div>
    );
};

export default Intro;