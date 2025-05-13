import React, { useState } from "react";
import servicesData from "./servicesData";
import { motion } from "framer-motion";

const ServiceSection = () => {
  const categories = Object.keys(servicesData);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2c1c0f] mb-4">
          Find the Right Professionals for Your Home
        </h2>
        <p className="text-[#5c4535] text-base md:text-lg">
          Explore top-rated interior designers, architects, plumbers, electricians, and more.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="w-full flex justify-center mb-12">
        <div className="w-full max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 overflow-hidden rounded-full bg-white shadow-md">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full whitespace-nowrap px-4 py-3 border transition duration-300 text-sm font-medium ${
                selectedCategory === category
                  ? "bg-[#d97706] text-white border-[#d97706]"
                  : "bg-white text-[#2c1c0f] border-[#ddd]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 p-2">
        {servicesData[selectedCategory].map((service) => (
          <motion.div
            key={service.id}
            className="bg-white  shadow-lg overflow-hidden transition hover:shadow-2xl border border-[#eee]"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-52 object-cover "
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#2c1c0f] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#5c4535] leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Pricing and Button */}
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-[#d97706]">
                 100 ${service.price}
                  <span className="text-sm text-[#888] font-normal ml-1">
                    /hour
                  </span>
                </span>
                <button className="bg-[#d97706] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#bf6505] transition duration-300">
                  Hire Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>


    </section>
  );
};

export default ServiceSection;
