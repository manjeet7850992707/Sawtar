import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';

const FloatingIcons = () => {
  return (
    <div className="fixed right-0 bottom-20 flex flex-col items-center space-y-4 z-50">
      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/yourwhatsappnumber"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 shadow-lg hover:bg-gray-100 transition rounded-l"
      >
        <div className="bg-green-500 p-3 rounded-full">
          <FaWhatsapp size={24} color="white" />
        </div>
      </a>

      {/* Phone Icon */}
      <a
        href="tel:yourphonenumber"
        className="bg-white p-2 shadow-lg hover:bg-gray-100 transition rounded-l"
      >
        <div className="bg-blue-500 p-3 rounded-full">
          <FaPhone size={24} color="white" />
        </div>
      </a>
    </div>
  );
};

export default FloatingIcons;
