import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 text-white transition-all duration-500 ${scrolled
                ? "w-full md:w-6/8 bg-amber-950 md:rounded-full py-4 md:mt-4"
                : "w-full bg-amber-950 py-3 rounded-none"
                }`}
        >
            <div className="max-w-7xl mx-3 md:mx-auto flex justify-between items-center transition-all duration-500">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <span className="text-white tracking-wide ">LEGAL</span>
                    <span className="text-lime-400 tracking-wide">HUB</span>
                    <p className="text-xs tracking-widest">A LAW FIRM AGENCY</p>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-sm font-medium">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/attorneys">Attorneys</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>

                {/* Free Consultation Button */}
                <button className="hidden md:block bg-lime-500 text-black font-semibold px-4 py-2 rounded-md ml-4">
                    Free Consultation
                </button>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                    >
                        {/* Hamburger Icon */}
                        <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="flex flex-col md:hidden bg-amber-950 px-6 py-4 space-y-4 text-sm font-medium">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
                    <NavLink to="/attorneys" onClick={() => setMenuOpen(false)}>Attorneys</NavLink>
                    <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                    <button className="bg-lime-500 text-black font-semibold px-4 py-2 rounded-md w-full mt-2">
                        Free Consultation
                    </button>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
