import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import categoryData from "./data.json";

const CategorySlider = () => {
  const scrollRefs = useRef([]);

  const scroll = (index, direction) => {
    const container = scrollRefs.current[index];
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-20 px-6 py-12 max-w-7xl mx-auto">
      {categoryData.map((cat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {/* Category Banner */}
          <div className="mb-6">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
            <h2 className="text-3xl font-bold text-gray-800 mt-4">{cat.name}</h2>
          </div>

          {/* Slider with Arrows */}
          <div className="relative">
            {/* Scrollable Container */}
            <div className="relative">
              <div
                ref={(el) => (scrollRefs.current[index] = el)}
                className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4 px-10"
              >
                {cat.items.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex-none w-64 bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5 text-center">
                      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={() => scroll(index, "left")}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={() => scroll(index, "right")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CategorySlider;
