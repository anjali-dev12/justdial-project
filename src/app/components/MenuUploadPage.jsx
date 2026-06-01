"use client";

import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaInfoCircle, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function MenuUploadPage() {
  const router = useRouter();
  const fileInputRef = useRef(null);

  const [menuImages, setMenuImages] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const savedImages = localStorage.getItem("menuImages");
    if (savedImages) {
      setMenuImages(JSON.parse(savedImages));
    }
  }, []);

  // Save to localStorage whenever images change
  useEffect(() => {
    localStorage.setItem("menuImages", JSON.stringify(menuImages));
  }, [menuImages]);

  // Handle Upload
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMenuImages((prev) => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* Header */}
      <div className="sticky top-0 flex items-center justify-between bg-white p-4 shadow-sm">
        <button onClick={() => router.back()}>
          <FaChevronLeft size={20} />
        </button>
        <h2 className="text-lg font-semibold">Menu</h2>
        <div />
      </div>

      {/* Info Box */}
      <div className="px-5 mt-5">
        <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
          <FaInfoCircle className="text-blue-600 mt-1" />
          <p className="text-xs text-gray-700">
            Please DO NOT upload store images or posters as they will be rejected.
            <br />
            Recommended Size: <span className="font-semibold">1000px X 1000px</span>
          </p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="px-5 mt-6">
  <ul className="grid grid-cols-5 gap-4">

    {/* Upload Button */}
    <li
      onClick={() => fileInputRef.current.click()}
      className="h-28 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
    >
      <FaPlus className="text-gray-500" />
      <span className="text-xs mt-2">Upload</span>
    </li>

    <input
      ref={fileInputRef}
      type="file"
      multiple
      accept="image/*"
      className="hidden"
      onChange={handleFileChange}
    />

    {/* Uploaded Images */}
    {menuImages.map((img, index) => (
      <li
        key={index}
        className="h-28 rounded-lg overflow-hidden border border-gray-200"
      >
        <img
          src={img}
          alt="menu"
          className="w-full h-full object-cover"
        />
      </li>
    ))}

  </ul>
</div>

    </div>
  );
}