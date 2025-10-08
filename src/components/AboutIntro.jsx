import React, { useState, useEffect } from "react";
import VideoModal from "./VideoModal";

// 🎥 AboutIntro Component
export default function AboutIntro() {
    // Active Tab Management
    const [activeTab, setActiveTab] = useState("mission");

    // Count-up Animation for Experience
    const [count, setCount] = useState(0);
    useEffect(() => {
        let start = 0;
        const end = 25;
        const duration = 2000;
        const increment = end / (duration / 30);
        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(counter);
                setCount(end);
            } else {
                setCount(Math.ceil(start));
            }
        }, 30);
        return () => clearInterval(counter);
    }, []);

    // Video Modal
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const renderTabContent = () => {
        switch (activeTab) {
            case "mission":
                return (
                    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                );
            case "vision":
                return (
                    "Our vision is to deliver justice with commitment and compassion, ensuring fairness and trust in every legal battle we fight."
                );
            case "value":
                return (
                    "We value transparency, honesty, and excellence in our legal practices to achieve the highest satisfaction for our clients."
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Container with Responsive Margins */}
            <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 lg:px-[320px]">

                {/* ---------------- LEFT SIDE IMAGE + PLAY BUTTON ---------------- */}
                <div className="relative w-full md:w-1/2">
                    <img
                        src="self.png"
                        alt="Lawyer"
                        className="max-h-[800px] rounded-lg shadow-lg w-full object-cover"
                    />
                    <button
                        onClick={() => setIsVideoOpen(true)}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#b2ad4a] text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-[#9b9640] transition"
                    >
                        ▶
                    </button>

                    {/* Count-up Badge */}
                    <div className="absolute -bottom-0 lg:left-0 bg-[#b2ad4a] text-white font-semibold px-6 py-3 rounded-tr-lg">
                        {count} <span className="font-normal text-sm">Years of Experienced</span>
                    </div>
                </div>

                {/* ---------------- RIGHT SIDE CONTENT ---------------- */}
                <div className="md:w-1/2 text-center md:text-left lg:text-left">
                    <h5 className="text-[#b2ad4a] font-semibold mb-2 text-3xl">Welcome to LEGALHUB</h5>
                    <h2 className="text-5xl font-bold text-gray-900 leading-snug mb-4">
                        We Always Fight For Your Justice to Win
                    </h2>
                    <p className="text-gray-600 mb-6 text-xl">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                    </p>

                    
                    {/* Tabs */}
                    <div className="flex flex-wrap gap-0 justify-between border border-gray-200 rounded-t-md overflow-hidden">
                        {["mission", "vision", "value"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 md:px-12 lg:px-16 gap-0 py-2 font-semibold text-sm  transition-all
        ${activeTab === tab
                                        ? "bg-[#b2ad4a] text-white"
                                        : "bg-white text-gray-800 hover:bg-gray-50"
                                    }`}
                            >
                                {tab === "mission"
                                    ? "Our Mission"
                                    : tab === "vision"
                                        ? "Our Vision"
                                        : "Our Value"}
                            </button>
                        ))}
                    </div>
                        {/* Tab Content */}
                        <div className="bg-gray-50 p-5 rounded-b-md border border-gray-100 text-gray-600">
                            {renderTabContent()}
                        </div>

                    
                </div>
            </div>

            {/* ---------------- VIDEO MODAL ---------------- */}
            {isVideoOpen && (
                <VideoModal setIsVideoOpen={setIsVideoOpen}></VideoModal>
            )}
        </section>
    );
}
