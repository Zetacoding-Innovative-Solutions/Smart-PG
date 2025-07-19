"use client"

import { motion } from "framer-motion"

export default function ContactHeroSection() {
    return (
        <section className="w-full bg-gradient-to-br from-white via-[#FEF9C3]/50 to-[#E0E7FF]/30 py-24 pt-[200px] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-100 rounded-full blur-2xl opacity-30 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-yellow-200 rounded-full blur-[100px] opacity-40 -z-10"></div>

            <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                {/* Left SVG / Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
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

                {/* Right Text */}
                <div className="text-center md:text-left flex-1 z-10">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="uppercase text-sm tracking-[6px] text-gray-500 mb-2"
                    >
                        Get in Touch
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-yellow-700 mb-4"
                    >
                        Let’s Connect with Smart PG’s
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 mb-6 leading-relaxed"
                    >
                        Have questions or want to know more? We’re here to guide you through every step. Drop us a message and we’ll get back to you shortly.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
                    >
                        Contact Us
                    </motion.button>
                </div>
            </div>
        </section>
    )
}
