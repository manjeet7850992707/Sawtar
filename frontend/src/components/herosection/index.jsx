import React from 'react';
import { motion } from 'framer-motion';
import homeVideo from '../../assets/video/homevideo.mp4';


function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden pt-16">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={homeVideo}type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 w-full md:w-1/2 flex items-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-black/50 p-8 md:ml-20 rounded-lg max-w-xl text-white backdrop-blur-sm"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Transform Your Space with Timeless Design
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Discover interiors that inspire. Let our expert team elevate your home with elegance, comfort, and creativity.
          </motion.p>
          <motion.button
            className="bg-white text-black py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Explore Projects
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
