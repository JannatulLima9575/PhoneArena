import React from 'react';
import Hero from './../components/Hero/Hero';
import PhoneContainer from './../components/PhoneContainer/PhoneContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    // data
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            <Hero/>
            <PhoneContainer phones={data} />
        </div>
        
    );
};

export default Home;