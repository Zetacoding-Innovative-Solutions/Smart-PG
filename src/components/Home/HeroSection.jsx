"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const images = [
  "/PG/images (1).jpg",
  "/PG/images (2).jpg",
  "/PG/images (16).jpg",
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 8000) // 8 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden max-h-[720px]">
      {/* Background Images */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Hero Slide ${index}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4 text-center pt-[90px]">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Experience Unmatched Comfort & Style
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white max-w-2xl"
        >
          <p className="text-lg md:text-xl mb-6">
            Welcome to a new era in PG accommodations—where every detail is curated
            for luxury, superior security, and an environment that inspires both
            professionals and students.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white max-w-2xl"
        >
          <Link
            href="/about"
            className="inline-block bg-[#FACC15] hover:bg-[#eab308] text-black px-6 py-3 rounded-full text-base font-semibold transition"
          >
            Explore Now
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
