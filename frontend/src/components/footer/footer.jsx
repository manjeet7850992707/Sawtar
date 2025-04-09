import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

// Footer data (you can move this to a separate file if you like)
const footerData = {
  company: {
    name: "SAWTAR",
    slogan: "Helping you find your perfect property.",
  },
  links: ["About Us", "Contact", "Careers", "FAQs"],
  legal: ["Privacy Policy", "Terms & Conditions"],
  social: [
    { name: "Facebook", icon: <Facebook size={18} />, url: "#" },
    { name: "Instagram", icon: <Instagram size={18} />, url: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, url: "#" },
    { name: "Linkedin", icon: <Linkedin size={18} />, url: "#" },
  ],
};

const Footer = () => {
  const { company, links, legal, social } = footerData;

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Logo + Slogan */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            {company.name}
          </h2>
          <p className="text-sm mt-2">{company.slogan}</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 md:gap-12 text-sm">
          {links.map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="my-6 border-t border-gray-700"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-4 mt-3 md:mt-0">
          {/* Legal Links */}
          <div className="flex gap-4 text-xs text-gray-400">
            {legal.map((item, idx) => (
              <a key={idx} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 ml-4">
            {social.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                aria-label={item.name}
                className="hover:text-white transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
