import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaSignInAlt,
  FaHeadset,
  FaUserTie,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosPerson } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import QuoteModal from "../modal/QuoteModal";

const navItems = [
  {
    title: "Interior Design",
    dropdown: [
      { title: "Home Interiors", path: "/interior-services/home",        img: "https://ecomplugin-upload.s3.us-east-1.amazonaws.com/10678b0a-da47-42d9-8712-272553f09f42.webp",
      },
      { title: "Modular Kitchen", path: "/interior-services/kitchen" },
      { title: "Bedroom", path: "/interior-services/bedroom" },
    ],
  },
  {
    title: "E-commerce Interiors",
    dropdown: [
      { title: "Furniture", path: "/ecommerce/furniture" },
      { title: "Decor", path: "/ecommerce/decor" },
      { title: "Lighting", path: "/ecommerce/lighting" },
    ],
  },
  {
    title: "AI Designs",
    dropdown: [
      {
        title: "AI Room Planner",
        path: "/ai/room-planner",
        desc: "Instantly plan your dream room layout with AI.",
        img: "https://ecomplugin-upload.s3.us-east-1.amazonaws.com/10678b0a-da47-42d9-8712-272553f09f42.webp",
      },
      {
        title: "AI Furniture Suggestions",
        path: "/ai/furniture",
        desc: "Get smart furniture recommendations tailored to your style.",
        img: "https://ecomplugin-upload.s3.us-east-1.amazonaws.com/10678b0a-da47-42d9-8712-272553f09f42.webp",
      },
      {
        title: "AI Interior Calculator",
        path: "/ai/interior-calculator",
        desc: "Estimate your interior cost using our AI-powered calculator.",
        img: "https://ecomplugin-upload.s3.us-east-1.amazonaws.com/10678b0a-da47-42d9-8712-272553f09f42.webp",
      },
    ],
  },
  {
    title: "Find Professionals",
    dropdown: [
      { title: "Find Designers", path: "/freelancers/designers" },
      { title: "Post a Project", path: "/freelancers/post-project" },
    ],
  },
];

