import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="mt-20 md:relative bg-[#1e2329] text-white">
            {/* 🔸 Newsletter Section */}
            <div className="md:absolute bg-[#b2ad4a] md:w-2/5 md:left-240 md:-top-26  py-6 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <h3 className="text-white text-lg md:text-xl font-medium">
                    Subscribe to our Newsletter
                </h3>

                <div className="flex w-full md:w-auto">
                    <input
                        type="email"
                        placeholder="Enter email address"
                        className="bg-white px-4 py-2 w-full md:w-72 rounded-l-md focus:outline-none text-gray-800"
                    />
                    <button className="bg-[#8c873b] hover:bg-[#7c7632] px-5 py-2 rounded-r-md text-white font-medium transition">
                        Subscribe
                    </button>
                </div>
            </div>

            {/* 🔸 Footer Content */}
            <div className="px-6 md:px-16 lg:px-[200px] py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">
                        LEGAL<span className="text-[#b2ad4a]">HUB</span>
                    </h2>
                    <p className="text-[#b2ad4a] font-semibold mb-4">
                        A LAW FIRM AGENCY
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>

                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="bg-gray-800 hover:bg-[#b2ad4a] p-3 rounded-full transition"
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="#"
                            className="bg-gray-800 hover:bg-[#b2ad4a] p-3 rounded-full transition"
                        >
                            <FaFacebookF />
                        </a>
                        <a
                            href="#"
                            className="bg-gray-800 hover:bg-[#b2ad4a] p-3 rounded-full transition"
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Practice Areas */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li>› Family Law</li>
                        <li>› Business Law</li>
                        <li>› Insurance Law</li>
                        <li>› Criminal Law</li>
                        <li>› Drug Offenses</li>
                        <li>› Employment Law</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Have a Question?</h3>
                    <ul className="space-y-3 text-gray-300 text-sm">
                        <li>
                            📍 203 Fake St. Mountain View, San Francisco, California, USA
                        </li>
                        <li>📞 +2 392 3929 210</li>
                        <li>✉️ info@yourdomain.com</li>
                    </ul>
                </div>

                {/* Business Hours */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                    <div className="text-gray-300 text-sm space-y-2">
                        <p className="text-[#b2ad4a] font-semibold">Opening Days:</p>
                        <p>Monday – Friday: 9am to 8pm</p>
                        <p>Saturday: 9am to 5pm</p>

                        <p className="text-[#b2ad4a] font-semibold mt-4">Vacations:</p>
                        <p>All Sundays & Official Holidays</p>
                    </div>
                </div>
            </div>

            {/* 🔸 Bottom Bar */}
            <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-400">
                <p>
                    © 2025 LEGALHUB. All rights reserved | Developed by{""}
                    <span className="text-[#b2ad4a] font-semibold"> Aunirudra D.</span>
                </p>
            </div>
        </footer>
    );
}
