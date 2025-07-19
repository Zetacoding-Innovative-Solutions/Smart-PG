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
                {/* Image Section */}
                <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 w-full group"
                >
                    <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg z-6 transform transition-transform duration-500 group-hover:scale-105">
                        <Image
                            src="/PG/images (1).jpg"
                            alt="PG Intro"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)] z-7"></div>
                    </div>
                </motion.div>

                {/* Text Section */}
                <div className="md:w-1/2 w-full">
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        animate={inView ? { x: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="uppercase tracking-[10px] font-semibold text-sm text-yellow-600 mb-2 text-center">
                            About Us
                        </p>
                        <h2 className="text-2xl md:text-3xl font-semibold text-yellow-700 mb-4 text-center">
                            More Than Just a Place to Stay
                        </h2>
                        <p className="text-gray-700 mb-4 text-justify">
                            At Smart PG's, we believe in building a community, not just offering rooms. From thoughtfully designed spaces to a secure and friendly environment, our aim is to make every resident feel right at home.
                        </p>
                        <p className="text-gray-700 mb-6 text-justify">
                            Whether you're a student, a working professional, or someone relocating to a new city, we provide the comfort, support, and flexibility you need. Our facilities are tailored to ensure a seamless living experience with everything you need under one roof.
                        </p>
                    </motion.div>

                    {/* Button to about page*/}
                    <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        animate={inView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center">
                            <Link
                                href="/service"
                                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded-full transition"
                            >
                                Explore Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
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
