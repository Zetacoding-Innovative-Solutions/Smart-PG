// /components/RulesSection.jsx
"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Bell, BedDouble, UserMinus, Wifi } from "lucide-react"
import Link from "next/link"

const rules = [
    {
        icon: ShieldCheck,
        title: "Safety First",
        desc: "Entry restricted to registered residents only.",
    },
    {
        icon: Bell,
        title: "Quiet Hours",
        desc: "Maintain silence after 10 PM in common areas.",
    },
    {
        icon: BedDouble,
        title: "Cleanliness",
        desc: "Keep rooms and shared spaces tidy.",
    },
    {
        icon: Wifi,
        title: "Internet Usage",
        desc: "No illegal downloads or misuse of bandwidth.",
    },
    {
        icon: UserMinus,
        title: "No Outsiders",
        desc: "Visitors are not allowed inside the premises.",
    },
]

export default function RulesSection() {
    return (
        <section className="w-full bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <p className="uppercase tracking-widest text-sm text-yellow-600 mb-2">
                    House Rules
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    A Safe & Respectful Environment
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                    To ensure a peaceful and comfortable stay for everyone, we request all residents to kindly follow these core guidelines.
                </p>

                {/* Grid with centered second row */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                    {rules.slice(0, 3).map((rule, index) => (
                        <RuleCard rule={rule} index={index} key={index} />
                    ))}
                </div>

                {/* Second row (2 cards centered) */}
                <div className="hidden md:flex justify-center gap-6 mt-6">
                    {rules.slice(3).map((rule, index) => (
                        <RuleCard rule={rule} index={index + 3} key={index + 3} />
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
                    View All Rules
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
                scale: 1.03,
                borderColor: "#FACC15",
            }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="bg-yellow-50 rounded-xl p-6 border-2 border-transparent shadow-md flex flex-col items-center text-center transition-all cursor-default"
        >
            <Icon className="w-8 h-8 text-yellow-500 mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{rule.title}</h4>
            <p className="text-gray-700 text-sm">{rule.desc}</p>
        </motion.div>
    )
}
