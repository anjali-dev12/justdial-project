"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const gamingActivitiesList = [
  "Billiards/Snooker Table",
  "Bowling Alley",
  "Gaming Arcade",
  "Virtual Reality",
  "Trampoline",
  "Go Karting",
  "Laser Wars",
  "Paintball",
];

export default function GamingActivitiesPage() {
  const router = useRouter();

  const [selected, setSelected] = useState([]);

  const handleCheck = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleSave = () => {
    console.log("Selected Gaming Activities:", selected);
  };

  return (
    <div className="bg-white px-50">

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronLeft size={18} />
        </button>

        <h1 className="text-lg font-semibold">Gaming Activities</h1>

        <span></span>
      </header>

      <div className="px-5 border border-gray-300">

        {/* Info Box */}
        <div className="flex gap-3 bg-gray-100 p-3 rounded-md mt-4">
          <span>ℹ️</span>

          <p className="text-xs text-gray-600">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Title */}
        <h2 className="mt-5 font-semibold">All Gaming Activities</h2>

        {/* Checkbox List */}
        <div className="mt-4 space-y-3">

          {gamingActivitiesList.map((item) => (

            <label
              key={item}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => handleCheck(item)}
                className="w-4 h-4"
              />

              <span>{item}</span>
            </label>

          ))}

        </div>

      </div>

      {/* Bottom Button */}
      <div className="flex justify-center shadow-md fixed bottom-0 left-50 w-238 bg-white p-4">

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