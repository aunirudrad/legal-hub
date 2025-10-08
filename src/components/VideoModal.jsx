import React from 'react';
import { CgClose } from 'react-icons/cg';


const VideoModal = ({setIsVideoOpen}) => {
    // Video Modal
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="relative bg-white rounded-lg shadow-lg w-[90%] md:w-[60%] lg:w-[40%] overflow-hidden">

                {/* Video Container */}
                <div className="relative aspect-video w-full pointer-events-none">
                    <iframe
                        className="w-full h-full rounded-md"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Legalcare Intro Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Close Button (on top of everything) */}
                <button
                    onClick={() => setIsVideoOpen(false)}
                    className="absolute top-2 right-2 z-50 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 text-xl font-bold shadow-lg hover:bg-gray-100"
                    style={{ pointerEvents: 'auto' }}
                >
                    <CgClose></CgClose>
                </button>
            </div>
        </div>
    );
};

export default VideoModal;