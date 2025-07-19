"use client"

import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { motion } from "framer-motion"
import { BedDouble, ShieldCheck, Wifi, Droplet } from "lucide-react"
import Link from "next/link"
import clsx from "clsx"

const services = [
    {
        icon: BedDouble,
        title: "Furnished Rooms",
        description: "Comfortable, spacious, and well-maintained rooms with all essentials.",
    },
    {
        icon: ShieldCheck,
        title: "Secure Premises",
        description: "CCTV surveillance and 24/7 security for your peace of mind.",
    },
    {
        icon: Wifi,
        title: "High-Speed WiFi",
        description: "Stay connected always with uninterrupted internet access.",
    },
    {
        icon: Droplet,
        title: "24/7 Water & Power",
        description: "Round-the-clock water supply and backup power availability.",
    },
]

export default function ServicesIntroSection() {
    const [flippedIndex, setFlippedIndex] = useState(null)
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

    const handleFlip = (index) => {
        setFlippedIndex(index === flippedIndex ? null : index)
    }

    return (
        <section ref={ref} className="w-full bg-yellow-400 py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                {/* Animated Texts */}
                <motion.p
                    initial={{ y: -80, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="uppercase tracking-[10px] font-semibold text-sm text-gray-700 mb-2"
                >
                    Our Services
                </motion.p>

                <motion.h2
                    initial={{ y: -80, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                    What We Offer at Smart PG's
                </motion.h2>

                <motion.p
                    initial={{ y: -80, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-gray-800 max-w-2xl mx-auto mb-10"
                >
                    Enjoy a wide range of premium facilities designed for your comfort and convenience.
                </motion.p>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        const isFlipped = flippedIndex === index
                        const slideDirection = index < 2 ? -250 : 250
                        const delayTime = index < 2 ? 0.6 - index * 0.1 : 0.6 + index * 0.1
                        return (
                            <motion.div
                                key={index}
                                initial={{ x: slideDirection, opacity: 0 }}
                                animate={inView ? { x: 0, opacity: 1 } : {}}
                                transition={{ duration: 0.6, delay: delayTime }}
                                className="perspective"
                                onClick={() => handleFlip(index)}
                                onMouseEnter={() => handleFlip(index)}
                                onMouseLeave={() => handleFlip(index)}
                            >
                                <motion.div
                                    className={clsx(
                                        "relative w-full h-60 transform-style-preserve-3d transition-transform duration-500",
                                        isFlipped && "rotate-y-180"
                                    )}
                                >
                                    {/* Front */}
                                    <div className="absolute w-full h-full bg-white rounded-xl shadow-md flex flex-col items-center justify-center p-4 backface-hidden">
                                        <Icon className="w-10 h-10 text-yellow-500 mb-3" />
                                        <h4 className="text-lg font-semibold text-gray-800">
                                            {service.title}
                                        </h4>
                                    </div>

                                    {/* Back */}
                                    <div className="absolute w-full h-full bg-white rounded-xl shadow-md flex flex-col gap-2 items-center justify-center p-4 rotate-y-180 backface-hidden">
                                        <h4 className="text-lg font-semibold text-gray-800">
                                            {service.title}
                                        </h4>
                                        <p className="text-base text-gray-700">{service.description}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <Link
                        href="/services"
                        className="mt-10 inline-block bg-white hover:bg-gray-100 text-yellow-600 font-semibold px-6 py-3 rounded-full transition"
                    >
                        See All Services
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
