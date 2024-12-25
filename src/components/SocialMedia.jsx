import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import "../../src/custom.css"

const SocialMedia = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-row space-x-4 z-50">
      {/* Call Button */}
      <a
        href="tel:+916203176139"
        className="bubble bg-blue-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center animate-zoom"
        title="Call"
      >
        <FaPhoneAlt size={24} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916203176139"
        target="_blank"
        rel="noopener noreferrer"
        className="bubble bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center animate-zoom"
        title="WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default SocialMedia;
