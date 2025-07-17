"use client"

import { useState } from "react"
import GalleryModal from "./GalleryModal"

export default function GallerySection({ images }) {
    const [selectedIndex, setSelectedIndex] = useState(null)

    return (
        <section className="w-full px-4 py-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`PG Photo ${idx + 1}`}
                        className="rounded-lg object-cover w-full h-48 cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedIndex(idx)}
                    />
                ))}
            </div>

            {selectedIndex !== null && (
                <GalleryModal
                    images={images}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    onClose={() => setSelectedIndex(null)}
                />
            )}
        </section>
    )
}
