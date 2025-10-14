import React, { useState } from "react";

const AppointmentForm = () => {
    // Step 1: Setup form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // Step 2: Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Step 3: Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            alert(data.message); // show backend response message
            console.log("✅ Data sent successfully:", formData);

            // Clear the form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("❌ Error submitting form:", error);
            alert("Something went wrong. Please try again!");
        }
    };

    // Step 4: Design (your form)
    return (
        <div className="bg-orange-300 flex flex-col lg:flex-row items-center justify-center mt-10 md:mb-40">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                <img
                    src="/form-img.jpg"
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
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
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
