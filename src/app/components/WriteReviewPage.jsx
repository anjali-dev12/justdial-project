"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Star, X } from "lucide-react";

export default function WriteReviewPage() {
  const [visitType, setVisitType] = useState("Dine in");
  const [selectedTags, setSelectedTags] = useState([]);
  const [search, setSearch] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [images, setImages] = useState([]);
  const [rating, setRating] = useState(0);
  const searchParams = useSearchParams();

  const ratingFromURL = Number(searchParams.get("rating")) || 0;

  useEffect(() => {
    if (ratingFromURL) {
      setRating(ratingFromURL);
    }
  }, [ratingFromURL]);

  const ratingText = ["", "Terrible", "Bad", "Average", "Good", "Excellent"];

  const dineInTags = [
    "Good seating",
    "Great ambience",
    "Comfortable place",
    "Family friendly",
    "Clean environment",
  ];

  const deliveryTags = [
    "Fast delivery",
    "Well packed",
    "Hot food delivered",
    "On time delivery",
    "Good quantity",
  ];

  // 🔥 IMPORTANT FIX
  const currentTags = visitType === "Dine in" ? dineInTags : deliveryTags;

  const filteredTags = currentTags.filter(
    (tag) =>
      tag.toLowerCase().includes(search.toLowerCase()) &&
      !selectedTags.includes(tag),
  );

  const addTag = (tag) => {
    setSelectedTags([...selectedTags, tag]);
    setSearch("");
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const handleVisitChange = (label) => {
    setVisitType(label);
    setSelectedTags([]); // mode change pe clear
    setSearch("");
  };

  const handleImageUpload = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = () => {
    console.log({
      visitType,
      rating,
      selectedTags,
      reviewText,
      images,
    });
  };

  const visitOptions = [
    {
      label: "Dine in",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/wr_dinein_icon_active.png",
    },
    {
      label: "Delivery",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/wr_delivery_icon.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-5 rounded-lg">
      <h1 className="text-2xl font-semibold mb-8">Write Review</h1>

      <div className="grid md:grid-cols-2 gap-10 border border-gray-200 rounded-lg">
        {/* LEFT SECTION */}
        <div className="h-110 border-r border-b border-gray-200 p-6">
          <div className="flex gap-4 mb-6 mt-15">
            <div className="w-24 h-24 relative rounded-lg overflow-hidden">
              <Image
                src="https://content2.jdmagicbox.com/cb/mumbai/022PXX22.XX22.130924120042.Y5S2.jpg"
                alt="Hotel Sai Dhaba"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Hotel Sai Dhaba</h2>
              <p className="text-gray-500">Kalyan West</p>
            </div>
          </div>

          <h3 className="text-lg font-medium mb-4">
            How would you rate your experience?
          </h3>

          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <div
                key={star}
                onClick={() => setRating(star)}
                className={`p-3 rounded-lg border cursor-pointer transition-all duration-200
              ${
                star <= rating
                  ? "bg-[#FE4200] border-[#FE4200]"
                  : "bg-white border-gray-300"
              }`}
              >
                <Star
                  size={24}
                  className={`${
                    star <= rating ? "text-white fill-white" : "text-gray-400"
                  }`}
                />
              </div>
            ))}
          </div>
            
          <p className="text-lg font-medium">{ratingText[rating]}</p>
        </div>

        {/* RIGHT SECTION */}
        <div className="p-6 space-y-8">
          {/* Visit Type */}
          <ul className="flex gap-6">
            {visitOptions.map((item) => (
              <li
                key={item.label}
                onClick={() => handleVisitChange(item.label)}
                className={`flex items-center gap-3 cursor-pointer px-6 py-3 rounded-lg  border transition
                ${
                  visitType === item.label
                    ? "bg-blue-50 border-blue-600"
                    : "border-gray-300"
                }`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={28}
                  height={28}
                />
                <span className="font-medium">{item.label}</span>
              </li>
            ))}
          </ul>

          {/* What did you love */}
          <div>
            <h2 className="text-xl font-medium mb-3">What did you love?</h2>

            <input
              type="text"
              placeholder="Search tag or select from below"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-600 mb-3"
            />

            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    {tag}
                    <X
                      size={14}
                      className="cursor-pointer"
                      onClick={() => removeTag(tag)}
                    />
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {filteredTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => addTag(tag)}
                  className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-sm hover:bg-gray-100 transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">
                Tell us about your experience
              </h2>
              <button className="text-blue-600 text-sm">Tips</button>
            </div>

            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Please say a little something about the food, ambience, service and price"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-blue-600 p-3 resize-none min-h-[100px]"
            />

            <div className="text-right text-xs text-gray-500 mt-2">
              {reviewText.length} characters
            </div>
          </div>

          {/* Upload */}
          <div>
            <h2 className="text-xl font-medium mb-4">Upload Photos</h2>

            <label className="cursor-pointer inline-flex items-center justify-center w-24 h-24 border-2 border-dashed border-blue-600 rounded-lg transition text-blue-600 text-lg">
              +
              <input
                type="file"
                multiple
                accept=".jpg,.jpeg,.png"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {images.length > 0 && (
              <p className="mt-2 text-sm text-gray-600">
                {images.length} image(s) selected
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-3">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-10 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
