"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronDown } from "react-icons/fa";

export default function DressCodePage() {
  const router = useRouter();

  const [attire, setAttire] = useState("");
  const [showAttireModal, setShowAttireModal] = useState(false);

  const attireOptions = [
    "Casual",
    "Formal",
    "No Slippers",
    "Semi-Formal",
  ];

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

        <span className="text-[16px] font-medium">Dress Code</span>

        <span>&nbsp;</span>
      </header>

      {/* Content */}
      <div className="px-5 py-4 flex-1">

        {/* Info Section */}
        <div className="flex gap-3 bg-gray-100 p-3 rounded mb-5">
          <div className="text-blue-500 text-lg">ℹ️</div>

          <p className="text-[12px] text-[#414141]">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Attire Input */}
        <div
          onClick={() => setShowAttireModal(true)}
          className="border border-gray-300 rounded-md px-3 py-3 flex items-center justify-between cursor-pointer"
        >
          <div className="flex flex-col">
            <label className="text-[12px] text-gray-500">
              Attire
            </label>

            <span className="text-[14px]">
              {attire || "Select Attire"}
            </span>
          </div>

          <FaChevronDown size={18} className="text-gray-400" />
        </div>

      </div>

      {/* Bottom Save Button */}
      <div className="sticky bottom-0 bg-white shadow-md p-4 flex justify-center">
        <button className="w-100 bg-blue-600 text-white py-3 rounded-md font-medium text-[14px]">
          Save
        </button>
      </div>

      {/* Attire Modal */}
      {showAttireModal && (
        <div className="fixed inset-0 bg-black/30 flex items-end justify-center z-50">

          <div className="bg-white w-full max-w-4xl min-h-[300px]  rounded-t-2xl p-5 animate-[slideUp_.3s_ease-out]">

            {/* Modal Header */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-[15px] font-semibold">
                Select Attire
              </span>

              <button
                onClick={() => setShowAttireModal(false)}
                className="text-gray-500 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Radio Options */}
            <div className="space-y-10">

              {attireOptions.map((item, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="attire"
                    value={item}
                    checked={attire === item}
                    onChange={(e) => {
                      setAttire(e.target.value);
                      setShowAttireModal(false);
                    }}
                    className="w-4 h-4 accent-blue-600"
                  />

                  <span className="text-[14px]">{item}</span>
                </label>
              ))}

            </div>

          </div>

        </div>
      )}
    </div>
  );
}