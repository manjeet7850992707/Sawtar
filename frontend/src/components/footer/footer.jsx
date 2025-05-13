import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

// Footer Data
const footerData = {
  company: {
    name: "SAWTAR",
    slogan: "Transforming spaces with stunning interior designs.",
  },
  links: ["About Us", "Careers"],
  legal: ["Privacy Policy", "Terms & Conditions"],
  support: [
    { label: "Raise Issue", path: "/support/raise-issue" },
    { label: "My Issues", path: "/support/my-issues" },
    { label: "Contact Us", path: "/support/contact" },
    { label: "FAQ", path: "/support/faq" },
  ],
  social: [
    { name: "Facebook", icon: <Facebook size={18} />, url: "#" },
    { name: "Instagram", icon: <Instagram size={18} />, url: "#" },
    { name: "Twitter", icon: <Twitter size={18} />, url: "#" },
    { name: "Linkedin", icon: <Linkedin size={18} />, url: "#" },
  ],
};

const Footer = () => {
  const { company, links, legal, social, support } = footerData;

  return (
    <footer className="bg-gray-300 text-gray-700 pt-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-10">
          {/* Logo + Slogan */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">{company.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{company.slogan}</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-1 flex-col md:flex-row gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Company</h4>
              <ul className="text-sm space-y-1">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-black transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Support</h4>
              <ul className="text-sm space-y-1">
                {support.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.path} className="hover:text-black transition">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Follow Us</h4>
              <div className="flex gap-4 mt-1">
                {social.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    aria-label={item.name}
                    className="text-gray-600 hover:text-black transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-500 pt-5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="mb-2 md:mb-0">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-4">
            {legal.map((item, idx) => (
              <a key={idx} href="#" className="hover:text-black transition">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
