'use client'
import { motion } from "framer-motion"

export default function GalleryHeroSection() {
    return (
        <>
            {/* Hero Section */}
<section className="relative w-full min-h-[70vh] overflow-hidden bg-gradient-to-br from-[#FFFCE1] via-white to-[#F2F6FF] flex items-center justify-center px-4 pt-[160px] md:pt-[180px] pb-16">
                {/* Decorative Background Elements */}
                <div className="absolute -top-10 left-10 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-30"></div>
                <div className="absolute bottom-16 right-10 w-32 h-32 bg-yellow-100 rounded-full blur-xl opacity-40"></div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center z-10 px-4"
                >
                    <h2 className="text-5xl md:text-5xl font-extrabold text-yellow-600 mb-5 tracking-tight drop-shadow-md">
                        Our Gallery
                    </h2>

                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-4 leading-relaxed">
                        A vibrant look into our <span className="font-semibold text-yellow-600">spaces</span>, 
                        <span className="font-semibold text-yellow-600"> comfort</span>, and 
                        <span className="font-semibold text-yellow-600"> community lifestyle</span> at Smart PG’s.
                    </p>

                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                        From cozy bedrooms and modern facilities to cheerful common zones — our space is built with 
                        love and attention, offering the best of safety, hygiene, and homely comfort.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-full shadow-md transition-all duration-300"
                    >
                        Explore More
                    </motion.button>
                </motion.div>
            </section>

            {/* Section Heading & Description */}
            <section className="w-full py-12 md:py-16 px-4 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Explore Our Space
                </motion.h2>
                <motion.p
                    className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    From cozy rooms to cheerful common areas — take a look at how Smart PG’s blends comfort, cleanliness, and a community lifestyle under one roof.
                </motion.p>
            </section>
        </>
    )
}
