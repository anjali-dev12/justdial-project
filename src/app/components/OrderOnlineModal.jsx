"use client";

import Image from "next/image";
import { X } from "lucide-react";

export default function OrderOnlineModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* Modal */}
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg animate-slideUp">

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Continue with
          </h2>

          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-6">

          {/* Zomato */}
          <div className="flex items-center cursor-pointer border-b border-gray-300 pb-6">
            <div className="w-[74px] h-[74px] relative">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/zomato.png"
                alt="Zomato"
                fill
                className="rounded-lg object-cover bg-gray-100"
              />
            </div>

            <div className="ml-5">
              <h3 className="text-lg font-medium text-gray-900">
                Zomato
              </h3>
            </div>
          </div>

          {/* Swiggy */}
          <div className="flex items-center cursor-pointer">
            <div className="w-[74px] h-[74px] relative">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icons/swiggy.png"
                alt="Swiggy"
                
                className="rounded-lg object-cover bg-gray-100"
              />
            </div>

            <div className="ml-5">
              <h3 className="text-lg font-medium text-gray-900">
                Swiggy
              </h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}