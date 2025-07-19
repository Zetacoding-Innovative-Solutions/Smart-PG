"use client"

import { motion } from "framer-motion"
import {
  BedDouble,
  Wifi,
  ShieldCheck,
  Droplet,
  Sparkles,
  Tv,
  Utensils,
  Fan,
  MoveUpRight,
  Fingerprint,
  ThermometerSun,
  PlugZap,
  CookingPot,
  Refrigerator,
  WashingMachine,
  Sofa,
} from "lucide-react"

const features = [
  {
    icon: BedDouble,
    title: "Fully Furnished Rooms",
    description: "Each room is equipped with beds, cupboards, tables, and essentials for a comfortable stay.",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Uninterrupted internet access across all rooms and common areas.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security & CCTV",
    description: "Round-the-clock surveillance and secure access for total peace of mind.",
  },
  {
    icon: Droplet,
    title: "24/7 Water & Power",
    description: "No interruptions – enjoy seamless water and electricity supply always.",
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    description: "Regular cleaning and upkeep ensure spotless rooms and common areas.",
  },
  {
    icon: Tv,
    title: "LED TVs in Common Areas",
    description: "Enjoy your favorite shows and sports in our shared entertainment zones.",
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    description: "Hygienic, home-style food served fresh every day.",
  },
  {
    icon: Fan,
    title: "Ventilated, Airy Rooms",
    description: "Spacious rooms with cross-ventilation and natural sunlight.",
  },
  {
    icon: MoveUpRight,
    title: "Lift/Elevator Access",
    description: "Comfortable lift service available for all floors.",
  },
  {
    icon: Fingerprint,
    title: "Biometric & 24x7 Entry",
    description: "Smart biometric systems with secure all-day access.",
  },
  {
    icon: ThermometerSun,
    title: "Hot Water Facility",
    description: "Hot water available round-the-clock for comfort.",
  },
  {
    icon: PlugZap,
    title: "Power Backup",
    description: "Instant generator backup for uninterrupted power supply.",
  },
  {
    icon: CookingPot,
    title: "Self-Cooking Facility",
    description: "Well-equipped kitchen with utensils for self-cooking enthusiasts.",
  },
  {
    icon: Refrigerator,
    title: "Microwave & Fridge",
    description: "Modern appliances available for convenient cooking and storage.",
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Access",
    description: "Laundry made easy with shared washing machine facility.",
  },
  {
    icon: Sofa,
    title: "Comfortable Lounge Area",
    description: "Relax on sofas, read, or interact in our cozy community lounge.",
  },
]

export default function ServicesGridSection() {
  return (
    <section className="w-full bg-yellow-400 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-widest text-sm text-gray-800 mb-2">
            Our Facilities
          </p>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-yellow-800 mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Everything You Need, All in One Place
          </motion.h2>

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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Icon className="w-10 h-10 text-yellow-600 mb-4" />
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
