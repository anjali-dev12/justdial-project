"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function YearOfEstablishment() {
  const router = useRouter();

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("2009");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full  bg-white relative pb-24">

        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between z-50">
          <button onClick={() => router.back()}>
            <FaChevronLeft size={18} />
          </button>

          <h1 className="text-base font-semibold">
            Year of Establishment
          </h1>

          <span className="text-sm text-gray-400"></span>
        </div>

        {/* Content */}
        <div className="px-5 py-6">

          {/* Info Box */}
          <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-md mb-6">
            <div className="text-blue-600 text-lg">ℹ</div>
            <p className="text-xs text-gray-700">
              Please note that any changes to the details below can go for
              verification and take upto 2 working days to go live.
            </p>
          </div>

          {/* Month & Year Row */}
          <div className="grid grid-cols-2 gap-4">

            {/* Month Select */}
            <div className="relative">
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="peer w-full border rounded-lg px-3 pt-5 pb-2 text-sm bg-transparent outline-none focus:border-blue-600"
              >
                <option value="">Select Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

              <label className="absolute left-3 top-2 text-xs text-gray-500">
                Month
              </label>
            </div>

            {/* Year Select */}
            <div className="relative">
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="peer w-full border rounded-lg px-3 pt-5 pb-2 text-sm bg-transparent outline-none focus:border-blue-600"
              >
                {Array.from({ length: 50 }, (_, i) => {
                  const currentYear = new Date().getFullYear();
                  return (
                    <option key={i}>
                      {currentYear - i}
                    </option>
                  );
                })}
              </select>

              <label className="absolute left-3 top-2 text-xs text-gray-500">
                Year
              </label>
            </div>

          </div>
        </div>

        {/* Bottom Save Button */}
         <div className="fixed bottom-0 left-50 w-238 bg-white p-4 shadow-md">
        <div className="max-w-md mx-auto">
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
         
        </div>

      </div>
    </div>
  );
}