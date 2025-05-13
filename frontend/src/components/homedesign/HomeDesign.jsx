import React from 'react';
import { motion } from 'framer-motion';
import video from '../../assets/video/houseillustration.mp4';
import { FaCouch, FaRulerCombined, FaPaintRoller } from 'react-icons/fa';

const HomeDesign = () => {
  return (
    <section className="py-20 px-4 bg-white text-gray-900 relative overflow-hidden">
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-4"
      >
        AI-Powered Home Design Studio
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-lg md:text-xl mb-6 max-w-2xl mx-auto"
      >
        Create your dream home with intelligent design recommendations, virtual previews, and more.
      </motion.p>

      {/* CTA Button */}
      <motion.button
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto block bg-gradient-to-r from-[#BA5933] via-orange-500 to-[#BA5933] 
             bg-[length:200%_200%] bg-left hover:bg-right 
             px-10 py-3 rounded-full font-semibold text-white shadow-md 
             transition-all duration-700 ease-in-out animate-gradient-slide"
>
  Try It Now
</motion.button>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 text-center"
      >
        <div>
          <h3 className="text-3xl font-bold text-orange-600">1500+</h3>
          <p className="text-sm">Homes Designed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-orange-600">AI Powered</h3>
          <p className="text-sm">Design Suggestions</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-orange-600">100%</h3>
          <p className="text-sm">Client Satisfaction</p>
        </div>
      </motion.div>

      {/* Video with Decorative Icons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl"
      >
        {/* Left Floating Icon */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden md:block absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-orange-400 text-5xl animate-bounce-slow"
        >
          <FaCouch />
        </motion.div>

        {/* Right Floating Icon */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden md:block absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-yellow-500 text-5xl animate-bounce-slow"
        >
          <FaPaintRoller />
        </motion.div>

        {/* Video Player */}
        <video
          src={video}
          autoPlay
          muted
          loop
          controls
          className="w-full h-auto rounded-2xl"
        />
      </motion.div>
    </section>
  );
};

export default HomeDesign;
