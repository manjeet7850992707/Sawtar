import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import stepsvideo from '../../assets/video/illustrationvideos.mp4';

const steps = [
  {
    title: "Step 1: Select your floorplan to get an interactive 3D home",
    videoUrl: stepsvideo,
    description:
      "Select your floorplan from a library of 2000s of homes or directly upload a floorplan image to get an interactive 3D home.",
  },
  {
    title: "Step 2: Easily design each room using an extensive catalog of room designs and products",
    videoUrl: stepsvideo,
    description:
      "Explore over 1000 room designs and personalize them with products from top brands such as IKEA, Urban Ladder, Dash Square, and Asian Paints with just a click.\n\nMake your room design process simple and enjoyable with our easy-to-use platform.",
  },
  {
    title: "Step 3: Simplify Budget Planning with Real-Time Price Estimates",
    videoUrl: stepsvideo,
    description:
      "You get a real-time price estimate for the products you’ve added in your 3D home, empowering you to make informed decisions and save money in the process.\n\nSay goodbye to painful follow-ups and take control of your budget with our easy-to-use Live Estimate generator.",
  },
  {
    title: "Step 4: Connect with Designers or Contractors: Make Your Design a Reality",
    videoUrl: stepsvideo,
    description:
      "After finalising the design, pick from our curated list of highly reputed factories, contractors, merchants or design firms to place your order.\n\nWe’ll guide you through the ordering process and provide committed support from our project advisors.",
  },
];

const FourStepDesign = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#f9f4ef] to-[#fff] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl font-extrabold text-center text-gray-800 mb-20 tracking-tight leading-tight"
        >
          Our Premium 4-Step Design Journey
        </motion.h2>

        {/* Steps */}
        <div className="space-y-28">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col-reverse lg:flex-row items-center gap-12 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="lg:w-1/2 text-center lg:text-left"
                >
                  <h3 className="text-5xl font-bold text-gray-900 mb-6">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </motion.div>

                {/* Video Section with Hover Play Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative w-full lg:w-3/5 h-[340px] lg:h-[450px] xl:h-[520px] overflow-hidden rounded-3xl shadow-2xl group"
                >
                  <video
                    src={step.videoUrl}
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 z-10 rounded-3xl" />

                  {/* Play Button - Appears on Hover */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-opacity-80 p-5 rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
                      <FaPlay className="text-white text-2xl" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FourStepDesign;