const supportLinks = [
  { label: "Raise Issue", path: "/support/raise-issue" },
  { label: "My Issues", path: "/support/my-issues" },
  { label: "Contact Us", path: "/support/contact" },
  { label: "FAQ", path: "/support/faq" },
];

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [supportDropdown, setSupportDropdown] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      setIsTop(window.scrollY < 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
        setSupportDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full z-50 sticky top-0">
      {/* Top Navbar - Only visible at the very top */}
      <AnimatePresence>
        {isTop && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: isTop ? 1 : 0, y: isTop ? 0 : -50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:flex justify-between items-center px-4 sm:px-6 py-2 border-b border-gray-300 bg-white"
          >
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-gray-600">
              <div
                className="hidden md:flex items-center gap-1 cursor-pointer hover:text-indigo-600 relative dropdown-container"
                onMouseEnter={() => setSupportDropdown(true)}
                onMouseLeave={() => setSupportDropdown(false)}
              >
                <FaHeadset className="text-sm sm:text-base" />
                <span>Customer Support</span>
                <AnimatePresence>
                  {supportDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-7 left-0 bg-white shadow-lg rounded-md py-2 px-4 w-48 z-100"
                    >
                      {supportLinks.map((link, i) => (
                        <Link
                          key={i}
                          to={link.path}
                          className="block py-1 text-sm text-gray-700 hover:text-indigo-600"
                          onClick={() => setSupportDropdown(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-6 items-center text-gray-600 text-xs sm:text-sm">
              <Link to="/sawtar/login" className="hover:text-indigo-600 hidden md:flex items-center gap-1">
                <IoIosPerson className="text-sm sm:text-base" />
                <span>Sign In</span>
              </Link>
              <Link
                to="/sawtar/pro-login"
                className="border p-1 sm:p-2 px-2 sm:px-3 rounded-md hover:text-indigo-600 hidden md:flex items-center gap-1 sm:gap-2 font-semibold text-xs sm:text-sm"
              >
                <FaUserTie className="text-sm sm:text-base" />
                <span>Sign In as Pro</span>
              </Link>
              <motion.button
              className="hidden md:block bg-[#D26C44] rounded-full text-white px-4 sm:px-6 py-1 sm:py-2  text-xs sm:text-sm font-medium shadow-md"
              onClick={handleOpenModal}

            >
              Get  Quote
            </motion.button>  
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar - Always sticky */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isTop ? 0 : 0,
          opacity: 1
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`w-full ${
          scrolled ? "bg-white/95 shadow-md" : "bg-white"
        } backdrop-blur-sm transition-all duration-300 z-50`}
      >
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="text-xl sm:text-2xl font-semibold text-gray-800"
          >
            <Link to="/">SAWTAR</Link>
          </motion.div>

          <ul className="hidden md:flex gap-4 lg:gap-8 text-md font-medium text-gray-700">
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                className="relative dropdown-container"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div
                  className="flex items-center gap-1 hover:text-indigo-600 transition cursor-pointer py-1"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onClick={() => item.dropdown && setActiveDropdown(activeDropdown === index ? null : index)}
                >
                  <span>{item.title}</span>
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

                <AnimatePresence>
                  {item.dropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-10 left-0 z-50 bg-white shadow-xl rounded-lg py-3 px-4 w-64 sm:w-80 space-y-3 ${
                        item.title === "AI Tools" ? "grid grid-cols-1 gap-3" : ""
                      }`}
                    >
                      {item.dropdown.map((drop, idx) => (
                        <Link
                          key={idx}
                          to={drop.path}
                          onClick={() => setActiveDropdown(null)}
                          className="block hover:bg-gray-100 transition rounded-md p-2"
                        >
                          {drop.img ? (
                            <div className="flex gap-3">
                              <img 
                                src={drop.img} 
                                alt={drop.title} 
                                className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md" 
                              />
                              <div className="flex flex-col">
                                <span className="font-medium text-gray-800 text-sm sm:text-base">{drop.title}</span>
                                <span className="text-xs text-gray-500 mb-1">{drop.desc}</span>
                                <button className="text-xs text-indigo-600 font-semibold mt-auto hover:underline">
                                  Try Now
                                </button>
                              </div>
                            </div>
                          ) : (
                            <span className="text-sm text-gray-700">{drop.title}</span>
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* CTA Button */}
            <motion.button
              className="hidden md:block bg-[#D26C44] text-white px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-md"
              animate={{ scale: [1, 1.05, 1], opacity: [1, 0.9, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              onClick={() => navigate('/sawtar/consultation')}

            >
              Book Free Consultation
            </motion.button>                                                                                  

            {/* Mobile Toggle */}
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="md:hidden cursor-pointer p-1"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? (
                <FaTimes size={20} className="text-gray-700" />
              ) : (
                <FaBars size={20} className="text-gray-700" />
              )}
            </motion.div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg overflow-hidden"
            >
              <div className="px-4 py-3 space-y-3">
                {/* Mobile Customer Support */}
                <div className="dropdown-container">
                  <div
                    className="flex justify-between items-center text-gray-700 hover:text-indigo-600 text-base py-2"
                    onClick={() => setSupportDropdown(!supportDropdown)}
                  >
                    <div className="flex items-center gap-2">
                      <FaHeadset />
                      <span>Customer Support</span>
                    </div>
                    <svg
                      className={`w-4 h-4 transform transition-transform ${
                        supportDropdown ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  {supportDropdown && (
                    <div className="pl-6 space-y-2">
                      {supportLinks.map((link, i) => (
                        <Link
                          key={i}
                          to={link.path}
                          className="block py-1 text-sm text-gray-600 hover:text-indigo-600"
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Auth Links */}
                <div className="flex flex-col gap-2 py-2 border-t border-gray-100">
                  <Link
                    to="/login"
                    className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 py-1"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <IoIosPerson />
                    <span>Sign In</span>
                  </Link>
                  <Link
                    to="/pro-login"
                    className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 py-1"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <FaUserTie />
                    <span>Sign In as Pro</span>
                  </Link>
                </div>

                {/* Mobile CTA Button */}
                <motion.button
                  className="w-full bg-[#D26C44] text-white py-2 rounded-full text-sm font-medium shadow-md mt-2"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMobileOpen(false)}
                  
                >
                  Book Free Consultation
                </motion.button>

                {/* Mobile Nav Items */}
                {navItems.map((item, index) => (
                  <div key={index} className="space-y-1 dropdown-container">
                    <div
                      className="flex justify-between items-center text-gray-700 hover:text-indigo-600 text-base py-2"
                      onClick={() =>
                        item.dropdown
                          ? setActiveDropdown(prev => (prev === index ? null : index))
                          : setIsMobileOpen(false)
                      }
                    >
                      <span>{item.title}</span>
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
                    </div>
                    {item.dropdown && activeDropdown === index && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((drop, idx) => (
                          <Link
                            key={idx}
                            to={drop.path}
                            className="block py-1 px-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            {drop.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {isModalOpen && <QuoteModal onClose={() => setIsModalOpen(false)} />}

    </div>
  );
};

export default Navbar;