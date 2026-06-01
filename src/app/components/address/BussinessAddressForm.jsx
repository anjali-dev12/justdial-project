"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
export default function BusinessAddressForm() {
  const [area, setArea] = useState("Kalyan West");
  const [pincode, setPincode] = useState("421301");
  const [plot, setPlot] = useState("Survey No 47");
  const [building, setBuilding] = useState("Sai Dhaba");
  const [landmark, setLandmark] = useState("Adharwadi Chowk");
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    router.push("/jd-bussiness/edit-profile");
  };



  return (
    <div className="w-full  bg-white shadow-lg rounded-xl p-6 mt-6">
      
      {/* Header */}
    <div className="sticky top-0 bg-white border-b p-4 flex items-center  gap-90 ">
                <button onClick={handleBack} className="cursor-pointer">
                  <FaChevronLeft size={20} />
                </button>
        
                <h1 className="font-semibold text-lg">Business Name</h1>
        
              </div>
        
      {/* Info Box */}
      <div className="bg-blue-50 text-blue-800 text-sm p-3 mt-3 rounded-md mb-5">
        Provide the address that customers will use to find this business.
      </div>

      {/* Area */}
      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">Area</label>
        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Pincode */}
      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">Pincode</label>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Plot */}
      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">
          Plot No. / Bldg No. / Wing / Shop No. / Floor
        </label>
        <input
          type="text"
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Building */}
      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">
          Building Name / Market / Colony / Society
        </label>
        <input
          type="text"
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Street */}
      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">
          Street / Road Name
        </label>
        <input
          type="text"
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Landmark */}
      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">
          Landmark
        </label>
        <input
          type="text"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* City + State */}
      <div className="flex gap-4 mb-6">
        <div className="w-1/2">
          <p className="text-xs text-gray-500">City</p>
          <p className="text-sm font-medium">Kalyan</p>
        </div>
        <div className="w-1/2">
          <p className="text-xs text-gray-500">State</p>
          <p className="text-sm font-medium">Maharashtra</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-50 w-238 bg-white p-4 shadow-md">
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