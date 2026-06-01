"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image";

export default function ComplimentaryPage() {
  const router = useRouter();

  const options = [
    "Alcoholic Drink",
    "Non-Alcoholic Drink",
  ];

  const [selected, setSelected] = useState([]);

  const handleCheck = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const handleSave = () => {
    console.log("Selected Complimentary:", selected);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col mx-50 border border-gray-200">

      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <FaChevronLeft size={18} />
        </button>

        <span className="text-[16px] font-medium">Complimentary</span>

        <span>&nbsp;</span>
      </header>

      {/* Content */}
      <div className="px-5 py-4 flex-1">

        {/* Info Section */}
        <div className="flex gap-3 bg-gray-100 p-3 rounded mb-5">
          <div className="text-blue-500 text-lg">
           <Image 
           src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/infoicn2.svg"
           height={15}
           width={15}
           />
          </div>

          <p className="text-[12px] text-[#414141]">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Title */}
        <div className="text-[14px] font-semibold text-[#414141] mt-3">
          All Complimentary
        </div>

        {/* Checkbox List */}
        <div className="mt-4 space-y-4">

          {options.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer"
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
      <div className="sticky bottom-0 bg-white shadow-md p-4 flex justify-center">

        <button
          onClick={handleSave}
          className="w-100 bg-blue-600 text-white py-3 rounded-md font-medium text-[14px]"
        >
          Save
        </button>

      </div>

    </div>
  );
}