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

const testimonials = [
    {
        name: "Anjali Mehra",
        content: "Staying at Smart PG's was the best decision I made during my internship. Safe, clean, and super comfy!",
    },
    {
        name: "Ravi Sharma",
        content: "The environment is very peaceful and everything is well maintained. Highly recommended!",
    },
    {
        name: "Sneha Rao",
        content: "I felt like home from day one. Their service and rooms are truly top-notch.",
    },
]

export default function TestimonialSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })
    return (
        <section ref={ref} className="w-full bg-yellow-400 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <p className="uppercase tracking-widest text-sm text-gray-800 mb-2">
                    Testimonials
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                    What Our Residents Say
                </h2>


                <motion.div
                    initial={{ y: 350, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-2xl mx-auto"
                >
                    <Carousel
                        opts={{ align: "center", loop: true }}
                        className="w-full max-w-2xl mx-auto"
                    >
                        <CarouselContent>
                            {testimonials.map((t, i) => (
                                <CarouselItem key={i}>
                                    <motion.div
                                        whileHover={{
                                            scale: 1.03,
                                            backgroundColor: "#fef3c7", // contrast hover color
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-xl shadow-md p-6 text-left max-w-xl mx-auto transition-all"
                                    >
                                        <Quote className="text-yellow-500 w-8 h-8 mb-4" />
                                        <p className="text-gray-700 text-base italic mb-4">"{t.content}"</p>
                                        <h4 className="text-gray-900 font-semibold text-sm">— {t.name}</h4>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="mt-6 flex justify-center gap-4"
                        >
                            <CarouselPrevious />
                            <CarouselNext />
                        </motion.div>
                    </Carousel>
                </motion.div>

            </div>
        </section>
    )
}
