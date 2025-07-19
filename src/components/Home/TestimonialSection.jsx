"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const testimonials = [
    {
        name: "Anjali Mehra",
        content:
            "Staying at Smart PG's was the best decision I made during my internship. Safe, clean, and super comfy!",
    },
    {
        name: "Ravi Sharma",
        content:
            "The environment is very peaceful and everything is well maintained. Highly recommended!",
    },
    {
        name: "Sneha Rao",
        content:
            "I felt like home from day one. Their service and rooms are truly top-notch.",
    },
]

export default function TestimonialSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })

    const [activeIndex, setActiveIndex] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 3000)

        return () => clearInterval(intervalRef.current)
    }, [])

    return (
        <section
            ref={ref}
            className="w-full bg-[#F3EACB] py-24 px-4 transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="uppercase tracking-[6px] text-sm font-semibold text-yellow-600 mb-2"
                >
                    Testimonials
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 font-sans"
                >
                    Hear from Our Happy Residents
                </motion.h2>

                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <Carousel
                        opts={{ align: "center", loop: true, duration: 3000 }}
                    >
                        <CarouselContent
                            className="animate-slide"
                            style={{ transform: `translateX(-${activeIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}
                        >
                            {testimonials.map((t, i) => (
                                <CarouselItem
                                    key={i}
                                    className="transition-transform duration-200 ease-in-out flex-shrink-0 w-full"
                                >
                                    <motion.div
                                        whileHover={{
                                            scale: 1.03,
                                            backgroundColor: "#fff6b0",
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-3xl shadow-xl p-10 text-left max-w-xl mx-auto border border-yellow-300 hover:shadow-yellow-200"
                                    >
                                        <Quote className="text-yellow-500 w-8 h-8 mb-4" />
                                        <p className="text-gray-800 text-lg italic leading-relaxed mb-4 font-serif">
                                            "{t.content}"
                                        </p>
                                        <h4 className="text-gray-900 font-semibold text-base font-sans">
                                            — {t.name}
                                        </h4>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-10 flex justify-center gap-4"
                        >
                            <CarouselPrevious
                                className="hover:bg-yellow-100 shadow-md"
                                onClick={() =>
                                    setActiveIndex(
                                        (prev) =>
                                            (prev - 1 + testimonials.length) % testimonials.length
                                    )
                                }
                            />
                            <CarouselNext
                                className="hover:bg-yellow-100 shadow-md"
                                onClick={() =>
                                    setActiveIndex((prev) => (prev + 1) % testimonials.length)
                                }
                            />
                        </motion.div>

                        <div className="mt-6 flex justify-center gap-3">
                            {testimonials.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`transition-all duration-300 rounded-full ${
                                        activeIndex === idx
                                            ? "w-4 h-4 bg-yellow-600 opacity-100"
                                            : "w-2.5 h-2.5 bg-yellow-400 opacity-60"
                                    }`}
                                ></div>
                            ))}
                        </div>
                    </Carousel>
                </motion.div>
            </div>
        </section>
    )
}
