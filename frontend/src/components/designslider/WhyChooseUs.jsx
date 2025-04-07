import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Heart,
  Building2,
  Globe,
  LayoutList,
  Palette,
  Hammer,
  ShieldCheck,
  Star,
  Lightbulb,
  Smile,
  MapPin,
} from "lucide-react";

const whyItems = [
  {
    icon: <ClipboardList className="w-8 h-8 text-red-500" />,
    text: "146 quality checks",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    text: "1,00,000+ happy homes",
  },
  {
    icon: <Building2 className="w-8 h-8 text-red-500" />,
    text: "60+ cities",
  },
  {
    icon: <Globe className="w-8 h-8 text-red-500" />,
    text: "3 countries",
  },
  {
    icon: <LayoutList className="w-8 h-8 text-red-500" />,
    text: "20 lakh+ catalogue products",
  },
  {
    icon: <Palette className="w-8 h-8 text-red-500" />,
    text: "3,500+ designers",
  },
  {
    icon: <Hammer className="w-8 h-8 text-red-500" />,
    text: "On-site supervision",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
    text: "10-year warranty",
  },
  {
    icon: <Star className="w-8 h-8 text-red-500" />,
    text: "4.9/5 average rating",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-red-500" />,
    text: "Innovative ideas",
  },
  {
    icon: <Smile className="w-8 h-8 text-red-500" />,
    text: "Customer satisfaction",
  },
  {
    icon: <MapPin className="w-8 h-8 text-red-500" />,
    text: "Pan-India service",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#f7f6f9] py-10 overflow-hidden">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        Why choose us
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-6 px-4">
          {[...whyItems, ...whyItems].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center min-w-[180px] bg-white rounded-xl shadow p-4"
            >
              {item.icon}
              <p className="mt-2 text-sm text-center text-gray-700 font-medium">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
