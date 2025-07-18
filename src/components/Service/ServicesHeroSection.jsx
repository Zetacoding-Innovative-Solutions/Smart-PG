"use client"

import { motion } from "framer-motion"

export default function ServicesHeroSection() {
    return (
        <section className="w-full pt-48 pb-20 bg-gradient-to-br from-white via-[#FACC15]/40 to-[#E0E7FF]/40 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-8 md:p-12 text-center"
                >
                    <p className="uppercase tracking-widest text-sm text-gray-600 mb-2">
                        Our Services
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Discover What We Offer
                    </h1>
                    <p className="text-gray-700 max-w-2xl mx-auto">
                        We provide a wide range of premium facilities and amenities designed to make your stay at Smart PG's comfortable, secure, and enjoyable.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
