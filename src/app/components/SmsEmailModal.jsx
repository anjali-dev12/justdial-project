"use client";

import { useState } from "react";

export default function SmsEmailModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "Harsh",
    mobile: "9911494305",
    email: "Email ID",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl animate-slideUp ">
        
        {/* Header */}
        <div className="flex justify-between items-center px-8 pt-8 mt-4">
          <h2 className="text-xl font-medium  text-gray-900">
            Get information by SMS/Email
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-6">

          {/* Name */}
          <div>
            <label className="block mb-2 text-base">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-2 text-base">
              Mobile No.<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="mobile"
              maxLength="10"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <p className="text-xs text-gray-500 mt-2">
              Only India Numbers SMS to mobile is FREE
            </p>
          </div>

          {/* Email */}
          <div>
            
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 zfocus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-lg"
            />
          </div>

          <p className="text-xs text-gray-500">
            * Indicates mandatory fields
          </p>

          {/* Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300">
            Send
          </button>

        </div>
      </div>
    </div>
  );
}