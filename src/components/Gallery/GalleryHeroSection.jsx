'use client'
import { motion } from "framer-motion"

export default function GalleryHeroSection() {
    return (
        <>
            <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-gradient-to-br from-[#FEF9C3]/70 via-white to-[#E0E7FF]/70 flex items-center justify-center px-4">
                {/* SVG Background Shapes */}
                <svg
                    className="absolute bottom-12 right-12 w-24 h-24 opacity-20 drop-shadow-md"
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    <rect width="100" height="100" rx="20" fill="#E0E7FF" />
                </svg>

                <svg
                    className="absolute top-1/3 right-1/4 w-16 h-16 opacity-10 drop-shadow-sm rotate-45"
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    <path
                        d="M50 0 L100 100 H0 Z"
                        fill="#FEF9C3"
                    />
                </svg>

                {/* Centered Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center z-10"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Our Gallery
                    </h1>
                    <p className="text-lg text-gray-700 max-w-xl mx-auto">
                        A glimpse into the spaces and experiences at Smart PG's.
                    </p>
                </motion.div>
            </section>
            <section className="w-full py-12 md:py-16 px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Explore Our Space
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Get a visual tour of the ambience, amenities, and lifestyle that Smart PG’s offers. Every photo reflects the comfort and care we provide.
                </p>
            </section>
        </>
    )
}
