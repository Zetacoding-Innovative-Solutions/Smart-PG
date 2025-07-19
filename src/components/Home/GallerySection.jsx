"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

const galleryImages = [
    "/PG/images (35).jpg",
    "/PG/images (36).jpg",
    "/PG/images (16).jpg",
    "/PG/images (18).jpg",
    "/PG/images (1).jpg",
    "/PG/images (8).jpg",
    "/PG/images (24).jpg",
]

export default function GallerySection() {
    const [selectedIndex, setSelectedIndex] = useState(null)

    const openModal = (index) => setSelectedIndex(index)
    const closeModal = () => setSelectedIndex(null)
    const prevImage = () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))
    const nextImage = () => setSelectedIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))

    useEffect(() => {
        document.body.style.overflow = selectedIndex !== null ? "hidden" : ""
        return () => {
            document.body.style.overflow = ""
        }
    }, [selectedIndex])

    return (
        <section className="w-full bg-yellow-50 py-20">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[6px] font-medium text-sm text-yellow-600 mb-3"
                >
                    Our Gallery
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-sans"
                >
                    Explore Life at Smart PG
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-700 mb-10 max-w-2xl mx-auto text-base"
                >
                    Experience the ambiance of Smart PG—from comfortable rooms to vibrant shared spaces. Click on any photo to explore it in full detail.
               </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-5">
                    {galleryImages.slice(0, 4).map((img, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-xl cursor-pointer shadow-lg group"
                            onClick={() => openModal(idx)}
                        >
                            <Image
                                src={img}
                                alt={`Gallery ${idx + 1}`}
                                width={500}
                                height={300}
                                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {galleryImages.slice(4).map((img, idx) => (
                        <motion.div
                            key={idx + 4}
                            whileHover={{ scale: 1.05 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="overflow-hidden rounded-xl cursor-pointer shadow-lg group"
                            onClick={() => openModal(idx + 4)}
                        >
                            <Image
                                src={img}
                                alt={`Gallery ${idx + 5}`}
                                width={500}
                                height={300}
                                className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="/gallery"
                        className="mt-10 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition shadow-md"
                    >
                        Browse Full Gallery
                    </Link>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black bg-opacity-70 backdrop-blur-md flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative max-w-3xl w-full"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-white bg-black bg-opacity-60 p-2 rounded-full hover:scale-105 transition"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <button
                                onClick={prevImage}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-60 p-2 rounded-full hover:scale-105 transition"
                            >
                                <ArrowLeft />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-60 p-2 rounded-full hover:scale-105 transition"
                            >
                                <ArrowRight />
                            </button>
                            <Image
                                src={galleryImages[selectedIndex]}
                                alt="Gallery Image"
                                width={1000}
                                height={600}
                                className="w-full h-auto object-contain rounded-xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
