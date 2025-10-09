import React, { useEffect, useState } from 'react'

export default function OurAttorneys() {
    const [attorneys, setAttorneys] = useState([])
    const [flippedCards, setFlippedCards] = useState({})

    useEffect(() => {
        fetch('/data/attorneys.json')
            .then((res) => res.json())
            .then((data) => setAttorneys(data.slice(0, 6)))
            .catch((err) => console.error('Error loading attorneys:', err))
    }, [])

    const handleFlip = (id) => {
        setFlippedCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-[#b2ad4a] -z-10"></div>

            <div className="text-center mb-12">
                <h5 className="text-[#b2ad4a] text-3xl mb-5 font-semibold uppercase tracking-wide">Our Attorney</h5>
                <h2 className="text-5xl font-bold text-gray-900 mt-2">Our Legal Attorneys</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 lg:px-[200px]">
                {attorneys.map((attorney) => (
                    <div
                        key={attorney.id}
                        className="group relative w-full h-[380px] perspective cursor-pointer"
                        onClick={() => handleFlip(attorney.id)}
                    >
                        <div
                            className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d
                                ${flippedCards[attorney.id] ? 'rotate-y-180' : ''}
                                sm:group-hover:rotate-y-180
                            `}
                        >
                            {/* Front Side */}
                            <div className="absolute inset-0 bg-gradient-to-t from-green-400 to-green-300 rounded-xl shadow-lg flex flex-col justify-end p-6 text-white backface-hidden">
                                <div>
                                    <h3 className="text-lg font-semibold">{attorney.name}</h3>
                                    <p className="text-sm opacity-90">{attorney.specialization}</p>
                                </div>
                            </div>

                            {/* Back Side */}
                            <div
                                className="absolute inset-0 rounded-xl shadow-xl p-6 text-white rotate-y-180 backface-hidden flex flex-col justify-between bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${attorney.image})`,
                                }}
                            >
                                <p className="bg-amber-950 p-4 rounded-md italic text-sm leading-relaxed">
                                    “{attorney.quote}”
                                </p>
                                <div className="mt-6">
                                    <p className="font-semibold">{attorney.name}</p>
                                    <p className="text-xs opacity-90">{attorney.specialization}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <button className="inline-block bg-[#b2ad4a] hover:bg-[#9b9640] text-white font-semibold px-6 py-3 rounded-md transition-all">
                    See More
                </button>
            </div>
        </section>
    )
}
