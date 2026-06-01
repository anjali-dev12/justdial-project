"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft} from "react-icons/fa";

export default function BillingPage() {
    const router = useRouter();
    
  const billingOptions = [
    "Accepts Sodexo Coupons",
    "Offers Military Discount",
  ];

  const [selected, setSelected] = useState([]);

  const handleCheck = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <div className="min-h-screen mx-50 border border-gray-300 bg-white flex flex-col">

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border-b border-gray-300">

        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronLeft size={18} />
        </button>

        <span className="text-[18px] font-medium">Billing</span>
        <span></span>
      </header>

      <div className="px-5 flex-1">

        {/* Info Box */}
        <div className="flex gap-3 bg-gray-50 p-3 rounded mt-4 mb-5">
          <div className="text-blue-500">ℹ️</div>
          <p className="text-[12px] text-[#414141]">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Title */}
        <div className="text-[16px] font-semibold text-[#414141] mt-3">
          All Billing
        </div>

        {/* Checkbox List */}
        <div className="mt-4 space-y-3">
          {billingOptions.map((item, index) => (
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
      <div className="sticky bottom-0 bg-white flex justify-center p-4 shadow-lg">
        <button className="w-100 bg-blue-600 text-white py-3 rounded font-medium">
          Save
        </button>
      </div>
    </div>
  );
}