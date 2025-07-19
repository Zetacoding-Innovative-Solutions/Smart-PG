// /components/RulesSection.jsx
"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Bell, BedDouble, UserMinus, Wifi, Trash2 } from "lucide-react"
import Link from "next/link"

const rules = [
    {
        icon: ShieldCheck,
        title: "Safety First",
        desc: "Only registered residents are permitted entry for enhanced security.",
    },
    {
        icon: Bell,
        title: "Quiet Hours",
        desc: "Help maintain peace by observing silence in common areas after 10 PM.",
    },
    {
        icon: BedDouble,
        title: "Cleanliness",
        desc: "Please keep your rooms and shared spaces neat and hygienic.",
    },
    {
        icon: Wifi,
        title: "Internet Usage",
        desc: "Avoid illegal downloads and use the network responsibly.",
    },
    {
        icon: UserMinus,
        title: "No Outsiders",
        desc: "Guests and visitors are not permitted inside the premises.",
    },
    {
        icon: Trash2,
        title: "Waste Management",
        desc: "Dispose of garbage properly and follow segregation rules for a cleaner community.",
    },
]

export default function RulesSection() {
    return (
        <section className="w-full bg-white py-24 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="uppercase tracking-[5px] text-sm font-semibold text-yellow-600 mb-2"
                >
                    House Rules
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-sans"
                >
                    A Safe & Respectful Living Space
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-700 max-w-2xl mx-auto mb-12 text-base font-medium"
                >
                    To ensure a peaceful, clean, and welcoming environment for all residents, we kindly request adherence to the following house rules.
                </motion.p>

                {/* Unified 6-card grid */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                    {rules.map((rule, index) => (
                        <RuleCard rule={rule} index={index} key={index} />
                    ))}
                </div>

                {/* Mobile layout */}
                <div className="md:hidden grid grid-cols-1 gap-6">
                    {rules.map((rule, index) => (
                        <RuleCard rule={rule} index={index} key={index} />
                    ))}
                </div>

                {/* CTA */}
                <Link
                    href="/services#rules"
                    className="mt-12 inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition"
                >
                    View All Guidelines
                </Link>
            </div>
        </section>
    )
}

function RuleCard({ rule, index }) {
    const Icon = rule.icon
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                scale: 1.05,
                borderColor: "#FACC15",
                backgroundColor: "#FFFBEB",
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg flex flex-col items-center text-center transition-all cursor-default hover:shadow-xl h-full"
        >
            <Icon className="w-9 h-9 text-yellow-500 mb-4" />
            <h4 className="text-xl font-semibold text-gray-800 mb-2 font-sans">
                {rule.title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
                {rule.desc}
            </p>
        </motion.div>
    )
}
