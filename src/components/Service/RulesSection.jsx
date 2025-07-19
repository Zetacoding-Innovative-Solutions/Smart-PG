"use client"

import { motion } from "framer-motion"

const rules = [
    {
        title: "Respect Quiet Hours",
        description: "Maintain silence between 10 PM and 6 AM to ensure a peaceful environment for all residents.",
    },
    {
        title: "Visitors Policy",
        description: "Visitors are only allowed in common areas during designated hours. No overnight stays permitted.",
    },
    {
        title: "Cleanliness",
        description: "Keep your room and shared spaces clean. Regular checks will be conducted.",
    },
    {
        title: "Damage Responsibility",
        description: "Residents are liable for any damage caused to property or furnishings.",
    },
    {
        title: "No Smoking/Drugs",
        description: "Smoking, alcohol, and drugs are strictly prohibited inside the premises.",
    },
    {
        title: "Timely Payments",
        description: "All payments must be made before the 5th of every month to avoid penalties.",
    },
]

export default function RulesSection() {
    return (
        <section className="w-full bg-white py-20" id="rules">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="uppercase tracking-widest text-sm text-gray-600 mb-2">
                        Rules & Regulations
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Guidelines for a Harmonious Stay
                    </h2>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-12">
                        To ensure safety, comfort, and harmony among residents, we kindly ask everyone to follow these simple rules.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {rules.map((rule, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition relative"
                        >
                            <div className="absolute -top-4 left-4 bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg text-sm">
                                {index + 1}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2 mt-4">{rule.title}</h4>
                            <p className="text-gray-600 text-sm">{rule.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
