import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhySelectUs from "../components/WhySelectedUs";
import AboutIntro from "../components/AboutIntro";

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <WhySelectUs></WhySelectUs>
            <AboutIntro></AboutIntro>
        </div>
    );
};

export default Home;
