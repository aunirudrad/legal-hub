import React from "react";

const BlogCard = ({ blog }) => {
    return (
        <article className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100">
            {/* Date Badge */}
            <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl px-3 py-2 shadow-lg">
                <div className="text-center">
                    <p className="text-lg font-bold leading-none">{blog.date}</p>
                    <p className="text-xs font-medium uppercase tracking-wide">{blog.month}</p>
                    <p className="text-xs opacity-90">{blog.year}</p>
                </div>
            </div>

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-2xl h-56 bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Container */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-amber-600 transition-colors duration-300 cursor-pointer line-clamp-2">
                    {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {blog.description}
                </p>

                {/* Bottom Section */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    {/* Read More Button */}
                    <button className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors duration-300 group/btn">
                        <span>Read More</span>
                        <svg 
                            className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>

                    {/* Reading Time Indicator */}
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>5 min read</span>
                    </div>
                </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </article>
    );
};

export default BlogCard;
