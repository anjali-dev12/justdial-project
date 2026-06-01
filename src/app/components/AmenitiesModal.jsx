"use client";
import { useState,useEffect} from "react";
import Image from "next/image";
const amenitiesData = [
  {
    title: "Services",
    items: [
      "Takeaway Available",
      "Birthday / Group Parties",
      "Outdoor Services",
      "Home Delivery",
      "Party Orders Accepted",
      "Available for Business Meetings",
      "Available for Functions",
    ],
  },

  {
    title: "Serves",
    items: [
      "Non Veg",
      "Sizzler",
      "Kebab",
      "Biryani",
      "Tandoori Dishes",
      "Desserts",
    ],
  },
  {
    title: "Amenities",
    items: ["Drive-Through", "Work Friendly Environment", "WiFi"],
  },
  {
    title: "Crowd",
    items: ["Good Place for Kids", "Family Friendly", "Group Friendly"],
  },
  {
    title: "Dining Options",
    items: ["Dinner", "Lunch"],
  },
  {
    title: "Special Offerings",
    items: ["Veg Options Available"],
  },
  {
    title: "Seating Options",
    items: ["Non AC Indoor Seating"],
  },
];
export default function AmenitiesModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("Services");
  const [search, setSearch] = useState("");

useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);

if (!isOpen) return null;

  const activeSection = amenitiesData.find(
    (section) => section.title === activeTab,
  );

  const filteredItems = activeSection.items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      {/* Modal Container */}
      <div className="bg-white w-[95%] md:w-[1000px] h-[90vh]  rounded-lg shadow-lg flex flex-col">
        {/* 🔵 HEADER */}
        <div className="flex justify-between items-center px-6 py-4 ">
          {/* Left */}
          <div className="flex gap-3">
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg"
              alt="Call Icon"
              width={20}
              height={20}
              className="phone-animate"
            />
            <h2 className="text-lg font-semibold">Hotel Sai Dhaba</h2>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <ul className="flex items-center gap-4 min-h-[38px] pr-5">
              {/* 📞 CALL BUTTON */}
              <li>
                <div className="flex items-center bg-blue-600 px-4 py-2 rounded-md cursor-pointer">
                  <Image
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/call_white_icon.svg"
                    alt="call"
                    width={18}
                    height={18}
                  />

                  <a
                    href="tel:07041620314"
                    className="ml-2 text-white text-[15px] font-medium"
                  >
                    07041620314
                  </a>
                </div>
              </li>

              {/* 💬 WHATSAPP BUTTON */}
              <li>
                <a
                  href="https://wa.me/917041620314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center border border-black bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  <Image
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/squarewhatsapp_icon.svg"
                    alt="whatsapp"
                    width={20}
                    height={20}
                  />

                  <span className="ml-2 text-[15px] font-medium text-gray-800">
                    WhatsApp
                  </span>
                </a>
              </li>
            </ul>

            <button
              onClick={onClose}
              className="text-lg font-semibold text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>
        </div>

        {/* 🔵 BODY */}
        <div className="flex flex-1 gap-2 overflow-hidden">
          {/* 🟢 LEFT SIDEBAR */}
          <div className="w-[280px]  border-gray-300 p-4 overflow-y-auto">
            
            {/* Search */}
            <input
              type="text"
              placeholder="Search Services"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Categories */}
            <div className="space-y-7 ">
              {amenitiesData.map((section) => (
                <button
                  key={section.title}
                  onClick={() => setActiveTab(section.title)}
                  className={`w-full text-left  px-3 py-2 rounded-md text-md transition
                    ${
                      activeTab === section.title
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          {/* 🔵 RIGHT CONTENT */}
          <div className="flex-1 p-6 border border-gray-300 rounded-lg  m-4 overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">
              {activeSection.title}
            </h3>

            <ul className="space-y-3">
              {filteredItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <span className="text-black text-lg font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {filteredItems.length === 0 && (
              <p className="text-gray-500 text-sm mt-4">No results found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
