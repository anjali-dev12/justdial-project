"use client";
import { useState } from "react";
import { FaChevronLeft} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function EditCuisinesPage() {
  const router = useRouter();

  const cuisinesList = [
    "Aagri",
    "Chinese",
    "Malwani",
    "Mughlai",
    "North Indian",
    "Sea Food",
    "Oriental",
    "South Indian",
    "Afghani",
    "American",
    "Andhra",
    "Arabian",
    "Awadhi",
    "Bengali",
    "Biryani",
    "British",
    "Cafe",
  ];

  const [selected, setSelected] = useState([
    "Aagri",
    "Chinese",
    "Malwani",
    "Mughlai",
     "North Indian",
    "Sea Food",
   
  ]);

  const toggleCuisine = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <div className="min-h-screen mx-50 bg-white relative">
         
         {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <FaChevronLeft size={20} />
        </button>

        <span className="text-gray-900 font-medium text-lg">
          Cuisines
        </span>

        <span className="text-sm text-gray-500">&nbsp;</span>
      </header>
       <div className="border border-gray-300">  
      {/* Note Section */}
      <div className="bg-gray-100 mx-4 p-3 rounded-md text-xs text-gray-700">
        Please note that any changes to the details below can go for
        verification and take upto 2 working days to go live.
      </div>

      {/* Search */}
      <div className="px-4 mt-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Title */}
      <div className="px-4 mt-4 text-sm font-semibold text-gray-700">
        All Cuisines
      </div>

      {/* List */}
      <div className="px-4 mt-3 pb-28 space-y-3">
        {cuisinesList.map((item, index) => (
          <label
            key={index}
            className="flex items-center gap-5 p-3 cursor-pointer hover:bg-gray-50"
          >
            
            <input
              type="checkbox"
              checked={selected.includes(item)}
              onChange={() => toggleCuisine(item)}
              className="h-4 w-4 accent-blue-600"
            />
            <span className="text-sm text-gray-700">{item}</span>

          </label>
        ))}
      </div>

      {/* Fixed Footer Button */}
      <div className="fixed bottom-0 left-50 w-238 bg-white shadow-md p-4">
        <div className=" flex justify-center">
          <button
            
            className="w-100 bg-blue-600 text-white text-sm font-medium py-3 rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </div>
      
     </div>

    </div>
  );
}