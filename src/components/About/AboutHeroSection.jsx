// /components/AboutHeroSection.jsx
"use client"

import { motion } from "framer-motion"

const stats = [
    { label: "Happy Residents", value: "50+" },
    { label: "Spacious Rooms", value: "20+" },
    { label: "Years of Service", value: "5+" },
    { label: "24/7 Facilities", value: "100%" },
]

export default function AboutHeroSection() {
    return (
        <section className="w-full bg-gradient-to-br from-yellow-100 via-white to-yellow-50 relative pt-48 pb-24 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="uppercase tracking-widest text-sm text-yellow-600 mb-2"
                >
                    About Smart PG's
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                    Over 5 Years of Trusted Accommodation
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-gray-700 max-w-2xl mx-auto text-base md:text-lg mb-8"
                >
                    At Smart PG's, we are committed to providing a safe, comfortable, and community-driven living experience for students and working professionals alike.
                </motion.p>

                {/* Stats */}
                <div className="mt-6 flex flex-wrap justify-center gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + idx * 0.2 }}
                            key={idx}
                            className="bg-white border border-yellow-200 rounded-lg px-6 py-4 shadow-sm text-center hover:shadow-md transition z-4"
                        >
                            <h3 className="text-2xl font-bold text-yellow-600">{stat.value}</h3>
                            <p className="text-sm text-gray-700">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Optional background shape */}
            <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 z-3">
                <circle cx="100" cy="100" r="90" fill="none" stroke="#FACC15" strokeWidth="2" opacity="0.1" />

                <circle cx="100" cy="100" r="60" fill="none" stroke="#FACC15" strokeWidth="2" opacity="0.2" />

                <circle cx="100" cy="100" r="30" fill="none" stroke="#FACC15" strokeWidth="2" opacity="0.3" />
            </svg>
        </section>
    )
}
