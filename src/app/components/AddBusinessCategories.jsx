"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { FaChevronLeft, FaTimes } from "react-icons/fa";

export default function AddBusinessCategories() {
  const router = useRouter();

  // Default Categories
  const defaultCategories = [
    "Chinese Delivery Restaurants",
    "Indian Delivery Restaurants",
    "Sea Food Restaurants",
    "North Indian Restaurants",
  ];

  const [categories, setCategories] = useState(defaultCategories);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [value, setValue] = useState("");

  // 🔍 Filter suggestions
  const filteredSuggestions = defaultCategories.filter(
    (cat) =>
      cat.toLowerCase().includes(value.toLowerCase()) &&
      !categories.includes(cat)
  );

  const removeCategory = (name) => {
    setCategories(categories.filter((cat) => cat !== name));
  };

  const addCategory = (name) => {
    if (!categories.includes(name)) {
      setCategories([...categories, name]);
    }
    setValue("");
    setShowAddCategory(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full  bg-white relative pb-24">

        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-300 p-4 flex items-center gap-4 z-50">
          <button onClick={() => router.back()}>
            <FaChevronLeft size={18} />
          </button>
          <h1 className="text-base font-semibold">
            Add Business Categories
          </h1>
        </div>

        <div className="p-4">

          {/* Selected Categories */}
          <div className="mt-6">
            <h2 className="font-semibold text-sm mb-3">
              Selected Categories
            </h2>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-xs"
                >
                  {cat}
                  <button
                    onClick={() => removeCategory(cat)}
                    className="ml-2 text-gray-600 hover:text-red-500"
                  >
                    <FaTimes size={10} />
                  </button>
                </div>
              ))}
            </div>

            {!showAddCategory && (
              <button
                onClick={() => setShowAddCategory(true)}
                className="text-blue-600 text-sm mt-4"
              >
                + Add New Category
              </button>
            )}
          </div>

          {/* Search Input */}
          {showAddCategory && (
            <div className="mt-6 relative">

              <button
                onClick={() => setShowAddCategory(false)}
                className="text-gray-500 mb-4 text-sm"
              >
                ← Back
              </button>

              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500"
                />

                <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full pl-10 pr-3 py-3 border rounded-lg outline-none focus:border-blue-600"
                  placeholder="Search Categories..."
                />
              </div>

              {/* 🔥 Suggestion Dropdown */}
              {value && filteredSuggestions.length > 0 && (
                <div className="absolute z-50 mt-2 w-full bg-white border rounded-lg shadow-md max-h-48 overflow-y-auto">
                  {filteredSuggestions.map((suggestion) => (
                    <div
                      key={suggestion}
                      onClick={() => addCategory(suggestion)}
                      className="p-3 text-sm hover:bg-blue-50 cursor-pointer"
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}

              {/* No Match */}
              {value && filteredSuggestions.length === 0 && (
                <div className="mt-2 text-sm text-gray-500">
                  No matching categories found
                </div>
              )}
            </div>
          )}
        </div>

        {/* Sticky Button */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 shadow-md">
          <div className="max-w-2xl mx-auto">
            <button
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
            >
              Proceed
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}