"use client"

import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect } from "react"

export default function GalleryModal({ images, selectedIndex, setSelectedIndex, onClose }) {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768

    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => (document.body.style.overflow = "auto")
    }, [])

    const currentImage = images[selectedIndex]

    const prev = () => setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    const next = () => setSelectedIndex((selectedIndex + 1) % images.length)

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
            <div className="bg-white max-w-6xl w-full rounded-lg relative flex flex-col md:flex-row overflow-hidden">
                {/* Side thumbnails for desktop */}
                {!isMobile && (
                    <div className="w-1/4 bg-gray-100 overflow-y-auto max-h-[90vh] p-4 grid grid-cols-1 gap-3">
                        {images.map((src, idx) => (
                            <img
                                key={idx}
                                src={src}
                                alt={`Thumbnail ${idx}`}
                                className={`cursor-pointer w-full h-24 object-cover rounded-md ${idx === selectedIndex ? "ring-2 ring-yellow-500" : ""
                                    }`}
                                onClick={() => setSelectedIndex(idx)}
                            />
                        ))}
                    </div>
                )}

                {/* Main image */}
                <div className="relative flex-1 flex items-center justify-center bg-black">
                    <img
                        src={currentImage}
                        alt="Preview"
                        className="max-h-[80vh] object-contain rounded-md"
                    />

                    {/* Controls */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
                    >
                        <X size={24} />
                    </button>

                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}
