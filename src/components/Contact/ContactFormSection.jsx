"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Loader2, CheckCircle } from "lucide-react"

export default function ContactFormSection() {
    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.p
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="uppercase tracking-widest text-sm text-yellow-700"
                    >
                        Get in Touch
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
                    >
                        We'd Love to Hear From You
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-gray-700 mt-4 max-w-xl mx-auto"
                    >
                        Whether you have questions or you're ready to get started, we're here to help. Fill out the form below and we'll be in touch shortly.
                    </motion.p>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </section>
    )
}

function ContactForm() {
    const [status, setStatus] = useState("idle")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("sending")
        await new Promise((res) => setTimeout(res, 2000))
        setStatus("sent")
        setTimeout(() => setStatus("idle"), 3000)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-[500px] mx-auto bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 p-1 rounded-2xl shadow-2xl"
        >
            <div className="bg-white p-8 md:p-10 rounded-[1rem] flex flex-col gap-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 9876543210" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="example@mail.com" required />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Write your message here..." rows={5} required />
                </div>

                <div className="flex justify-center">
                    <motion.button
                        type="submit"
                        className="relative inline-flex items-center justify-center px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold transition disabled:opacity-60"
                        disabled={status === "sending" || status === "sent"}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {status === "idle" && (
                                <motion.span
                                    key="idle"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Send Message
                                </motion.span>
                            )}
                            {status === "sending" && (
                                <motion.span
                                    key="sending"
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                                </motion.span>
                            )}
                            {status === "sent" && (
                                <motion.span
                                    key="sent"
                                    className="flex items-center gap-2"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <CheckCircle className="w-4 h-4" /> Sent!
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>
            </div>
        </form>
    )
}
