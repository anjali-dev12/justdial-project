"use client";

import { useState } from "react";
import { FaChevronLeft,FaChevronDown} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function DeliveryDetails() {
  const router = useRouter();
   const [showModal, setShowModal] = useState(false);
   const [formData, setFormData] = useState({
    ownDelivery: "",
    freeDeliveryKm: "",
    expectedTime: "",
    minOrder: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Saved Value:", formData);
  };

  return (
    <div className="min-h-screen px-50 flex flex-col">

      {/* Header */}
       <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <FaChevronLeft size={20} />
        </button>

        <h2 className="font-semibold text-lg">
          Delivery Details

        </h2>

        <span></span>
      </header>

      {/* Content */}
      <div className="flex-1 px-5 py-4 border border-gray-300">

        {/* Info Box */}
        <div className="flex gap-3 bg-blue-50 p-3 rounded mb-6 text-sm text-gray-700">
          <span>ℹ️</span>
          <p>
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Input Field */}
        <div className="space-y-8">

          <div className="relative">
  <input
    type="text"
    name="ownDelivery"
    value={formData.ownDelivery}
    readOnly
    placeholder="Own Delivery Service"
    onClick={() => setShowModal(true)}
    className="w-full border border-gray-300 rounded px-3 py-3 text-[14px] focus:outline-none"
  />

  <FaChevronDown
    className="absolute right-3 top-4 text-gray-500 cursor-pointer"
    onClick={() => setShowModal(true)}
  />
</div>
            {/* Free Delivery */}
          <div>
            <input
              type="number"
              name="freeDeliveryKm"
              value={formData.freeDeliveryKm}
              onChange={handleChange}
              placeholder="Free Delivery Upto (KM)"
               className="w-full border border-gray-300 rounded px-3 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          </div>
             {/* Expected Delivery Time */}
          <div>
            <input
              type="number"
              name="expectedTime"
              value={formData.expectedTime}
              placeholder="Expected Delivery Time (Mins)"
               className="w-full border border-gray-300 rounded px-3 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          </div>

         {/* Minimum Order */}
          <div>
            <input
              type="number"
              name="minOrder"
              value={formData.minOrder}
              onChange={handleChange}
              placeholder="Min Order for Free Delivery (Rs)"
              className="w-full border border-gray-300 rounded px-3 py-3 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          </div>

        </div>

      </div>

      {/* Save Button */}
      <div className="flex justify-center shadow-md fixed bottom-0 left-50 w-242 bg-white p-4">

        <button
          onClick={handleSave}
          className="w-100 bg-blue-600 text-white text-sm font-medium py-3 rounded-md hover:bg-blue-700 transition"
          >
          Save
        </button>

      </div>
  {showModal && (
  <div className=" fixed inset-0 bg-black/40 flex items-end justify-center z-50">

    {/* Bottom Sheet */}
    <div className="bg-white w-full max-w-md rounded-t-2xl p-5">

      {/* Header */}
      <div className="flex justify-between items-center mb-5 border-b border-gray-300">
        <span className="text-[14px] font-medium text-gray-900">
          Select Own Delivery Service
        </span>

        <button
          onClick={() => setShowModal(false)}
          className="text-gray-500 text-lg"
        >
          ✕
        </button>
      </div>

      {/* Options */}
      <div className="space-y-4 text-[13px]">

        {/* Yes Option */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="ownDelivery"
            value="Yes"
            checked={formData.ownDelivery === "Yes"}
            onChange={(e) =>
              setFormData({ ...formData, ownDelivery: e.target.value })
            }
            className="w-4 h-4 accent-blue-600"
          />
          <span>Yes</span>
        </label>

        {/* No Option */}
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="ownDelivery"
            value="No"
            checked={formData.ownDelivery === "No"}
            onChange={(e) =>
              setFormData({ ...formData, ownDelivery: e.target.value })
            }
            className="w-4 h-4 accent-blue-600"
          />
          <span>No</span>
        </label>

      </div>

    </div>
  </div>
)}
    </div>
    
  );
}