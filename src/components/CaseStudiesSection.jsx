import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import CaseStudyCard from "./CaseStudyCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CaseStudiesSection() {
    const caseStudies = [
        {
            image:
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
            title: "Legal Consultation",
            category: "Corporate",
            description: "Comprehensive corporate legal services ensuring business compliance.",
        },
        {
            image:
                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
            title: "Real Estate Advisory",
            category: "Property Law",
            description: "Expert guidance in real estate transactions and property disputes.",
        },
        {
            image:
                "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
            title: "Legal Separation",
            category: "Family Law",
            description: "Dedicated support for family and legal separation matters.",
        },
        {
            image:
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
            title: "Intellectual Property",
            category: "Corporate",
            description: "Protect your brand and ideas with our IP legal expertise.",
        },
    ];


    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < 640 : false
    );


    useEffect(() => {
        const mq = window.matchMedia("(max-width: 639px)");
        const handle = (e) => setIsMobile(e.matches);
        handle(mq);
        if (mq.addEventListener) mq.addEventListener("change", handle);
        else mq.addListener(handle);
        return () => {
            if (mq.removeEventListener) mq.removeEventListener("change", handle);
            else mq.removeListener(handle);
        };
    }, []);


    const sliderRef = useRef(null);


const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 640,
            settings: { slidesToShow: 1, dots: false },
        },
    ],
    appendDots: (dots) => (
        <div>
            <ul className="flex justify-center mt-4">{dots}</ul>
        </div>
    ),
    customPaging: () => (
        <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-[#a5a33b] transition-colors" />
    ),
};


return (
    <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
            <p className="text-[#a5a33b] font-semibold mb-2 uppercase tracking-wide text-3xl">
                Explore Case Studies
            </p>
            <h2 className="text-2xl md:text-5xl font-bold mb-10">
                1000+ Completed Cases Successfully
            </h2>


            {isMobile ? (
                <div className="flex flex-col gap-6">
                    {caseStudies.map((item, idx) => (
                        <CaseStudyCard
                            key={idx}
                            image={item.image}
                            title={item.title}
                            category={item.category}
                            description={item.description}
                        />
                    ))}
                </div>
            ) : (
                <Slider ref={sliderRef} {...settings}>
                    {caseStudies.map((caseItem, index) => (
                        <div key={index} className="px-3">
                            <CaseStudyCard
                                image={caseItem.image}
                                title={caseItem.title}
                                category={caseItem.category}
                                description={caseItem.description}
                            />
                        </div>
                    ))}
                </Slider>
            )}


            <div className="mt-10">
                <button className="bg-[#a5a33b] text-white px-6 py-3 rounded-md font-medium hover:bg-[#8b8a32] transition-colors">
                    See All Successful Cases
                </button>
            </div>
        </div>
    </section>
);
}