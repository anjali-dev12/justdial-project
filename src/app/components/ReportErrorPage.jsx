"use client";
import { useState } from "react";
import { FaChevronLeft} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ReportErrorPage() {
  const [selected, setSelected] = useState({});
    const [comments, setComments] = useState({});
   const router = useRouter();
  
   const options = [
    {
      id: "contact",
      label: "Invalid Contact Details",
      description:
        "You're suggesting that Mobile/Landline/Toll Free or Email of this business is invalid",
      placeholder: "Additional Comments (Optional)",
    },
    {
      id: "address",
      label: "Inaccurate Address",
      description:
        "You're suggesting that address of this business is inaccurate",
      placeholder: "Additional Comments (Optional)",
    },
    {
      id: "closed",
      label: "Permanently Closed / Doesn’t Exist",
      description:
        "You're suggesting that this business is permanently closed or doesn't exist here",
      placeholder: "Additional Comments (Optional)",
    },
    {
      id: "other",
      label: "Other Issue",
      description: "Please specify in case of any other issue",
      placeholder: "Comments",
    },
  ];

   const handleCheck = (id) => {
    setSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCommentChange = (id, value) => {
    setComments((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleBack = () => {
  window.close();
};

  const handleSubmit = () => {
    const payload = options
      .filter((opt) => selected[opt.id])
      .map((opt) => ({
        issue: opt.label,
        comment: comments[opt.id] || "",
      }));

    console.log("Submitted Data:", payload);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col ">

      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-300 p-4 flex items-center gap-90 z-50">
        <button 
         onClick={handleBack} 
        className="flex items-center cursor-pointer gap-2 text-gray-600"    
         >
          <FaChevronLeft size={20} />
        </button>

        <div className="text-center">
          <div className="text-lg">Hotel Sai Dhaba</div>
          <div className="text-xs text-gray-500">Kalyan West</div>
        </div>
      </header>

           <div className="flex-1 px-5 py-6 space-y-6">
        <h2 className="text-sm font-semibold text-gray-900">
          Report an Error
        </h2>

        {options.map((option) => (
          <div
            key={option.id}
            className="rounded-lg p-4 transition hover:bg-gray-50"
          >
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selected[option.id] || false}
                onChange={() => handleCheck(option.id)}
                className="mt-1 w-4 h-4 accent-blue-600"
              />

              <div className="flex-1">
                <div className="text-sm font-medium text-gray-800">
                  {option.label}
                </div>

                {selected[option.id] && (
                  <div className="mt-3 space-y-3">
                    <p className="text-xs text-gray-600">
                      {option.description}
                    </p>

                    <textarea
                      placeholder={option.placeholder}
                      value={comments[option.id] || ""}
                      onChange={(e) =>
                        handleCommentChange(option.id, e.target.value)
                      }
                      className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                      rows={3}
                    />
                  </div>
                )}
              </div>
            </label>
          </div>
        ))}
         <div className="text-sm text-blue-700 font-medium cursor-pointer hover:underline">
           Report Fraud, Offensive or Harmful Issue
        </div>
      </div>
      {/* Fixed Bottom Button */}
      <div className="fixed w-237 flex items-center justify-center bottom-0 bg-white p-4 shadow-md">
        <button
          onClick={handleSubmit}
          disabled={selected.length === 0}
          className={`w-70  py-3 rounded-md font-semibold transition ${
            selected.length === 0
              ? "bg-blue-300 cursor-not-allowed text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Submit
        </button>
      </div>
    </div>
    
  );
}
