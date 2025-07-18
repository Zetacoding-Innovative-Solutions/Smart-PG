"use client"

import { motion } from "framer-motion"
import { BedDouble, Wifi, ShieldCheck, Droplet, Sparkles, Tv, Utensils, Fan } from "lucide-react"

const features = [
    {
        icon: BedDouble,
        title: "Fully Furnished Rooms",
        description: "Each room is equipped with beds, cupboards, tables, and more for a comfy stay.",
    },
    {
        icon: Wifi,
        title: "High-Speed WiFi",
        description: "Uninterrupted internet connectivity throughout the premises.",
    },
    {
        icon: ShieldCheck,
        title: "Secure & Monitored",
        description: "24/7 CCTV surveillance and secure entry for peace of mind.",
    },
    {
        icon: Droplet,
        title: "24/7 Water & Power",
        description: "No power cuts or water issues – guaranteed round-the-clock access.",
    },
    {
        icon: Sparkles,
        title: "Housekeeping",
        description: "Regular cleaning and maintenance to ensure hygiene and comfort.",
    },
    {
        icon: Tv,
        title: "Entertainment Options",
        description: "Common TV lounge and recreation for your downtime.",
    },
    {
        icon: Utensils,
        title: "Delicious Meals",
        description: "Nutritious and hygienic food served fresh daily.",
    },
    {
        icon: Fan,
        title: "Well-Ventilated Spaces",
        description: "Airy rooms with natural lighting and ventilation.",
    },
]

export default function ServicesGridSection() {
    return (
        <section className="w-full bg-yellow-400 py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="uppercase tracking-widest text-sm text-gray-800 mb-2">
                        Our Facilities
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Everything You Need, All in One Place
                    </h2>
                    <p className="text-gray-800 max-w-2xl mx-auto mb-12">
                        From basic essentials to premium amenities, we’ve covered all your needs for a peaceful and comfortable stay.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Icon className="w-10 h-10 text-yellow-500 mb-4" />
                                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h4>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
