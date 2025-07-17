// components/Footer.jsx
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-yellow-400 text-center text-gray-800 px-4 pt-10 pb-6">
            {/* Logo + Title */}
            <div className="flex flex-col items-center mb-6">
                {/* Optional: Replace with actual logo if available */}
                <div className="mb-2 flex gap-2 items-center">
                    <Image
                        src="/logo.jpg" // Replace with your logo
                        alt="Smart PG's Logo"
                        width={60}
                        height={60}
                    />
                    <h2 className="text-xl font-bold">Smart PG's</h2>
                </div>
                <p className="text-base">Comfortable, Secure, and Affordable Living</p>
            </div>

            {/* Contact Info */}
            <div className="hidden md:flex justify-center items-center gap-4 text-base font-medium mb-6">
                <span>📞 +91 98765 43210</span>
                <div className="h-4 border-l border-gray-600" />
                <span>📞 +91 91234 56789</span>
                <div className="h-4 border-l border-gray-600" />
                <span>✉️ smartpgs@example.com</span>
                <div className="h-4 border-l border-gray-600" />
                <span>📍 123, Lakeview Road, Chennai</span>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-4 text-sm font-medium mb-6">
                <div className="flex justify-center items-center gap-4">
                    <span>📞 +91 98765 43210</span>
                    <div className="h-4 border-l border-gray-600" />
                    <span>📞 +91 91234 56789</span>
                </div>
                <hr className="border-gray-600" />
                <div>✉️ smartpgs@example.com</div>
                <hr className="border-gray-600" />
                <div>📍 123, Lakeview Road, Chennai</div>
            </div>

            {/* Divider */}
            <hr className="border-gray-600 mb-4" />

            {/* Copyright */}
            <p className="text-sm text-gray-800 ">
                © {new Date().getFullYear()} Smart PG's. All rights reserved.
            </p>
        </footer>
    )
}
