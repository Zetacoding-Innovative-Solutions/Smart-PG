// components/WhyChooseUsSection.jsx
"use client"

import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const points = [
    {
        title: "Safety First",
        description: "24/7 security, CCTV surveillance, and controlled access to ensure peace of mind.",
        position: 'row-start-1 col-start-1',
        animationPosition: {
            x: -150,
            y: -150
        }
    },
    {
        title: "Comfortable Living",
        description: "Spacious, furnished rooms designed for modern living with daily maintenance.",
        position: 'row-start-1 col-start-2',
        animationPosition: {
            x: 150,
            y: -150
        }
    },
    {
        title: "All-Inclusive Facilities",
        description: "From high-speed WiFi to uninterrupted water and power supply — everything’s included.",
        position: 'row-start-2 col-start-1',
        animationPosition: {
            x: -150,
            y: 150
        }
    },
    {
        title: "Community-Focused",
        description: "We don't just rent rooms, we build a vibrant, respectful living community.",
        position: 'row-start-2 col-start-2',
        animationPosition: {
            x: 150,
            y: 150
        }
    },
]

export default function WhyChooseUsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })
    return (
        <section ref={ref} className="w-full bg-yellow-400 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Text Header */}
                <div className="mb-10">
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}

                    >
                        <p className="uppercase tracking-[10px] text-sm font-semibold text-gray-800">Why Choose Us</p>
                    </motion.div>
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}

                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Experience Better PG Living
                        </h2>
                    </motion.div>
                </div>

                {/* Grid Container */}
                <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-white rounded-xl shadow-md p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 items-center"
                >
                    {/* Image */}
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="md:row-span-2 md:col-start-3 col-span-1 w-full h-full relative"
                    >
                        <Image
                            src="/PG/images (4).jpg"
                            alt="Why Choose Us"
                            fill
                            className="object-cover rounded-lg shadow-md"
                        />
                    </motion.div>
                    {/* Points */}
                    {points.map((point, idx) => (
                        <motion.div
                            initial={{ x: point.animationPosition.x, y: point.animationPosition.y, opacity: 0 }}
                            animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            key={idx}
                            className={`${point.position}`}
                        >
                            <div className="flex items-start space-x-4 col-span-1 row-span-1">
                                <div
                                    className="w-10 h-10 text-4xl font-bold shrink-0"
                                    style={{
                                        WebkitTextStroke: '1px #FACC15',
                                        color: '#fff',
                                        textShadow: '0 0 0 #FACC15',
                                    }}
                                >
                                    {`0${idx + 1}`}
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-800">{point.title}</h4>
                                    <p className="text-base text-gray-600 mt-2">{point.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div >
        </section >
    )
}