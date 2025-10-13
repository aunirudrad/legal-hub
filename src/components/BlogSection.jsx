import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/data/blogData.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.error("Error loading blog data:", err));
    }, []);

    return (
        <section className="py-16 bg-[#f8f8f8]">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-[#b3a139] font-semibold">Our Blog</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    Recent Blog
                </h2>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
