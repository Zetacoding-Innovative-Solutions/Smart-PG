"use client"

import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import useCountUp from "@/hooks/useCountUp"

export default function IntroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
          <p className="uppercase tracking-[6px] font-semibold text-sm text-yellow-600 mb-3 text-center md:text-left">
            About Smart PG
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
            A New Standard in Premium PG Living
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            At Smart PG, we redefine urban accommodation with professionally managed spaces tailored for both students and working professionals. Our properties offer a seamless blend of comfort, security, and modern convenience—ensuring you feel right at home from day one. With thoughtfully designed interiors, 24/7 utilities, and a supportive community atmosphere, Smart PG is more than a place to stay—it’s where success begins.
          </p>

          <StatsRow />

          <div className="flex justify-center md:justify-start">
            <Link
              href="/about"
              className="mt-6 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition hover:scale-105"
            >
              Know More
            </Link>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
          <div className="relative w-full h-80 md:h-[480px] rounded-xl overflow-hidden shadow-xl group">
            <Image
              src="/PG/images (2).jpg"
              alt="PG Intro"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// One-by-one fade-in animation
const statVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}


function StatsRow() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    { label: "Satisfied Residents", value: useCountUp(500) + "+" },
    { label: "Years of Excellence", value: useCountUp(7) + "+" },
    { label: "Premium Rooms", value: useCountUp(150) + "+" },
    { label: "Uninterrupted Utilities", value: "24/7" },
  ]

  return (
    <div
      ref={ref}
      className="mt-10 flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-6"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          variants={statVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={i}
          className="flex flex-col items-center min-w-[120px] text-center"
        >
          <h3 className="text-3xl font-bold text-yellow-600">{stat.value}</h3>
          <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
