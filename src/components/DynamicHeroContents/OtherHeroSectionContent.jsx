import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router';
import { ReactTyped } from 'react-typed';

const AboutHeroSectionContent = () => {
    const location = useLocation();
    return (
        <div>
            <div className="relative z-10 max-w-6xl mx-auto lg:mx-[320px] px-6 text-white">
                <p className="text-lime-400 font-semibold mb-3 tracking-wide">
                    WELCOME TO LEGALHUB
                </p>

                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                    {
                        location.pathname === '/about' && "About Us"
                    }
                    {
                        location.pathname === '/attorneys' && "Attorneys"
                    }
                    {
                        location.pathname === '/practice-areas' && "Practice Areas"
                    }
                    {
                        location.pathname === '/case-studies' && "Case Studies"
                    }
                    {
                        location.pathname === '/blog' && "Blog"
                    }
                    {
                        location.pathname === '/contact' && "Contact"
                    }
                </h1>

                <p className="text-gray-300 max-w-lg mb-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi veritatis corrupti blanditiis aut similique impedit perferendis fugiat quisquam numquam voluptatem illo, dolorum placeat eos vero dolorem veniam earum, nobis totam.
                </p>

                <div className='flex justify-start items-center my-10 text-gray-200'>
                    <NavLink to='/'><span className='text-xl'>Home</span></NavLink> <span className='mx-5'><FaGreaterThan></FaGreaterThan></span> <NavLink to='about'><span className='text-xl'>
                        {
                            location.pathname === '/about' && "About Us"
                        }
                        {
                            location.pathname === '/attorneys' && "Attorneys"
                        }
                        {
                            location.pathname === '/practice-areas' && "Practice Areas"
                        }
                        {
                            location.pathname === '/case-studies' && "Case Studies"
                        }
                        {
                            location.pathname === '/blog' && "Blog"
                        }
                        {
                            location.pathname === '/contact' && "Contact"
                        }
                    </span></NavLink>
                </div>
            </div>

        </div>
    );
};

export default AboutHeroSectionContent;