"use client";
import { FaCamera } from "react-icons/fa";
import { BsCameraReelsFill } from "react-icons/bs";
import Image from "next/image";
import { List } from "lucide-react";
import { FaChevronLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GalleryGrid() {
  const router = useRouter();
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    const savedImages = localStorage.getItem("galleryImages");
    if (savedImages) {
      setUploadedImages(JSON.parse(savedImages));
    }
  }, []);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const newImage = {
          src: reader.result,
        };

        setUploadedImages((prev) => {
          const updated = [...prev, newImage];

          // Save to localStorage
          localStorage.setItem("galleryImages", JSON.stringify(updated));

          return updated;
        });
      };

      reader.readAsDataURL(file);
    });
  };

  // ✅ Save Button
  const handleSave = () => {
    router.push("/jd-bussiness/edit-profile");
  };

  // ✅ Back Button (Proper navigation)
  const handleBack = () => {
    router.back();
  };

  return (
    <>
      {/* Header */}
      <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between z-50">
        <button onClick={handleBack}>
          <FaChevronLeft size={20} />
        </button>

        <h1 className="font-semibold text-lg">Photo Gallery</h1>

        <List className="w-5 h-5 text-gray-700" />
      </div>

      {/* Upload Section */}

      <div className="p-4">
        <div className="bg-blue-50 p-3 rounded text-sm text-gray-700">
          Make your business look more trustworthy by uploading photos and
          videos. <br />
          <span className="font-bold">Recommended Size: 1000px X 1000px</span>
        </div>
        <div className="flex gap-6 mt-6">
          <label className="flex flex-col items-center justify-center text-blue-600 border-2 border-dashed border-blue-500 rounded-xl cursor-pointer w-40 h-40">
            <FaCamera size={40} />

            <span className="text-sm mt-3">Upload Photos</span>
            <input
              type="file"
              className="hidden"
              multiple
              accept="image/*"
              onChange={handleUpload}
            />
          </label>

          <label className="flex flex-col items-center justify-center text-blue-600 border-2 border-dashed border-blue-500 rounded-xl cursor-pointer w-40 h-40">
            <BsCameraReelsFill size={40} />
            <span className="text-sm mt-3">Upload Videos</span>
            <input
              type="file"
              className="hidden"
              multiple
              accept="image/*"
              onChange={handleUpload}
            />
          </label>
        </div>
      </div>

      {/* Gallery */}
      <div className="p-4">
        <ul className="grid grid-cols-5 gap-3">
          {uploadedImages.map((img, index) => (
            <li key={index}>
              <Image
                src={img.src}
                alt="gallery"
                width={200}
                height={200}
                className="w-full h-28 object-cover rounded-lg"
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Save Button */}
      <div className="fixed bottom-0 w-239 bg-white p-4 shadow-md">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
          >
            Save and Continue
          </button>
        </div>
      </div>
    </>
  );
}
