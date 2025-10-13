import React from "react";

const BlogCard = ({ blog }) => {
    return (
        <div className="relative bg-white shadow-md border border-transparent hover:border-gray-800 transition-all duration-300 p-4 flex flex-col">
           
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mt-4 hover:text-[#b3a139] cursor-pointer">
                {blog.title}
            </h3>

            

            {/* Date + Description */}
            <div className="mt-3 flex items-start gap-3">
                <div className="absolute z-10 -top-6 bg-[#b3a139] text-white px-3 py-2 text-center">
                    <p className="text-lg font-bold leading-tight">{blog.date}</p>
                    <p className="text-xs uppercase">{blog.month}</p>
                    <p className="text-xs">{blog.year}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                    {blog.description}
                </p>
            </div>

            {/* Read More */}
            <div className="mt-5">
                <button className="text-[#b3a139] border border-[#b3a139] hover:bg-[#b3a139] hover:text-white transition-all px-5 py-2 text-sm font-medium">
                    Read more
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
