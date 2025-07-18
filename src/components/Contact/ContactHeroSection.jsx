"use client"

import { motion } from "framer-motion"

export default function ContactHeroSection() {
    return (
        <section className="w-full bg-gradient-to-br from-white via-[#FACC15]/20 to-[#E0E7FF]/30 py-20 pt-48">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="text-center md:text-left flex-1 z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="uppercase text-sm tracking-[8px] text-gray-600 mb-2 text-center"
                    >
                        Get in Touch
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center"
                    >
                        Let's Connect with Smart PG's
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg text-gray-600 max-w-md mx-auto text-center"
                    >
                        Have questions or need details about our PGs? Reach out anytime — we're always here to help.
                    </motion.p>
                </div>

                {/* Right SVG */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                    className="w-[300px] md:w-[400px] flex-shrink-0"
                >
                    <svg
                        viewBox="0 0 512 512"
                        className="w-full h-auto"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M467 392H45V120c0-13.3 10.7-24 24-24h374c13.3 0 24 10.7 24 24v272z"
                            fill="#FACC15"
                        />
                        <path
                            d="M256 280L45 120h422L256 280z"
                            fill="#FDE68A"
                        />
                        <path
                            d="M256 280L45 392h422L256 280z"
                            fill="#FCD34D"
                        />
                    </svg>
                </motion.div>
            </div>
        </section>
    )
}
