import React, { useState, useEffect } from "react";
import { navItems } from "./data";
import { FaHeart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${
        scrolled ? "bg-white/95 shadow-md" : "bg-white/80"
      } backdrop-blur-sm transition-all duration-300 px-6 py-6 flex justify-between items-center`}
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
       
        <span className="text-2xl font-semibold text-gray-800">SAWTAR</span>
      </motion.div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-sm font-large text-gray-700">
  {navItems.map((item, index) => (
    <motion.li
      key={index}
      className="relative cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className="flex items-center gap-1 hover:text-indigo-600 transition-colors duration-200"
        onClick={() =>
          item.dropdown
            ? setActiveDropdown((prev) => (prev === index ? null : index))
            : null
        }
      >
        <a href={item.path}>{item.title}</a>
        {item.dropdown && (
          <svg
            className={`w-3 h-3 mt-0.5 text-gray-500 transition-transform ${
              activeDropdown === index ? "rotate-180 text-indigo-600" : ""
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.292l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {item.dropdown && activeDropdown === index && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-8 left-0 bg-white shadow-xl rounded-md py-3 px-4 w-48 z-50"
        >
          {item.dropdown.map((drop, idx) => (
            <a
              key={idx}
              href={drop.path}
              className="block text-sm text-gray-700 py-2 hover:text-indigo-600"
              onClick={() => setActiveDropdown(null)} // close on selection
            >
              {drop.title}
            </a>
          ))}
        </motion.div>
      )}
    </motion.li>
  ))}
</ul>


      {/* Right Side */}
      <div className="hidden md:flex items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black hover:bg-indigo-700 text-white text-sm px-6 py-2 rounded-full shadow-md transition-all duration-200"
        >
          Get Free Estimate
        </motion.button>
        <motion.div whileHover={{ scale: 1.1 }} className="relative cursor-pointer">
          <FaHeart size={20} className="text-gray-500 hover:text-indigo-600 transition-colors" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            0
          </span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <FaUserCircle size={24} className="text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer" />
        </motion.div>
      </div>

      {/* Mobile Icon */}
      <motion.div whileTap={{ scale: 0.9 }} className="md:hidden cursor-pointer" onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {isMobileOpen ? <FaTimes size={22} className="text-gray-700" /> : <FaBars size={22} className="text-gray-700" />}
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden p-6 space-y-4"
          >
            {navItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <motion.div
                  className="flex items-center justify-between cursor-pointer text-gray-700 hover:text-indigo-600 text-lg"
                  whileHover={{ x: 5 }}
                  onClick={() =>
                    item.dropdown
                      ? setActiveDropdown((prev) => (prev === index ? null : index))
                      : setIsMobileOpen(false)
                  }
                >
                  <span>{item.title}</span>
                  {item.dropdown && (
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </motion.div>

                {item.dropdown && activeDropdown === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 space-y-2"
                  >
                    {item.dropdown.map((drop, idx) => (
                      <a
                        key={idx}
                        href={drop.path}
                        className="block text-gray-600 hover:text-indigo-600"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {drop.title}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            <motion.button
              className="bg-indigo-600 text-white w-full py-3 rounded-full shadow-md mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Estimate
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
