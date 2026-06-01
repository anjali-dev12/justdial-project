"use client";
import Image from "next/image";
import { useEffect } from "react";
import { X } from "lucide-react";
import { FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function AdditionalInfoSidebar({ onClose }) {
  const router = useRouter();
  const city = "mumbai";

    useEffect(() => {
    // sidebar open hone par scroll band
    document.body.style.overflow = "hidden";

    return () => {
      // sidebar close hone par scroll wapas
      document.body.style.overflow = "auto";
    };
  }, []);

  const data = [
    {
      title: "Cuisines",
      categoryId: "26",
      value:
        "Aagri, Chinese, Malwani, Mughlai, North Indian, Oriental, Sea Food, South Indian",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/C_attri.svg",
    },
    {
      title: "Establishment Type",
      categoryId: "25",
      value: "Casual Dining, Delivery, Dhaba, Quick Bite Outlet",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/E_attri.svg",
    },
    {
      title: "Known for",
      categoryId: "28",
      value: "Budget Friendly Fine Dining Experience",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/K_attri.svg",
    },
    {
      title: "Delivery Details",
      categoryId: "268",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/K_attri.svg",
    },
    {
      title: "Average Cost",
      categoryId: "31",
      value: "Price For Two - 550",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/A_attri.svg",
    },
    {
      title: "Must Order",
      categoryId:"30",
      value: "Chicken Angara Kabeb",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/M_attri.svg",
    },

    {
      title: "Alcohol",
      categoryId:"33",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/M_attri.svg",
    },
    {
      title: "Parking",
      categoryId:"515",
      value: "Parking Available",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/P_attri.svg",
    },
    {
      title: "Special Offerings",
      categoryId:"479",
      value: "Veg Options Available",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/P_attri.svg",
    },
    {
      title: "Amenities",
      categoryId:"3",
      value: "Drive-Through, WiFi, Work Friendly Environment",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/A_attri.svg",
    },
    {
      title: "Dining Options",
      categoryId:"128",
      value: "Lunch, Dinner",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/D_attri.svg",
    },

     {
      title: "Seating Options",
      categoryId: "478",
      value: "Non AC Indoor Seating",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/S_attri.svg",
    },

    {
      title: "Serves",
      categoryId: "66",
      value: "Biryani, Desserts, Kebab, Non Veg, Sizzler, Tandoori Dishes",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/S_attri.svg",
    },

    {
      title: "Services",
      categoryId: "2",
      value: "Available for Business Meetings, Available for Functions, Birthday / Group Parties, Home Delivery, Party Orders Accepted, Takeaway Available, Outdoor Services",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/S_attri.svg",
    },

     {
      title: "Gaming Activities",
      categoryId: "69",
      value: "",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/G_attri.svg",
    },

    {
      title: "Entertainment",
      categoryId: "65",
      value: "",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/E_attri.svg",
    },
    {
      title: "Billing",
      categoryId: "10",
      value: "",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/B_attri.svg",
    },
    {
      title: "Atmosphere",
      categoryId: "123",
      value: "",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/A_attri.svg",
    },
    {
      title: "Crowd",
      categoryId: "124",
      value: "",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/C_attri.svg",
    },
    {
      title: "Reservation",
      categoryId: "63",
      value: "",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/R_attri.svg",
    },
    {
      title: "Dress Code",
      categoryId: "64",
      value: "",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/D_attri.svg",
    },
    {
      title: "Complimantry",
      categoryId: "67",
      value: "",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/analytics/C_attri.svg",
    },
  ];

  const handleClick = (categoryId) => {
    console.log("Clicked Category:", categoryId);
    router.push(`/edit-attrs/${categoryId}/mumbai`);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-end">
      {/* Sidebar */}
      <div className="w-full max-w-sm bg-white h-full overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="sticky top-0 bg-white flex items-center justify-between pl-5 pr-18 py-4 border-b border-gray-300">
          <button onClick={onClose}
          className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer"
          >
            <FaChevronLeft
            size={20} 
            />
          </button>
          <h2 className="text-lg font-medium">Additional Business Info</h2>
          
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {data.map((item, index) => (
            <div key={index} className="flex gap-4 space-y-1">
              <Image src={item.icon} alt={item.title} width={26} height={26} />

              <div className="flex-1 border-b border-gray-300">
                <div className="flex items-center justify-between">
                  <h3
                    onClick={() => {
                      if (!item.categoryId) {
                        console.log("CategoryId Missing!");
                        return;
                      }
                      router.push(`/edit-attrs/${item.categoryId}/mumbai`);
                    }}
                    className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600"
                  >
                    {item.title}
                  </h3>

                  <Image
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/jdbusiness/edit_round.svg"
                    alt="Edit"
                    width={20}
                    height={20}
                    className="cursor-pointer hover:opacity-70"
                  />
                </div>
                {item.value && (
                  <p className="text-sm text-gray-600 mt-1 pb-2">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
