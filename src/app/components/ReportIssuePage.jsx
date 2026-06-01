"use client";
import { FaChevronLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ReportIssuePage() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-white flex flex-col pb-24">
      
      {/* Header */}
     <div className="sticky top-0 bg-white border-b border-gray-300 p-4 flex items-center gap-90 z-50">
          <button onClick={() => router.back()} className="cursor-pointer">
            <FaChevronLeft size={18} />
          </button>
          <div className="flex flex-col items-center">
          <h1 className="text-base font-semibold">
            Hotel Sai Dhaba
          </h1>

          <h3 className="text-sm">Kalyan West</h3>
          </div>
        </div>

      {/* Content */}
      <div className="flex-1 px-5 py-4">
        
        {/* Title */}
        <h2 className="text-sm font-semibold text-gray-900 mb-5">
          Report Fraud, Offensive or Harmful Issue
        </h2>

        {/* Info Box */}
        <div className="flex items-start gap-3 bg-gray-50 p-3 rounded-md mb-5">
          <div className="text-blue-600 text-lg">ℹ️</div>
          <p className="text-xs text-gray-700">
            Please share detailed case information about the business’s fraud 
            or offensive behavior or doing harm to an organization, or a person 
            or a group of people.
          </p>
        </div>

        {/* Textarea */}
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Please type about fraud, offensive or Harmful issue"
            className="w-full min-h-[120px] border border-gray-400 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>

      </div>

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
  );
}