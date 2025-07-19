// /components/AboutHeroSection.jsx
"use client"

import { motion } from "framer-motion"
import { Lightbulb, Users, Star, Clock } from "lucide-react"

const stats = [
    { label: "Happy Residents", value: "500+", icon: Users },
    { label: "Spacious Rooms", value: "210+", icon: Lightbulb },
    { label: "Years of Service", value: "5+", icon: Clock },
    { label: "24/7 Facilities", value: "100%", icon: Star },
]

export default function AboutHeroSection() {
    return (
        <section className="w-full bg-yellow-50 relative pt-48 pb-28 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="uppercase tracking-widest text-sm text-yellow-700 mb-3"
                >
                    Know Us Better
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-2xl sm:text-4xl font-extrabold text-yellow-900 mb-6"
                >
                    5+ Years of Trusted & Comfortable Living
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-yellow-800 max-w-3xl mx-auto text-lg md:text-xl mb-10"
                >
                    At Smart PG’s, we’re redefining what it means to feel at home — safe, social, and completely stress-free. Designed for students and working professionals, our spaces combine modern comforts with a warm community vibe.
                </motion.p>

                {/* Stats with icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center mt-10">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 + idx * 0.2 }}
                            className="bg-white border border-yellow-200 rounded-2xl px-6 py-6 shadow-md hover:shadow-xl transition duration-300 ease-in-out"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <stat.icon className="w-8 h-8 text-yellow-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-yellow-600">{stat.value}</h3>
                            <p className="text-sm font-medium text-gray-700 mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Element */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-yellow-400 rounded-full blur-3xl opacity-20"
            />
        </section>
    )
}
