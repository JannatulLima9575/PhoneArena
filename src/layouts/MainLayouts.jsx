import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const MainLayouts = () => {
    return <>
    <Navbar></Navbar>
    <div className='min-h-[calc(100vh-116px)]'>
    <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </>;
};

export default MainLayouts;