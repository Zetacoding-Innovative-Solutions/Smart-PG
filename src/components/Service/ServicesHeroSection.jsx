"use client"

import { motion } from "framer-motion"

export default function ServicesHeroSection() {
    return (
        <section className="w-full pt-48 pb-24 bg-gradient-to-br from-yellow-50 via-[#FACC15]/30 to-[#FDE68A]/40 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/50 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-14 text-center border border-yellow-200"
                >
                    <p className="uppercase tracking-[6px] text-sm font-semibold text-yellow-600 mb-3">
                        Our Services
                    </p>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
                        Discover What We Offer
                    </h1>

                    <p className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
    From essential comforts to community-building experiences, Smart PG’s offers everything you need under one roof — designed for peace of mind and a modern lifestyle.
   </p>


                </motion.div>
            </div>
        </section>
    )
}
