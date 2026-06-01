"use client";

import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BusinessTimingsForm() {
  const [selectedDays, setSelectedDays] = useState([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ]);
  const router = useRouter();
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  const toggleAll = () => {
    if (selectedDays.length === days.length) {
      setSelectedDays([]);
    } else {
      setSelectedDays(days);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    router.push("/jd-bussiness/edit-profile");
  };
 
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <div className="w-full  bg-white shadow-md rounded-xl overflow-hidden">

        {/* Header */}
          <div className="sticky top-0 bg-white border-b p-4 flex items-center  gap-90 ">
                         <button onClick={handleBack} className="cursor-pointer">
                           <FaChevronLeft size={20} />
                         </button>
                 
                         <h1 className="font-semibold text-lg">Business Name</h1>
                 
                       </div>
            
        {/* Business Info */}
        <div className="bg-blue-50 px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded overflow-hidden">
            <img
              src="https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-my1a1p0jx4.jpg"
              alt="Hotel Sai Dhaba"
              width={50}
              height={50}
              className=" rounded"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">
              Hotel Sai Dhaba
            </p>
            <p className="text-xs text-gray-500">
              Kalyan West
            </p>
          </div>
        </div>

        {/* Info Message */}
        <div className="px-4 py-3 bg-gray-100 mt-5 mx-4 rounded-lg text-xs text-gray-600">
          Please note that any change in business timings will go for audit
          and take up to 2 working days before it goes live.
        </div>

        {/* Days Selection */}
        <div className="px-4">
          <h2 className="text-lg ml-2 font-medium my-4">
            Select Days of the Week
          </h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                className={`px-2 py-2 text-md rounded-full border ${
                  selectedDays.includes(day)
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Select All */}
          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              checked={selectedDays.length === days.length}
              onChange={toggleAll}
            />
            <span className="text-sm text-blue-600 font-medium">
              Select All Days
            </span>
          </div>

          {/* Time Inputs */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-xs text-gray-500">
                Opens at
              </label>
              <input
                type="time"
                defaultValue="11:30"
                className="w-full border rounded px-2 py-1 text-sm"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500">
                Closes at
              </label>
              <input
                type="time"
                defaultValue="00:00"
                className="w-full border rounded px-2 py-1 text-sm"
              />
            </div>
          </div>

          <button className="text-blue-600 text-sm font-medium mb-6">
            + Add Another Time Slot
          </button>
        </div>

        {/* Save Button */}
         <div className="fixed bottom-0 left-50 w-238 bg-white p-4 shadow-md">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
          >
            Save and Continue
          </button>
        </div>
         
        </div>
      </div>
    </div>
  );
}