"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export default function Atmosphere() {
  const router = useRouter();

  const [noiseLevel, setNoiseLevel] = useState("");
  const [showAtmosphereList, setShowAtmosphereList] = useState(false);
  const [showNoiseModal, setShowNoiseModal] = useState(false);

  const noiseOptions = ["Quiet", "Moderate", "Loud"];

  const atmosphereList = [
    "Celebrity Frequented",
    "City View",
    "Lakeside View",
    "Night life",
    "Revolving Restaurant",
    "Sea Facing",
    "Themed Restaurant",
    "Fireplace",
  ];

  const handleSave = () => {
    console.log("Noise Level:", noiseLevel);
  };

  return (
    <div className="min-h-screen mx-50 bg-white flex flex-col border border-gray-300">
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border-b border-gray-300">
        <button
          onClick={() => {
            if (showAtmosphereList) {
              setShowAtmosphereList(false);
            } else {
              router.back();
            }
          }}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronLeft size={18} />
        </button>

        <span className="text-[16px] font-medium">Atmosphere</span>

        <span>&nbsp;</span>
      </header>

      {/* Main Container */}
      <div className="px-5 pb-4 flex-1">
        {/* Info Box */}
        <div className="flex gap-3 bg-gray-100 p-3 rounded-md">
          <Image
            src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/infoicn2.svg"
            height={15}
            width={15}
            alt="info"
          />

          <p className="text-xs text-gray-600">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Normal Page */}
        {!showAtmosphereList && (
          <div className="mt-4">
            <div
              onClick={() => setShowAtmosphereList(true)}
              className="flex justify-between items-center py-3 border-b border-gray-300 cursor-pointer"
            >
              <div className="text-[14px] text-[#414141] font-medium">
                All Atmosphere
              </div>

              <FaChevronRight size={20} className="text-gray-400" />
            </div>

            {/* Noise Level */}
            <div className="mt-5">
              <div
                onClick={() => setShowNoiseModal(true)}
                className="border border-gray-300 rounded-md px-3 py-3 flex items-center justify-between cursor-pointer"
              >
                <div>
                 
                  <span className="text-[14px]">
                    {noiseLevel || "Select Noise Level"}
                  </span>
                </div>

                <FaChevronDown size={18} className="text-gray-400" />
              </div>
            </div>
          </div>
        )}

        {/* Atmosphere List */}
        {showAtmosphereList && (
          <div className="mt-5">
            <div
              role="button"
              onClick={() => setShowNoiseModal(true)}
              className="relative border border-gray-300 rounded-md px-3 py-3 flex items-center justify-between cursor-pointer"
            >
              {/* Input */}
              <input
                readOnly
                type="text"
                name="Noise Level"
                aria-label="Noise Level"
                value={noiseLevel}
                className="w-full outline-none text-sm bg-transparent"
                placeholder=""
              />

              {/* Floating Label */}
              <label className="absolute left-3 -top-2 bg-white px-1 text-sm text-gray-600">
                Noise Level
              </label>

              {/* Arrow */}
              <FaChevronDown className="text-gray-400 ml-2" />
            </div>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="flex justify-center shadow-md fixed bottom-0 left-50 w-238 bg-white p-4">
        <button
          onClick={handleSave}
          className="w-100 bg-blue-600 text-white py-3 rounded-md"
        >
          Save
        </button>
      </div>

      {/* Noise Level Modal */}
      {showNoiseModal && (
        <div className="fixed inset-0 bg-black/30 flex items-end justify-center z-50">
          <div className="bg-white w-full max-w-5xl rounded-t-2xl py-6 min-h-[350px]">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-8 border-b border-gray-200 ">
              <span className="text-[16px] font-semibold ml-4 mb-2">
                Select Noise Level
              </span>

              <button
                onClick={() => setShowNoiseModal(false)}
                className="mr-4 mb-2 font-semibold text-gray-400"
              >
                ✕
              </button>
            </div>

            {/* Radio Options */}
            <div className="space-y-10 text-[13px]">
              {noiseOptions.map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer ml-4"
                >
                  <input
                    type="radio"
                    name="noise"
                    value={item}
                    checked={noiseLevel === item}
                    onChange={(e) => {
                      setNoiseLevel(e.target.value);
                      setShowNoiseModal(false);
                    }}
                    className="w-4 h-4"
                  />

                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
