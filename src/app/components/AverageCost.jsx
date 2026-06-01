"use client";

import { useState } from "react";
import { FaChevronLeft} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AverageCost() {
  const router = useRouter();
  const [priceForTwo, setPriceForTwo] = useState("550");
  const [costForOne, setCostForOne] = useState("");
  const [pintPrice, setPintPrice] = useState("");
 
   const handleSave = () => {
    console.log("Saved Value:", AverageCost);
  };

  return (
    <div className="min-h-screen px-50 bg-white flex flex-col">
      
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
              <button
                onClick={() => router.back()}
                className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                <FaChevronLeft size={20} />
              </button>
      
        <span className="text-[16px] font-medium">
          Average Cost
        </span>

        <span className="text-[13px] text-gray-500">
          &nbsp;
        </span>
      </header>

      {/* Container */}
      <div className="flex-1 px-5 pb-4 border border-gray-300">

        {/* Info Box */}
        <div className="flex items-start gap-2 bg-blue-50 p-3 rounded-md mb-5">
          <span>ℹ️</span>
          <p className="text-[12px] text-gray-700">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Inputs */}
        <div className="space-y-5">

          {/* Price for Two */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Price For Two</label>
            <input
              type="tel"
              value={priceForTwo}
              onChange={(e) => setPriceForTwo(e.target.value)}
              className="border border-gray-300 rounded-sm px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Average Cost for One */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Average Cost For One</label>
            <input
              type="tel"
              value={costForOne}
              onChange={(e) => setCostForOne(e.target.value)}
              className="border border-gray-300 rounded-sm px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Pint Price */}
          <div className="flex flex-col">
            <label className="text-sm mb-1">Pint Price</label>
            <input
              type="tel"
              value={pintPrice}
              onChange={(e) => setPintPrice(e.target.value)}
              className="border border-gray-300 rounded-sm px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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