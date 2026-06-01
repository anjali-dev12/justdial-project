"use client";

import { useState } from "react";
import { FaChevronLeft} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function KnownFor() {
  const router = useRouter();

  const [knownFor, setKnownFor] = useState(
    "Budget Friendly Fine Dining Experience"
  );

  const handleSave = () => {
    console.log("Saved Value:", knownFor);
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
          Known for
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
        <div className="space-y-2">

          <label className="text-sm font-medium text-gray-700">
            Known for
          </label>

          <input
            type="text"
            value={knownFor}
            onChange={(e) => setKnownFor(e.target.value)}
            placeholder="Known for"
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

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

    </div>
  );
}