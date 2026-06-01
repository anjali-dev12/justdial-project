"use client";
import { useState } from "react";
import { FaChevronLeft, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function BusinessWebsitePage() {
  const router = useRouter();

  const [websites, setWebsites] = useState([""]);

  const handleAddWebsite = () => {
    setWebsites([...websites, ""]);
  };

  const handleChange = (value, index) => {
    const updated = [...websites];
    updated[index] = value;
    setWebsites(updated);
  };

  const handleDelete = (index) => {
    const updated = websites.filter((_, i) => i !== index);
    setWebsites(updated);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b p-4 flex items-center justify-between z-50">
        <button onClick={() => router.back()} className="cursor-pointer">
          <FaChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-medium">Business Website</h1>

        <span className="text-sm text-blue-600 font-medium cursor-pointer">
          Skip
        </span>
      </header>

      {/* Content */}
      <div className="flex-1 px-5 py-4">
        {/* Business Info Card */}
        <div className="bg-blue-50 p-4 rounded-md mb-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 relative rounded-md overflow-hidden">
              <img
                src="https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-my1a1p0jx4.jpg"
                alt="Hotel Sai Dhaba"
                
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Hotel Sai Dhaba
              </h2>
              <p className="text-xs text-gray-600">Kalyan West</p>
            </div>
          </div>
        </div>

        {/* Info Notice */}
        <div className="flex items-start gap-3  p-3 rounded-md mb-5 bg-gray-50">
          <div className="text-blue-600 text-lg">ℹ️</div>
          <p className="text-xs text-gray-700">
            Please note that any change in business website will go for audit
            and take up to 2 working days before it goes live.
          </p>
        </div>

        {/* Website Inputs */}
        {websites.map((site, index) => (
          <div key={index} className="mb-4 flex gap-4">
            <input
              type="text"
              value={site}
              onChange={(e) => handleChange(e.target.value, index)}
              placeholder="Enter Business Website"
              className="w-full border border-gray-400 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Show delete icon only if more than 1 input */}
            {index !== 0 && (
              <button
                onClick={() => handleDelete(index)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTrash size={18} />
              </button>
            )}
          </div>
        ))}

        {/* Add Another */}
        <button
          onClick={handleAddWebsite}
          className="text-sm text-blue-600 font-medium mt-2"
        >
          + Add Another Website
        </button>
      </div>

      {/* Bottom Save Button */}
      <div className="fixed bottom-0 left-50 w-238 bg-white p-4 shadow-md">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
