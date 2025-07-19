"use client"

import { Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactInfoSection() {
    return (
<section className="w-full py-20 bg-gradient-to-br from-[#FEF9C3] via-[#FEF3C7] to-[#FFF7ED]">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Contact Info Box */}
                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 md:p-10 rounded-2xl shadow-xl space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">
                        Contact Information
                    </h2>

                    <p className="text-gray-700 leading-relaxed">
                        Have questions or need help with booking a PG? We're always ready to assist you!
                    </p>

                    <div className="space-y-5">
                        <div className="flex items-center gap-4">
                            <Phone className="text-yellow-600" />
                            <a href="tel:+919123456789" className="text-gray-800 font-medium hover:underline">
                                +91 9686684111 , +91 9591380827

                            </a>
                           
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="text-yellow-600" />
                            <a href="mailto:info@smartpgs.in" className="text-gray-800 font-medium hover:underline">
                                info@smartpgs.in
                            </a>
                        </div>
                        <div className="flex items-start gap-4">
                            <MapPin className="text-yellow-600 mt-1" />
                            <p className="text-gray-800 font-medium">
                                26, 6th Main Road, Dwaraka Nagar, Bagalur Main Road, Near SBI Bank, Yelahanka, Bengaluru, Karnataka – 560063
                            </p>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-5 pt-4">
                        <a href="#" className="bg-yellow-100 hover:bg-yellow-500 text-yellow-700 hover:text-white transition p-3 rounded-full shadow-md">
                            <i className="fa-brands fa-facebook-f text-xl"></i>
                        </a>
                        <a href="#" className="bg-yellow-100 hover:bg-yellow-500 text-yellow-700 hover:text-white transition p-3 rounded-full shadow-md">
                            <i className="fa-brands fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="bg-yellow-100 hover:bg-yellow-500 text-yellow-700 hover:text-white transition p-3 rounded-full shadow-md">
                            <i className="fa-brands fa-twitter text-xl"></i>
                        </a>
                    </div>
                </motion.div>

                {/* Google Map */}
                <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-xl border border-yellow-200">
                        <iframe
                            title="Smart PG Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6205619378097!2d77.61718137479588!3d13.123207111536882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19afd5708b0f%3A0xedddb8a7e8dc31a9!2sSmart%20girls%20pg!5e0!3m2!1sen!2sin!4v1752832565795!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
