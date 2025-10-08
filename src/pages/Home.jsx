import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhySelectUs from "../components/WhySelectedUs";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <WhySelectUs></WhySelectUs>
        </div>
    );
};

export default Home;
