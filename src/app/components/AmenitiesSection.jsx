"use client";
import { useState } from "react";
import Image from "next/image";
import AmenitiesModal from "./AmenitiesModal";

const amenitiesData = [
  {
    title: "Services",
    items: [
      "Takeaway Available",
      "Birthday / Group Parties",
      "Home Delivery",
      "Outdoor Catering",
      "Online Ordering",
      "Live Music",
      "Event Hosting",
    ],
  },
  {
    title: "Serves",
    items: ["Non Veg", "Sizzler", "Chinese", "Biryani", "Tandoor"],
  },
  {
    title: "Amenities",
    items: [
      "Drive-Through",
      "Work Friendly Environment",
      "Free WiFi",
    ],
  },
  {
    title: "Crowd",
    items: ["Good Place for Kids", "Family Friendly", "Couples"],
  },
];

export default function AmenitiesSection() { 
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showAll, setShowAll] = useState(false);
  return (

    <>

       <div className="pb-3 px-4">
        <h2 className="text-xl font-semibold text-gray-900">
          Quick Information
        </h2>
      </div>

    <ul className="mt-4 border-b border-gray-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-5 px-4 pb-6">

  {/* Cuisines */}
  <li className="flex flex-col">
    <p className="text-base md:text-lg text-gray-500 mb-1">Cuisines</p>
    <div className="text-sm font-semibold text-gray-900 flex flex-wrap gap-x-2 gap-y-1">
      {["Chinese", "South Indian", "Mughlai", "Sea Food", "North Indian", "Malwani", "Oriental", "Aagri"].map((item) => (
        <a key={item} href="#" className="hover:text-blue-600 underline whitespace-nowrap">
          {item}
        </a>
      ))}
    </div>
  </li>

  {/* Type */}
  <li>
    <p className="text-base md:text-lg text-gray-500 mb-1">Type</p>
    <p className="text-sm font-semibold text-gray-900 leading-snug">
      Delivery, Casual Dining, Dhaba, Quick Bite Outlet
    </p>
  </li>

  {/* Known For */}
  <li>
    <p className="text-base md:text-lg text-gray-500 mb-1">Known For</p>
    <p className="text-sm font-semibold text-gray-900 leading-snug">
      Budget Friendly Fine Dining Experience
    </p>
  </li>

  {/* Average Cost */}
  <li>
    <p className="text-base md:text-lg text-gray-500 mb-1">Average Cost</p>
    <p className="text-sm font-bold text-gray-900">
      Price For Two: <span className="text-gray-900">₹ 550</span>
    </p>
  </li>

  {/* Must Order */}
  <li>
    <p className="text-base md:text-lg text-gray-500 mb-1">Must Order</p>
    <p className="text-sm font-bold text-gray-900">
      Chicken Angara Kabeb
    </p>
  </li>

  {/* Year */}
  <li>
    <p className="text-base md:text-lg text-gray-500 mb-1">Year of Establishment</p>
    <p className="text-sm font-semibold text-gray-900">
      2009
    </p>
  </li>

</ul>
      <div className="bg-white mt-3 border-b border-gray-300 py-4">

      
        <h2 className="text-xl font-semibold px-4  text-gray-900">
          Highlights from the business
        </h2>
      <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
  
  <li className="flex flex-col items-center text-center space-y-2 sm:space-y-3 p-3 sm:p-4 transition">
    
    {/* Image */}
    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center">
      <Image
        src="https://akam.cdn.jdmagicbox.com/images/icons/iphone/new/icd-hl-res49.png"
        alt="Parking Available"
        height={80}
        width={80}  
        className="object-contain"
      />
    </div>

    {/* Text */}
    <p className="text-xs sm:text-sm md:text-base font-medium text-gray-900">
      Parking Available
    </p>

  </li>

</ul>

    </div>

<div className="border-b border-gray-300 p-4 sm:p-6">

  {/* Section Heading */}
  <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">
    Services & Amenities
  </h2>

  {/* Single Row Layout */}
  <div className="flex gap-6">

    {amenitiesData.map((section, index) => (
      <div 
        key={index} 
        className="flex gap-3 flex-1 min-w-0 cursor-pointer"
      >

        {/* Tick Icon */}
        <div className="mt-1 shrink-0 ">
          <span className="text-gray-800 text-lg font-bold">✓</span>
        </div>

        {/* Content */}
        <div className="min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 truncate">
            {section.title}
          </h3>

          <div className="text-sm text-gray-700 break-words">
            {(showAll ? section.items : section.items.slice(0, 2)).map(
              (item, i) => (
                <span key={i}>
                  {item}
                  {i <
                    (showAll
                      ? section.items.length
                      : Math.min(2, section.items.length)) - 1 && ","}
                </span>
              )
            )}

            {!showAll && section.items.length > 2 && (
              <button
                onClick={() => setShowAll(true)}
                className="text-blue-600 font-medium ml-1 hover:underline"
              >
                +{section.items.length - 2}
              </button>
            )}
          </div>
        </div>

      </div>
    ))}

  </div>

  {/* View All Button */}
  <div className="mt-8 flex justify-center">
    <button
       onClick={() => setIsModalOpen(true)}
      className="px-4 sm:px-5 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition text-sm sm:text-base cursor-pointer"
    >
      View All
    </button>
  </div>
      <AmenitiesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
</div>


</>
  );
}
