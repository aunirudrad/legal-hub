import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import ChatWidget from '../components/ChatWidget';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ChatWidget></ChatWidget>
            <Footer></Footer>
        </div>
    );
};

export default Root;