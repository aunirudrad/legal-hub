import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav className="fixed bg-amber-950 top-0 left-0 w-full z-50 text-white">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-xl font-bold">
                    
                    <span className="text-white tracking-wide ">LEGAL</span>
                    <span className="text-lime-400 tracking-wide">HUB</span>
                    <p className="text-xs tracking-widest">A LAW FIRM AGENCY</p>
                </div>

                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/about' >About</NavLink>
                    <NavLink to='/attorneys' >Attorneys</NavLink>
                    {/* <NavLink to='/practice-areas' >Practice Areas</NavLink>
                    <NavLink to='/case-studies' >Case Studies</NavLink> */}
                    <NavLink to='/blog' >Blog</NavLink>
                    <NavLink to='/contact' >Contact</NavLink>
                </ul>

                <button className="bg-lime-500 text-black font-semibold px-4 py-2 rounded-md ml-4">
                    Free Consultation
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
