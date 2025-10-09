import React from 'react'


export default function WhySelectUs() {
    const cards = [
        {
            icon: '⚖️',
            title: 'Fight for Justice',
            desc: 'Seeking justice in the world is a sed significant emotional and investment when we follow this call.',
        },
        {
            icon: '📜',
            title: 'Best Case Strategy',
            desc: 'Seeking justice in the world is a sed significant emotional and investment when we follow this call.',
        },
        {
            icon: '👨‍⚖️',
            title: 'Experienced Attorney',
            desc: 'Seeking justice in the world is a sed significant emotional and investment when we follow this call.',
        },
    ]


    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Decorative olive bar behind section */}
            <div className="absolute top-0 left-0 w-full h-24 bg-[#b2ad4a] -z-10" />


            {/* Section container with responsive margins */}
            <div className="px-6 md:px-16 lg:px-[320px] grid md:grid-cols-2 gap-10">
                {/* ---------------- LEFT SECTION ---------------- */}
                <div className="flex flex-col justify-center">
                    <h5 className="text-[#b2ad4a] font-semibold mb-2 uppercase tracking-wide">Services</h5>
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Select Us?</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed max-w-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ullam dolorem laboriosam, tempore voluptatibus ducimus ut consequuntur soluta iure nam quidem hic pariatur voluptas dolor enim, adipisci mollitia odit! Beatae ullam facere quasi? Accusantium ex consequatur mollitia voluptatibus ea, officia, earum iure dolore explicabo minus perspiciatis amet in corrupti molestias?
                    </p>
                    <button className="bg-[#b2ad4a] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#9b9640] transition">
                        Free Consultation
                    </button>
                </div>


                {/* ---------------- RIGHT SECTION ---------------- */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 md:col-span-1 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl transition border border-gray-100 p-6 text-center"
                        >
                            <div className="text-4xl mb-4 text-[#b2ad4a]">{card.icon}</div>
                            <h3 className="font-semibold text-xl mb-2 text-gray-900">{card.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}