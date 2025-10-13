import React from 'react';
import { ReactTyped } from "react-typed"; // ✅ Correct import for Vite

const HeroSectionContent = () => {
    return (
        <div>
            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto lg:mx-[320px] px-6 text-white">
                <p className="text-lime-400 font-semibold mb-3 tracking-wide">
                    WELCOME TO LEGALHUB
                </p>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                    Attorneys Fighting For <br />
                    <span>Your </span>
                    <span className="text-lime-400">
                        <ReactTyped
                            strings={["Custody.", "Rights.", "Case.", "Freedom."]}
                            typeSpeed={80}
                            backSpeed={50}
                            backDelay={1500}
                            loop
                        />
                    </span>
                </h1>

                <p className="text-gray-300 max-w-lg mb-6">
                    We have helped thousands of people to get relief from nationwide
                    wrongful denials. Now they trust LegalCare attorneys.
                </p>

                <button className="bg-lime-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-lime-400 transition">
                    Get Legal Advice &gt;
                </button>
            </div>
        </div>
    );
};

export default HeroSectionContent;