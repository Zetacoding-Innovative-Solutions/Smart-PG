// /components/Navbar.jsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Instagram, Phone, Clock } from "lucide-react"
import Link from "next/link"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="absolute top-0 left-0 w-full z-50 backdrop-blur-xs">
            {/* Top Info Bar */}
            <div className="md:w-[70%] w-[100%] mx-auto bg-transparent text-lg text-black px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Open Mon-Sat: 8AM - 8PM</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        <span>+91 98765 43210</span>
                    </div>
                </div>
            </div>
            <hr />

            {/* Main Navbar */}
            <div className="sticky top-0 z-50 w-full bg-transparent py-4">
                <div className="md:w-[70%] w-[100%] mx-auto bg-[#fff] md:rounded-xl rounded-none shadow-md p-6 flex justify-between items-center">
                    <div className="text-xl font-bold text-yellow-600 flex items-center gap-2">
                        <img src="/logo.jpg" alt="" className="w-[46px]" />
                        <p> Smart PG's</p>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-6 text-gray-800 font-medium">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-yellow-600 transition text-lg">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(true)}>
                            <Menu className="w-6 h-6 text-yellow-700" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/50 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            className="fixed top-0 right-0 w-3/4 bg-white z-50 p-6 shadow-lg flex flex-col"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween" }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-xl font-bold text-yellow-600 flex items-center gap-2">
                                    <img src="/logo.jpg" alt="" className="w-[46px]" />
                                    <p> Smart PG's</p>
                                </div>
                                <button onClick={() => setIsOpen(false)}>
                                    <X className="w-6 h-6 text-gray-700" />
                                </button>
                            </div>
                            <nav className="flex flex-col gap-4 text-lg text-gray-800">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-yellow-600 transition"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            {/* Optional: contact info in drawer */}
                            <div className="mt-auto pt-6 text-sm text-gray-500 border-t">
                                <p className="mb-1">📞 +91 98765 43210</p>
                                <p>smartpgs.in</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
