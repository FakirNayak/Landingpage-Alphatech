import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const HeroContact = () => {
  return (
    <div className="w-full bg-gradient-to-r from-teal-500 via-emerald-600 to-indigo-700 text-white py-16 px-6 md:px-20 lg:px-32 flex flex-col lg:flex-row items-start lg:items-center justify-between mt-10 relative gap-12">
      {/* Left side text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full lg:w-[45%]"
      >
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Scale Fast with the <br />
          <span className="text-yellow-400">Bulk SMS Platform</span> Businesses
          Trust
        </h2>
        <p className="mt-6 text-lg">
          Send 10,000+ Messages in Seconds • DLT-Approved • 24×7 Local Support
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          {/* <button className="bg-white text-green-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 shadow-md">
            Get Free Demo
          </button> */}
          <button className="bg-black px-6 py-3 rounded font-semibold hover:bg-gray-900 shadow-md">
            Talk to Expert Now
          </button>
        </div>
        <div className="mt-8 text-sm">
          ✅ 5000+ Happy Clients • ✅ 99.9% Uptime • ✅ 24×7 Support
        </div>
      </motion.div>

      {/* Right side form */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full lg:w-[50%] bg-white text-gray-900 rounded-xl shadow-xl p-8 md:p-10 relative"
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Get Started Today
        </h3>
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+91 Enter your phone number"
              className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* SMS Volume */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              SMS Volume Requirement
            </label>
            <select className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none">
              <option>You are Looking for ?</option>
              <option>Bulk SMS Transcitional </option>
              <option>Promotional SMS</option>
              <option>DLT Registration</option>
              <option>Website Pages</option>
              <option>WhatApp (API and Bulk )</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">
              Message (Optional)
            </label>
            <textarea
              placeholder="Write your message..."
              className="w-full border rounded px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded font-semibold hover:bg-gray-900 transition duration-300 shadow-md"
          >
            Get Custom Pricing
          </button>
        </form>

        {/* WhatsApp Floating Icon */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 flex items-center justify-center"
        >
          <FaWhatsapp size={28} />
        </a>
      </motion.div>
    </div>
  );
};

export default HeroContact;
