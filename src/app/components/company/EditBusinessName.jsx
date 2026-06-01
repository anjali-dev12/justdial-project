"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function EditBusinessName() {
  const router = useRouter();

  const [businessName, setBusinessName] = useState("Hotel Sai Dhaba");
  const [showModal, setShowModal] = useState(false);

  const handleBack = () => {
    router.back();
  };

const handleSave = () => {
    router.push("/jd-bussiness/edit-profile");
  };


  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header */}
      <div className="sticky top-0 bg-white border-b p-4 flex items-center  gap-90 ">
            <button onClick={handleBack} className="cursor-pointer">
              <FaChevronLeft size={20} />
            </button>
    
            <h1 className="font-semibold text-lg">Business Name</h1>
    
          </div>
    
      {/* Content */}
      <div className="flex-1 px-5 py-6">

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg mb-6 flex gap-3">
          <div className="text-blue-600 text-lg">ℹ️</div>
          <p className="text-xs text-gray-600">
            Change in business name will go for audit and take upto 2 working days.
          </p>
        </div>

        {/* Input */}
        <div className="relative mb-6">
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Bottom Button */}
      
            <div className="fixed bottom-0 w-239 bg-white p-4 shadow-md">
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
  );
}