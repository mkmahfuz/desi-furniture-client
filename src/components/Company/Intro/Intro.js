import React from 'react';
import Banner from '../Banner/Banner';

const Intro = () => {
    const banners = [
        {
            _id: 1,
            title: 'IN WOOD WE TRUST',
            subtitle: 'Used Furniture',
            description: 'We have huge collection of Vintage and Used Furniture, You can buy or simply rent.',
            imgurl: '../../../images/Banners/chair-1.jpg'
        },
        
    ];

    return (
        <div>
            <img src='../../../images/Banners/chair-1.jpg' alt="nn"></img>
            {
                banners.map((banner)=><Banner key={banner._id} banner={banner}></Banner>)
            }
           
        </div>
    );
};

export default Intro;