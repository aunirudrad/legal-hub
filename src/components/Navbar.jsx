import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold">
                    
                    <span className="text-white">LEGAL</span>
                    <span className="text-lime-400">HUB</span>
                    <p className="text-xs tracking-widest">A LAW FIRM AGENCY</p>
                </div>

                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    <li><a href="#" className="text-lime-400">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Attorneys</a></li>
                    <li><a href="#">Practice Areas</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <button className="bg-lime-500 text-black font-semibold px-4 py-2 rounded-md ml-4">
                    Free Consultation
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
