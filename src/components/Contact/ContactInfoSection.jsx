"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactInfoSection() {
    return (
        <section className="w-full py-20 bg-yellow-400">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Contact Info - on top in mobile */}
                <motion.div
                    initial={{ x: -150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                    <p className="text-gray-800 max-w-md">
                        Reach out to us anytime — we'd love to assist you with your stay at Smart PG's.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Phone className="text-gray-900" />
                            <a href="tel:+919123456789" className="text-gray-900 font-medium hover:underline">
                                +91 91234 56789
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="text-gray-900" />
                            <a href="mailto:info@smartpgs.in" className="text-gray-900 font-medium hover:underline">
                                info@smartpgs.in
                            </a>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="text-gray-900 mt-1" />
                            <p className="text-gray-900 font-medium">
                                123 Smart PG's Lane,<br /> City Name, State - 123456
                            </p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4">
                        <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-white transition">
                            <i className="fa-brands fa-facebook text-2xl"></i>
                        </a>
                        <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-white transition">
                            <i className="fa-brands fa-instagram text-2xl"></i>
                        </a>
                    </div>
                </motion.div>

                {/* Google Map */}
                <motion.div
                    initial={{ x: 150, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full h-80 md:h-full rounded-xl overflow-hidden shadow-xl">
                        <iframe
                            title="Smart PG Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6205619378097!2d77.61718137479588!3d13.123207111536882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19afd5708b0f%3A0xedddb8a7e8dc31a9!2sSmart%20girls%20pg!5e0!3m2!1sen!2sin!4v1752832565795!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
