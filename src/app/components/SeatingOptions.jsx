"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function SeatingOptions() {
    const router = useRouter();
    
  const [options, setOptions] = useState({
    nonAcIndoor: true,
    acSeating: false,
    foodCourt: false,
    indoor: false,
    noSeating: false,
    outdoor: false,
    poolside: false,
    rooftop: false,
    shared: false,
  });

  const handleChange = (key) => {
    setOptions({ ...options, [key]: !options[key] });
  };

  const handleSave = () => {
    console.log("Selected Seating Options:", options);
  };


  const seatingList = [
    { key: "nonAcIndoor", label: "Non AC Indoor Seating" },
    { key: "acSeating", label: "AC Seating" },
    { key: "foodCourt", label: "Food Court Seating" },
    { key: "indoor", label: "Indoor Seating" },
    { key: "noSeating", label: "No Seating" },
    { key: "outdoor", label: "Outdoor Seating" },
    { key: "poolside", label: "Poolside Seating" },
    { key: "rooftop", label: "Rooftop Seating" },
    { key: "shared", label: "Shared Seating Area" },
  ];

  return (
    <div className="min-h-screen px-50">
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <FaChevronLeft size={18} />
        </button>
        <span className="text-lg font-medium">Seating Options</span>
        <span></span>
      </header>

      <div className="px-5 py-4 border border-gray-300">
        {/* Info Box */}
        <div className="flex gap-2 bg-blue-50 p-3 rounded mb-5">
          <span>ℹ️</span>
          <p className="text-xs text-gray-700">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-800 mb-4">
          All Seating Options
        </h2>

        {/* Checkbox List */}
        <div className="space-y-3 ">
          {seatingList.map((item) => (
            <label
              key={item.key}
              className="flex items-center gap-3 p-3 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                checked={options[item.key]}
                onChange={() => handleChange(item.key)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">{item.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Bottom Fixed Button */}
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
