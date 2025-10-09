// CaseStudyCard.jsx (in components)
import React from "react";


export default function CaseStudyCard({ image, title, category, description }) {
    return (
        <div className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer">
            {/* Desktop / Laptop View (Hover-enabled devices) */}
            <div className="hidden sm:block">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />


                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#a5a33b]/90 opacity-0 group-hover:opacity-100 group-hover:m-3 group-hover:rounded-md transition-opacity duration-500 flex flex-col justify-center items-center text-white px-4">
                    <h3 className="text-lg font-semibold text-center">{title}</h3>
                    <p className="text-sm mt-1 text-center">{category}</p>
                    {description && (
                        <p className="text-xs mt-2 text-center opacity-90 max-w-[80%]">{description}</p>
                    )}
                </div>
            </div>


            {/* Mobile / Tablet View (No hover support) */}
            <div className="block sm:hidden flex w-full flex-col xs:flex-row overflow-hidden rounded-xl shadow-md">
                {/* Image Section */}
                <div className="w-full xs:w-3/5">
                    <img src={image} alt={title} className="w-full h-56 object-cover" />
                </div>


                {/* Text Section */}
                <div className="w-full xs:w-2/5 bg-[#a5a33b]/90 text-white flex flex-col justify-center px-5 py-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm mt-1">{category}</p>
                    {description && <p className="text-xs mt-2 opacity-90">{description}</p>}
                </div>
            </div>
        </div>
    );
}