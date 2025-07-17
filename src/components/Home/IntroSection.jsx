// /components/IntroSection.jsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import useCountUp from "@/hooks/useCountUp"

export default function IntroSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })

    return (
        <section
            ref={ref}
            className="w-full py-20 bg-white"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
                {/* Text Section */}
                <div className="md:w-1/2 w-full">
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="uppercase tracking-[10px] font-semibold text-sm text-yellow-600 mb-2 md:text-left text-center">
                            About Smart PG
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:text-left text-center">
                            Welcome to Your Second Home
                        </h2>
                        <p className="text-gray-600 mb-6 text-justify">
                            Smart PG's offers safe, clean, and comfortable living spaces for students and working professionals. With top-notch amenities and friendly staff, it’s more than just accommodation — it’s a community.
                        </p>

                        {/* Stats - Single Row with Vertical Divider */}
                        <StatsRow />
                    </motion.div>

                    {/* Button to about page*/}
                    <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={inView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center">
                            <Link
                                href="/about"
                                className="mt-6 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition"
                            >
                                Know More
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Image Section */}
                <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 w-full"
                >
                    <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg z-6">
                        <Image
                            src="/PG/images (8).jpg"
                            alt="PG Intro"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)] z-7"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


function StatsRow() {
    const residents = useCountUp(50)
    const years = useCountUp(5)
    const rooms = useCountUp(20)
    const power = useCountUp(24)
    const week = useCountUp(7)

    return (
        <div className="mt-10 flex items-center divide-x divide-gray-300 text-center">
            <div className="px-4">
                <h3 className="text-3xl font-bold text-yellow-600">{residents}+</h3>
                <p className="text-gray-600 text-sm">Happy Residents</p>
            </div>
            <div className="px-4">
                <h3 className="text-3xl font-bold text-yellow-600">{years}+</h3>
                <p className="text-gray-600 text-sm">Years of Service</p>
            </div>
            <div className="px-4">
                <h3 className="text-3xl font-bold text-yellow-600">{rooms}</h3>
                <p className="text-gray-600 text-sm">Spacious Rooms</p>
            </div>
            <div className="px-4">
                <h3 className="text-3xl font-bold text-yellow-600">{power}/{week}</h3>
                <p className="text-gray-600 text-sm">Power & Water</p>
            </div>
        </div>
    )
}
