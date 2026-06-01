"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Phone, Share2, ThumbsUp, Flag } from "lucide-react";

export default function GalleryPreviewModal({ images, selectedIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex || 0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md">

  {/* MAIN MODAL CONTAINER */}
  <div className="w-[90%] max-w-6xl h-[85vh] bg-black text-white rounded-xl shadow-2xl flex overflow-hidden relative">

    {/* LEFT SIDE - IMAGE */}
    <div className="flex-1 flex flex-col items-center justify-center relative p-6">

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/20 p-2 rounded-full hover:bg-white/40 transition"
      >
        <X size={20} />
      </button>

      {/* Image */}
      <div className="relative w-full max-w-3xl">
        <img
          src={currentImage.src}
          alt="preview"
          className="w-full max-h-[65vh] object-contain rounded-lg"
        />

        {/* Prev */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Counter */}
      <span className="mt-4 text-sm text-gray-300">
        {currentIndex + 1}/{images.length}
      </span>

      {/* Actions */}
      <div className="flex gap-6 mt-4 text-gray-300">
        <button className="hover:text-white">
          <ThumbsUp size={18} />
        </button>
        <button className="hover:text-white">
          <Share2 size={18} />
        </button>
        <button className="hover:text-white">
          <Flag size={18} />
        </button>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="w-[320px] bg-zinc-900 border-l border-white/10 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-semibold">
          Hotel Sai Dhaba
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          Kalyan West, Kalyan
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="tel:07041620314"
            className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded-md text-sm"
          >
            <Phone size={16} />
            Call
          </a>

          <button className="bg-blue-600 px-4 py-2 rounded-md text-sm">
            Order Online
          </button>

          <a
            href="https://wa.me/917041620314"
            target="_blank"
            className="border border-white/20 px-4 py-2 rounded-md text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>

  </div>
</div>

  );
}
