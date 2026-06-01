"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function AlcoholPage() {

  const router = useRouter();

  const [activeSection, setActiveSection] = useState(null);
  const [selectedAlcohol, setSelectedAlcohol] = useState([]);
  const [servesAlcohol, setServesAlcohol] = useState("");

  const alcoholTypes = [
    "Beer & Wine Only",
    "Beer Only",
    "Serves Beer",
    "Serves Craft Beer",
    "Serves Wine",
  ];

  const handleCheckbox = (item) => {
    if (selectedAlcohol.includes(item)) {
      setSelectedAlcohol(selectedAlcohol.filter((i) => i !== item));
    } else {
      setSelectedAlcohol([...selectedAlcohol, item]);
    }
  };

  const handleSave = () => {
    console.log("Alcohol Types:", selectedAlcohol);
    console.log("Serves Alcohol:", servesAlcohol);
  };

  const handleBack = () => {
  if (activeSection !== null) {
    setActiveSection(null); // section close karke normal page
  } else {
    router.back(); // previous route
  }
};

  return (
    <div className="min-h-screen px-50 flex flex-col">

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
        <button  onClick={handleBack} 
        className="cursor-pointer"
        >
          <FaChevronLeft size={20} />
        </button>

        <span className="text-[16px] font-medium">Alcohol</span>

        <span></span>
      </header>

      <div className="flex-1 px-5 pb-4 border border-gray-300">

        {/* Info */}
        <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-md mb-5">
          <span>ℹ️</span>
          <p className="text-[12px] text-gray-700">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Initial List */}
        {activeSection === null && (
          <div className="space-y-4">

            <div
              onClick={() => setActiveSection("alcohol")}
              className="flex justify-between p-4 border-b border-gray-300 cursor-pointer"
            >
              <span>All Alcohol</span>
              <FaChevronRight />
            </div>

            <div
              onClick={() => setActiveSection("serves")}
              className="flex justify-between p-4 border-b border-gray-300 cursor-pointer"
            >
              <span>All Serves Alcohol</span>
              <FaChevronRight />
            </div>

          </div>
        )}

        {/* All Alcohol Section */}
        {activeSection === "alcohol" && (
          <div>

            <h3 className="font-semibold mb-4">All Alcohol</h3>

            <div className="space-y-3">
              {alcoholTypes.map((item, index) => (
                <label key={index} className="flex items-center gap-3 p-3">
                  <input
                    type="checkbox"
                    checked={selectedAlcohol.includes(item)}
                    onChange={() => handleCheckbox(item)}
                    className="accent-blue-600"
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>

          </div>
        )}

        {/* All Serves Alcohol Section */}
        {activeSection === "serves" && (
          <div>

            <h3 className="font-semibold mb-4">Serves Alcohol</h3>

            <div className="space-y-3">

              <label className="flex items-center gap-3 p-3">
                <input
                  type="radio"
                  name="servesAlcohol"
                  value="true"
                  onChange={(e) => setServesAlcohol(e.target.value)}
                />
                <span>Serves Alcohol</span>
              </label>

              <label className="flex items-center gap-3  p-3">
                <input
                  type="radio"
                  name="servesAlcohol"
                  value="false"
                  onChange={(e) => setServesAlcohol(e.target.value)}
                />
                <span>Does Not Serve Alcohol</span>
              </label>

            </div>

          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="flex justify-center shadow-md fixed bottom-0 left-50 w-242 bg-white p-4">
        <button
          onClick={handleSave}
          className="w-100 bg-blue-600 text-white py-3 rounded-md"
        >
          Save
        </button>
      </div>

    </div>
  );
}