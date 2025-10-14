import React from "react";

const AppointmentForm = () => {
    
    return (
        <div className="bg-orange-300 flex flex-col lg:flex-row items-center justify-center mt-10 md:mb-40">

            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                <img
                    src="/form-img.jpg" // replace with your image path
                    alt="LEGALHUB"
                    className="w-full shadow-lg object-cover"
                />
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8">

                {/* Headings */}
                <div className="mb-6 text-center lg:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-amber-950 mb-1">
                        Booking an Appointment
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base">Free Consultation</p>
                </div>

                {/* Form */}
                <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <textarea
                        placeholder="Message"
                        
                        rows="4"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-amber-950 text-white font-semibold py-2 rounded-lg hover:bg-amber-800 transition duration-300"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    );
};

export default AppointmentForm;
