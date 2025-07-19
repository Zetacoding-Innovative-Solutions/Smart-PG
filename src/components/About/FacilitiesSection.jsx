"use client"

import { BedDouble, Wifi, ShieldCheck, Droplet, Tv2, Utensils } from "lucide-react"

const facilities = [
    {
        icon: BedDouble,
        title: "Comfortable Rooms",
        description: "Spacious and fully furnished rooms for a cozy stay.",
    },
    {
        icon: Wifi,
        title: "High-Speed Wi-Fi",
        description: "Unlimited internet access to stay connected always.",
    },
    {
        icon: ShieldCheck,
        title: "24/7 Security",
        description: "Secured premises with CCTV and on-site supervision.",
    },
    {
        icon: Droplet,
        title: "Power & Water",
        description: "Uninterrupted water supply and power backup.",
    },
    {
        icon: Tv2,
        title: "Entertainment",
        description: "Common area with TV and relaxation zone.",
    },
    {
        icon: Utensils,
        title: "Kitchen Access",
        description: "Shared kitchen facility for light cooking.",
    },
]

export default function FacilitiesSection() {
    return (
        <section className="w-full bg-gradient-to-br from-white via-[#FACC15]/30 to-[#E0E7FF]/50 py-20">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
                    Our Facilities
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Designed for Comfort & Convenience
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    Smart PG's offers thoughtfully curated facilities to make your stay hassle-free and enjoyable.
                </p>

                {/* Facilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {facilities.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 text-left"
                            >
                                <Icon className="w-8 h-8 text-yellow-500 mb-4" />
                                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
