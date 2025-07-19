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
    description:
      "Spacious, tastefully furnished rooms that offer a perfect blend of comfort and style for every resident.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Premises",
    description:
      "Equipped with CCTV surveillance and round-the-clock security to ensure complete peace of mind.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description:
      "Reliable, high-speed internet connectivity to support your work, studies, and entertainment.",
  },
  {
    icon: Droplet,
    title: "24/7 Water & Power",
    description:
      "Enjoy uninterrupted access to water and electricity, powered by robust backup systems.",
  },
 
]

export default function ServicesIntroSection() {
  const [flippedIndex, setFlippedIndex] = useState(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const handleFlip = (index) => {
    setFlippedIndex(index === flippedIndex ? null : index)
  }

  return (
    <section ref={ref} className="w-full bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 py-20 font-sans">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.p
          initial={{ y: -80, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="uppercase tracking-[6px] font-semibold text-base text-gray-800 mb-3"
        >
          Our Services
        </motion.p>

        <motion.h2
          initial={{ y: -80, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-4xl font-extrabold text-gray-900 mb-4"
        >
          Discover Premium Facilities
        </motion.h2>

        <motion.p
          initial={{ y: -80, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-gray-800 text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Elevate your PG experience with top-tier amenities crafted to provide luxury, safety, and convenience.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            const isFlipped = flippedIndex === index
            const slideDirection = index % 2 === 0 ? -100 : 100
            const delayTime = 0.2 + index * 0.2

            return (
              <motion.div
                key={index}
                initial={{ x: slideDirection, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: delayTime }}
                className="perspective cursor-pointer"
                onClick={() => handleFlip(index)}
                onMouseEnter={() => handleFlip(index)}
                onMouseLeave={() => handleFlip(index)}
              >
                <motion.div
                  className={clsx(
                    "relative w-full h-64 transform-style-preserve-3d transition-transform duration-500",
                    isFlipped && "rotate-y-180"
                  )}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-6 backface-hidden">
                    <Icon className="w-12 h-12 text-yellow-500 mb-3" />
                    <h4 className="text-lg md:text-xl font-semibold text-gray-800">
                      {service.title}
                    </h4>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex flex-col gap-2 items-center justify-center p-6 rotate-y-180 backface-hidden">
                    <h4 className="text-lg md:text-xl font-semibold text-yellow-600">
                      {service.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-700 text-center">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Link
            href="/services"
            className="mt-12 inline-block bg-white hover:bg-yellow-100 text-yellow-600 font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            See All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}