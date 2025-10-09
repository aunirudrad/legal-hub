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
                <h5 className="text-[#b2ad4a] text-3xl mb-5 font-semibold uppercase tracking-wide">
                    Our Attorney
                </h5>
                <h2 className="text-5xl font-bold text-gray-900 mt-2">
                    Our Legal Attorneys
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 lg:px-[200px]">
                {attorneys.map((attorney) => (
                    <div
                        key={attorney.id}
                        className="relative w-full h-[380px] [perspective:1000px] cursor-pointer group"
                        onClick={() => handleFlip(attorney.id)} // for mobile/touch devices
                    >
                        <div
                            className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]
                sm:group-hover:[transform:rotateY(180deg)]
                ${flippedCards[attorney.id] ? '[transform:rotateY(180deg)]' : ''}
              `}
                        >
                            {/* Front Side */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#b2ad4a] to-[#c9c55d] rounded-xl shadow-lg flex flex-col justify-end p-6 text-white backface-hidden">
                                <div>
                                    <h3 className="text-lg font-semibold">{attorney.name}</h3>
                                    <p className="text-sm opacity-90">{attorney.specialization}</p>
                                </div>
                            </div>

                            {/* Back Side */}
                            <div
                                className="absolute inset-0 rounded-xl shadow-xl overflow-hidden [transform:rotateY(180deg)] backface-hidden bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${attorney.image})`,
                                }}
                            >
                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

                                {/* Animated content wrapper */}
                                <div
                                    className={`absolute bottom-0 w-full px-6 pb-6 text-white transform transition-all ease-out duration-[2000ms]
                    ${flippedCards[attorney.id] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                    sm:group-hover:translate-y-0 sm:group-hover:opacity-100
                  `}
                                >
                                    <div className="bg-amber-950/90 p-4 rounded-md">
                                        <p className="italic text-sm leading-relaxed mb-3">
                                            “{attorney.quote}”
                                        </p>
                                        <p className="font-semibold text-lg">{attorney.name}</p>
                                        <p className="text-xs opacity-90">{attorney.specialization}</p>
                                    </div>
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
