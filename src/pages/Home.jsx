import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WhySelectUs from "../components/WhySelectedUs";
import AboutIntro from "../components/AboutIntro";
import CaseStudiesSection from "../components/CaseStudiesSection";
import OurAttorneys from "../components/OurAttorneys";
import Footer from "../components/Footer";
import AppointmentForm from "../components/AppointmentForm";

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <HeroSection />
            <WhySelectUs></WhySelectUs>
            <AboutIntro></AboutIntro>
            <CaseStudiesSection></CaseStudiesSection>
            <OurAttorneys></OurAttorneys>
            <AppointmentForm></AppointmentForm>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;
