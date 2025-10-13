import React from "react";
import HeroSectionContent from "./DynamicHeroContents/HeroSectionContent";
import { useLocation } from "react-router";
import AboutHeroSectionContent from "./DynamicHeroContents/OtherHeroSectionContent";

const HeroSection = () => {

    const location = useLocation();
    return (
        <section
            className="relative h-screen bg-cover bg-center flex items-center"
            style={{
                backgroundImage: "url('/hero-bg.jpg')",
                
                 // ✅ Image from public folder
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div>
                {
                    location.pathname === '/' ? <HeroSectionContent></HeroSectionContent> : <AboutHeroSectionContent></AboutHeroSectionContent>
                }
            </div>
            
        </section>
    );
};

export default HeroSection;
