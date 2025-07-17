"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

const galleryImages = [
    "/PG/images (5).jpg",
    "/PG/images (10).jpg",
    "/PG/images (3).jpg",
    "/PG/images (18).jpg",
    "/PG/images (7).jpg",
    "/PG/images (8).jpg",
    "/PG/images (16).jpg",
]

export default function GallerySection() {
    const [selectedIndex, setSelectedIndex] = useState(null)

    const openModal = (index) => setSelectedIndex(index)
    const closeModal = () => setSelectedIndex(null)
    const prevImage = () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))
    const nextImage = () => setSelectedIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [selectedIndex])

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="uppercase tracking-[10px] font-semibold text-sm text-yellow-600 mb-2">
                    Our Gallery
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    Explore Our PG Spaces
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {galleryImages.slice(0, 4).map((img, idx) => (
                        <div
                            key={idx}
                            className="overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => openModal(idx)}
                        >
                            <Image
                                src={img}
                                alt={`Gallery ${idx + 1}`}
                                width={500}
                                height={300}
                                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {galleryImages.slice(4).map((img, idx) => (
                        <div
                            key={idx + 4}
                            className="overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => openModal(idx + 4)}
                        >
                            <Image
                                src={img}
                                alt={`Gallery ${idx + 5}`}
                                width={500}
                                height={300}
                                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* Browse Button */}
                <Link
                    href="/gallery"
                    className="mt-10 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition"
                >
                    Browse Full Gallery
                </Link>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.4)] backdrop-blur-xs flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative max-w-3xl w-full"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Prev Button */}
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                            >
                                <ArrowLeft />
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
                            >
                                <ArrowRight />
                            </button>

                            {/* Image */}
                            <Image
                                src={galleryImages[selectedIndex]}
                                alt="Gallery Image"
                                width={1000}
                                height={600}
                                className="w-full h-auto object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
