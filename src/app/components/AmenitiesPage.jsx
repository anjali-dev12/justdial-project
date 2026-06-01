"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaSearch } from "react-icons/fa";

export default function AmenitiesPage() {
  const router = useRouter();

  const amenitiesList = [
    "Drive-Through",
    "WiFi",
    "Work Friendly Environment",
    "Banquet Hall",
    "Couples Only",
    "Differently-Abled Friendly",
    "Drive in",
  ];

  const [selectedAmenities, setSelectedAmenities] = useState([
    "Drive-Through",
    "WiFi",
    "Work Friendly Environment",
  ]);

  const [search, setSearch] = useState("");

  const handleCheckbox = (item) => {
    if (selectedAmenities.includes(item)) {
      setSelectedAmenities(
        selectedAmenities.filter((amenity) => amenity !== item)
      );
    } else {
      setSelectedAmenities([...selectedAmenities, item]);
    }
  };

  const handleSave = () => {
    console.log("Selected Amenities:", selectedAmenities);
  };

  const filteredAmenities = amenitiesList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen px-50 flex flex-col bg-white">

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronLeft size={18} />
        </button>

        <span className="text-[16px] font-medium">Amenities</span>

        <span className="w-5"></span>
      </header>

      {/* Content */}
      <div className=" px-5 pb-24 border border-gray-300">

        {/* Info Box */}
        <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-md mt-4 mb-5">
          <span>ℹ️</span>
          <p className="text-[12px] text-gray-700">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Search Box */}
        <div className="flex items-center border border-gray-300 rounded-sm px-3 py-2 mb-5">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Heading */}
        <h3 className="text-[14px] font-medium text-gray-800 mb-4">
          All Amenities
        </h3>

        {/* Amenities List */}
        <div className="space-y-6">
          {filteredAmenities.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedAmenities.includes(item)}
                onChange={() => handleCheckbox(item)}
                className="w-4 h-4 accent-blue-600"
              />

              <span className="text-sm text-gray-700">{item}</span>
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