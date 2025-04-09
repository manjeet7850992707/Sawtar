import React from "react";
import { motion } from "framer-motion";
import homeVideo from "../../assets/video/homevideo.mp4";
import banner2 from "../../assets/img/BANNER2.png";
import banner3 from "../../assets/img/footerbanner.jpg";

import { Link } from "react-router-dom";

export const HomeDecorVideoSection = () => {
  return (
    <div className="relative">
      {/* Sticky Video Section */}
      <div className="sticky top-0 h-screen z-10 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Hum <span className="text-orange-400">Ghar</span> Sajayenge
            </h2>
            <p className="text-lg md:text-xl mb-6">
              From dream layouts to stunning furniture – your perfect home starts here.
            </p>
            <button className="bg-white text-black hover:text-black hover:scale-105 transition-transform px-8 py-3 rounded-xl font-semibold shadow-lg">
  Explore Now
</button>

          </motion.div>
        </div>
      </div>

      {/* Next Section Content */}
      <div className="bg-white py-16 px-6">
        <h3 className="text-2xl md:text-4xl font-semibold mb-4">
          Let’s Build Together
        </h3>
        <p className="text-gray-600 max-w-2xl">
          Explore our curated designs, custom solutions, and expert insights tailored to make your dream home a reality. Whether it's a cozy nook or a luxurious living space, we’ve got you covered.
        </p>
      </div>
    </div>
  );
};
export const ReferralBanner = () => {
  return (
    <Link to="/refer">
    <div className="w-full p-4">
      <div className="max-w-7xl mx-auto">
        <img
          src={banner2}
          alt="Refer and Earn Banner"
          className="max-w-8xl h-auto"
        />
      </div>
    </div>
  </Link>

  );
};

export const DreamHomeCTA = () => {
  return (
    <div
      className="relative h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner3})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center text-white max-w-2xl"
        >
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            Your dream home is just a click away
          </h2>
          <button className="mt-4 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform shadow-xl">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

