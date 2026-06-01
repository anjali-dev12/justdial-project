"use client";
import { useState } from "react";
import { FaChevronLeft} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function EstablishmentType() {
  const router = useRouter();

  const establishmentList = [
    "Dhaba",
    "Casual Dining",
    "Delivery",
    "Quick Bite Outlet",
    "Bakery",
    "Bar",
    "Beverage Outlets",
    "Bhojanalya",
    "Bistro",
    "Brasserie",
    "BYOB",
    "Cafe",
    "Cake Shops",
    "Caterer",
    "Club",
    "Cocktail Bar",
    "Coffee Shops",
    "Desserts Shop",
    "Dine-in",
    "Fine Dining",
    "Food Court",
    "Food Stall",
  ];

  const [selected, setSelected] = useState([
   "Dhaba",
    "Casual Dining",
    "Delivery",
    "Quick Bite Outlet",
     
  ]);

  const handleCheck = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <div className="min-h-screen px-50 bg-white relative">

      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
         <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
        >
          <FaChevronLeft size={20} />
        </button>

        <h2 className="font-semibold text-lg">Establishment Type</h2>
        <span></span>
      </header>

      <div className="px-5 py-4 border border-gray-300">

        {/* Info box */}
        <div className="flex gap-3 bg-blue-50 p-3 rounded mb-4 text-sm text-gray-700">
          <span>ℹ️</span>
          <p>
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 px-4 py-2 mb-4"
        />

        <h3 className="font-semibold mb-3">All Establishment Type</h3>

        {/* Checkbox List */}
        <div className=" mt-3 pb-28 space-y-3">

          {establishmentList.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-5 p-3 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                checked={selected.includes(item)}
                onChange={() => handleCheck(item)}
                className="w-4 h-4"
              />

              <span>{item}</span>
            </label>
          ))}

        </div>
     
     

      {/* Save Button */}
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