import React, { useState } from "react";
import { FaShieldAlt, FaHeadset, FaCheckCircle, FaTimes } from "react-icons/fa";

const FooterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-center py-16 px-4 text-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let's Power Your Communication
      </h2>
      <p className="mb-8 text-lg">
        Join 5000+ businesses who trust Sanya Code Genies for their SMS needs.
        Get started today with a free demo.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-gray-100 transition duration-300 w-full md:w-auto"
        >
          Book Free Demo
        </button>
        <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-green-600 transition duration-300 w-full md:w-auto">
          WhatsApp Our Expert Now
        </button>
      </div>

      {/* Features */}
      <div className="flex flex-col md:flex-row justify-center gap-6 text-sm mt-6">
        <div className="flex items-center gap-2">
          <FaShieldAlt /> DLT Approved
        </div>
        <div className="flex items-center gap-2">
          <FaHeadset /> 24×7 Support
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle /> Free Setup
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4">
          <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-xl shadow-2xl w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              <FaTimes size={20} />
            </button>

            <h3 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
              Book a Free Demo
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-black placeholder-gray-500 focus:ring-2 focus:ring-purple-400 outline-none"
              />
              <select className="w-full border border-gray-300 rounded-md px-4 py-2 text-black focus:ring-2 focus:ring-purple-400 outline-none">
                <option value="">Select Service</option>
                <option value="promotional">Promotional SMS</option>
                <option value="transactional">Transactional SMS</option>
                <option value="whatsapp">WhatsApp Business API</option>
                <option value="bulk">Bulk SMS</option>
              </select>
              <button
                type="submit"
                className="w-full bg-indigo-700 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterSection;
