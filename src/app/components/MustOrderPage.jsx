"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function MustOrderPage() {
  const router = useRouter();
  const [mustOrder, setMustOrder] = useState("Chicken Angara Kabeb");
  const handleSave = () => {
    console.log("Saved Value:", AverageCost);
  };

  return (
    <div className="min-h-screen px-50  flex flex-col">
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <FaChevronLeft size={20} />
        </button>

        <span className="text-[16px] font-medium">Must Order</span>

        <span className="text-[13px] text-gray-500">&nbsp;</span>
      </header>

      {/* Main Content */}
      <div className="flex-1 px-5 pb-4 border border-gray-300">
        {/* Info Box */}
        <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-md mb-5">
          <span className="text-blue-500">ℹ️</span>
          <p className="text-[12px] text-gray-700">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Input */}
        <div className="mt-4">
          <label className="block text-sm mb-1">Must Order</label>

          <input
            type="text"
            value={mustOrder}
            onChange={(e) => setMustOrder(e.target.value)}
            className="w-full border border-gray-300 rounded-sm px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Bottom Fixed Button */}
      <div className="flex justify-center shadow-md fixed bottom-0 left-50 w-242 bg-white p-4">
        <button
          onClick={handleSave}
          className="w-100 bg-blue-600 text-white text-sm font-medium py-3 rounded-md hover:bg-blue-700 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
}
