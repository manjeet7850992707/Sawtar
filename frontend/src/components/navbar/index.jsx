import React, { useState, useEffect } from "react";
import { navItems } from "./data";
import { FaHeart, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 ${
        scrolled ? "bg-white/95 shadow-md" : "bg-white/80"
      } backdrop-blur-sm transition-all duration-300`}
    >
      {/* Top Navbar */}
      <div className="flex justify-between items-center px-6 py-2 border-b border-gray-400">
        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-indigo-600 transition">Become a Partner</a>
          <a href="#" className="hover:text-indigo-600 transition">Help Center</a>
        </div>
        <div className="flex gap-6 items-center text-gray-600 text-sm">
          <a href="#" className="hover:text-indigo-600 transition hidden md:inline">Login</a>
          <FaHeart size={18} className="cursor-pointer hover:text-indigo-600" />
          <FaUserCircle size={22} className="cursor-pointer hover:text-indigo-600" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-semibold text-gray-800">
          SAWTAR
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
                onClick={() =>
                  item.dropdown ? setActiveDropdown(prev => (prev === index ? null : index)) : null
                }
              >
                {item.path ? (
                  <a href={item.path}>{item.title}</a>
                ) : (
                  <span>{item.title}</span>
                )}
                {item.dropdown && (
                  <svg
                    className={`w-3 h-3 mt-0.5 transition-transform ${
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
                      onClick={() => setActiveDropdown(null)}
                    >
                      {drop.title}
                    </a>
                  ))}
                </motion.div>
              )}
            </motion.li>
          ))}
        </ul>

        {/* CTA + Mobile Icons */}
        <div className="hidden md:flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D26C44] hover:bg-[#ba5933] text-white text-sm px-6 py-2 rounded-full shadow-md transition-all"
          >
            Get Free Estimate
          </motion.button>
        </div>

        {/* Mobile Icon */}
        <motion.div
          whileTap={{ scale: 0.9 }}
          className="md:hidden cursor-pointer"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <FaTimes size={22} className="text-gray-700" /> : <FaBars size={22} className="text-gray-700" />}
        </motion.div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4"
          >
            {navItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <motion.div
                  className="flex justify-between items-center text-gray-700 hover:text-indigo-600 text-base"
                  whileHover={{ x: 5 }}
                  onClick={() =>
                    item.dropdown
                      ? setActiveDropdown(prev => (prev === index ? null : index))
                      : setIsMobileOpen(false)
                  }
                >
                  {item.path ? (
                    <a href={item.path}>{item.title}</a>
                  ) : (
                    <span>{item.title}</span>
                  )}
                  {item.dropdown && (
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
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
              className="bg-[#D26C44] text-white w-full py-3 rounded-full shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Free Estimate
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
