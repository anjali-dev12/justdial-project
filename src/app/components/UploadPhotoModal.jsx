"use client";
import { useState } from "react";
import { X, Trash2 } from "lucide-react";

export default function UploadPhotoModal({ isOpen, onClose }) {
  const [selectedImages, setSelectedImages] = useState([]);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      caption: "",
    }));

    setSelectedImages((prev) => [...prev, ...imageUrls]);
  };

  const handleCaptionChange = (index, value) => {
    const updated = [...selectedImages];
    updated[index].caption = value;
    setSelectedImages(updated);
  };

  const handleRemoveImage = (index) => {
    const updated = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updated);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-[95%] h-full max-w-3xl rounded-xl shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-400 px-6 py-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-gray-800">
              Hotel Sai Dhaba
            </h2>
            {/* Browse More Files */}
            <div>
              <label className="border border-blue-600 text-blue-600 px-3 py-1  rounded-sm cursor-pointer hover:bg-blue-5
              0">
                Browse More Files
                <input
                  type="file"
                  accept=".jpeg,.jpg,.png"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer" />
          </button>
        </div>

        {/* ===================== */}
        {/* IF NO IMAGE SELECTED */}
        {/* ===================== */}
        {selectedImages.length === 0 && (
          <div className="p-8">
            <div className="border-2 h-120 border-dashed border-gray-300 rounded-lg p-10 text-center hover:border-blue-500 transition">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/add_photos_banner.svg"
                alt="upload"
                className="mx-auto mt-15 w-28"
              />

              <p className="text-lg font-medium mt-6">
                Drag & drop photos here
              </p>

              <p className="mt-4">
                or{" "}
                <label className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
                  Browse Files
                  <input
                    type="file"
                    accept=".jpeg,.jpg,.png"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </p>

              <p className="text-sm text-gray-500 mt-4">
                Only JPG, JPEG, PNG files are allowed. Maximum size 10MB.
              </p>
            </div>
          </div>
        )}

        {/* ===================== */}
        {/* IF IMAGE SELECTED */}
        {/* ===================== */}
        {selectedImages.length > 0 && (
          <div className="p-8 space-y-6">
            {selectedImages.map((img, index) => (
              <div key={index} className="flex gap-6 p-4">
                {/* Left Image Preview */}
                <div className="relative w-48 h-40 rounded-lg overflow-hidden border">
                  {/* Delete Button */}
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-2 right-2 bg-white/90 hover:bg-gray-500 hover:text-white 
                   text-gray-500 w-8 h-8 flex items-center justify-center 
                   rounded-full shadow-md transition cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>

                  <img
                    src={img.preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Right Caption Box */}
                <div className="flex-1">
                  <textarea
                    value={img.caption}
                    onChange={(e) => handleCaptionChange(index, e.target.value)}
                    placeholder="Captions help others Identify What’s in the Photo’s"
                    className="w-full h-40 border border-gray-400 rounded-md p-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
