"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function CrowdPage() {
  const router = useRouter();

  const crowdOptions = [
    "Family Friendly",
    "Good Place for Kids",
    "Group Friendly",
  ];

  const [selected, setSelected] = useState(crowdOptions);
  const [showExitModal, setShowExitModal] = useState(false);

  const handleCheck = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleSave = () => {
    console.log("Selected Serves:", selected);
  };

  return (
    <div className="min-h-screen mx-50 bg-white flex flex-col">

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
        <button
          onClick={() => setShowExitModal(true)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronLeft size={18} />
        </button>

        <span className="text-[16px] font-medium">Crowd</span>

        <span></span>
      </header>

      <div className="px-5 flex-1 border border-gray-300">

        {/* Info Section */}
        <div className="flex gap-3 bg-gray-50 p-3 rounded mb-5">
          <div className="text-blue-500 text-lg">ℹ️</div>
          <p className="text-[12px] text-[#414141]">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Title */}
        <div className="text-[14px] font-semibold text-[#414141] mt-3">
          All Crowd
        </div>

        {/* Checkbox List */}
        <div className="mt-4 space-y-4">
          {crowdOptions.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer pb-3"
            >
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => handleCheck(item)}
                className="w-4 h-4 accent-blue-600"
              />

              <span className="text-[14px]">{item}</span>
            </label>
          ))}
        </div>

      </div>

      {/* Bottom Save Button */}
      <div className="sticky flex justify-center shadow-md bottom-0 w-full bg-white p-4">
        <button
          onClick={handleSave}
          className="w-100 bg-blue-600 text-white py-3 rounded-md"
        >
          Save
        </button>
      </div>

      {/* Exit Modal */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-50">

          <div className="bg-white w-full max-w-4xl rounded-t-2xl py-6 px-5 min-h-[250px]">

            <div className="text-[18px] font-medium mb-3">
              Discard Changes
            </div>

            <p className="text-[16px] text-gray-400 font-medium mb-6">
              Are you sure you want to exit without saving changes?
            </p>

            <div className="flex gap-4 ">

              <button
                onClick={() => router.back()}
                className="w-full bg-blue-600 text-white px-5 py-2 rounded cursor-pointer"
              >
                Yes
              </button>

              <button
                onClick={() => setShowExitModal(false)}
                className="w-full border border-blue-600 text-blue-600 px-5 py-2 rounded cursor-pointer"
              >
                No
              </button>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}