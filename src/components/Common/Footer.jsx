// components/Footer.jsx
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-14 px-6 pb-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & Tagline */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Image
                            src="/logo.jpg"
                            alt="Smart PG's Logo"
                            width={50}
                            height={50}
                            className="rounded-md"
                        />
                        <h2 className="text-xl font-bold text-white">
  Smart <span className="text-yellow-400">PG's</span>
</h2>

                    </div>
<p className="text-sm text-gray-400">
  Comfortable, Secure, and Affordable Living Spaces — designed for students and working professionals, with top-tier amenities and a homely atmosphere.
</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
                        <li><Link href="/services" className="hover:text-yellow-400">Our Services</Link></li>
                        <li><Link href="//gallery" className="hover:text-yellow-400">Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9686684111</li>
                        <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9591380827</li>
                        <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> smartpgs@example.com</li>
                        <li className="text-gray-400">📍26, 6th Main Road, Dwaraka Nagar,
Bagalur Main Road, Near SBI Bank,
Yelahanka, Bengaluru, Karnataka – 560063</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-yellow-400"><Facebook className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-yellow-400"><Instagram className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-yellow-400"><Twitter className="w-5 h-5" /></Link>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()}  <span className="text-yellow-400">Smart PG's.</span> All rights reserved.
            </div>
        </footer>
    )
}
