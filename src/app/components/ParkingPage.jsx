"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function ParkingPage() {
  const router = useRouter();

  const [selectedParking, setSelectedParking] = useState(["Parking Available"]);

  const parkingOptions = [
    "Parking Available",
    "No Parking",
    "Valet Parking Service",
  ];

  const handleCheckbox = (option) => {
    if (selectedParking.includes(option)) {
      setSelectedParking(selectedParking.filter((item) => item !== option));
    } else {
      setSelectedParking([...selectedParking, option]);
    }
  };

  const handleSave = () => {
    console.log("Selected Parking:", selectedParking);
  };

  return (
    <div className="min-h-screen px-50 flex flex-col bg-white">

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border border-gray-300">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronLeft size={18} />
        </button>

        <span className="text-[16px] font-medium">Parking</span>

        <span className="w-5"></span>
      </header>

      {/* Content */}
      <div className="flex-1 px-5 border border-gray-300">

        {/* Info Box */}
        <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-md mt-4 mb-5">
          <span>ℹ️</span>
          <p className="text-[12px] text-gray-700">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Heading */}
        <h3 className="text-sm font-semibold text-gray-700 mb-4">
          All Parking
        </h3>

        {/* Checkbox List */}
        <div className="space-y-3">
          {parkingOptions.map((option, index) => (
            <label
              key={index}
              className="flex items-center gap-3 p-3  cursor-pointer hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={selectedParking.includes(option)}
                onChange={() => handleCheckbox(option)}
                className="w-4 h-4 accent-blue-600"
              />

              <span className="text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Bottom Save Button */}
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