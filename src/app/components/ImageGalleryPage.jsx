"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft } from "react-icons/fa";
import GalleryPreviewModal from "./GalleryPreviewModal";

const ImageGalleryPage = ({ onClose }) => {
  const [previewIndex, setPreviewIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: "https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-my1a1p0jx4.jpg",
      span: "row-span-2",
      category: "Ambience",
    },
    {
      id: 2,
      src: "https://justdialvideos2.akamaized.net/images/e7/65/e7655b99-1439-4bb0-a80c-1f7b41d51c09/slideshow-022PXX22.XX22.130924120042.Y5S2-final_400x224_00h.00m.05s.jpg",
      span: "row-span-1",
      isVideo: true,
      category: "Video",
    },
    {
      id: 3,
      src: "https://content.jdmagicbox.com/v2/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-mumbai-north-indian-restaurants-77l89iv7nz.jpg",
      span: "row-span-3",
      category: "Ambience",
    },
    {
      id: 4,
      src: "https://content.jdmagicbox.com/v2/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-mumbai-north-indian-restaurants-jxuei5yr72.jpg",
      span: "row-span-2",
      category: "Food",
    },

    {
      id: 5,
      src: "https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-vi815svaly.jpg?imwidth=438.6666666666667",
      span: "row-span-2",
      category: "Food",
    },

    {
      id: 6,
      src: "https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-t9acx500b9.jpg?imwidth=438.6666666666667",
      span: "row-span-1",
      category: "By Owner",
    },

    {
      id: 7,
      src: "https://content.jdmagicbox.com/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-mme66709752p8os.jpg?imwidth=438.6666666666667",
      span: "row-span-2",
      category: "By Owner",
    },
    {
      id: 8,
      src: "https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-rk4vjtlonz.jpg?imwidth=438.6666666666667",
      span: "row-span-2",
      category: "By Owner",
    },
    {
      id: 9,
      src: "https://content.jdmagicbox.com/v2/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-thane-north-indian-restaurants-n33ito2qw3.jpg?imwidth=438.6666666666667",
      span: "row-span-3",
      category: "By User",
    },
    {
      id: 10,
      src: "https://content.jdmagicbox.com/v2/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-e611pl54r1.jpg?imwidth=438.6666666666667",
      span: "row-span-1",
      category: "By User",
    },
    {
      id: 11,
      src: "https://content.jdmagicbox.com/v2/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-hqcll4wk87.jpg?imwidth=438.6666666666667",
      span: "row-span-2",
      category: "By User",
    },
  ];

  const [activeTab, setActiveTab] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const filteredImages = useMemo(() => {
    let filtered =
      activeTab === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeTab);

    if (search.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.category.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return filtered;
  }, [activeTab, search]);

  const tabs = [
    { name: "All", count: galleryItems.length },
    {
      name: "Ambience",
      count: galleryItems.filter((i) => i.category === "Ambience").length,
    },
    {
      name: "Food",
      count: galleryItems.filter((i) => i.category === "Food").length,
    },
    {
      name: "By Owner",
      count: galleryItems.filter((i) => i.category === "By Owner").length,
    },
    {
      name: "By User",
      count: galleryItems.filter((i) => i.category === "By User").length,
    },
    {
      name: "Video",
      count: galleryItems.filter((i) => i.category === "Video").length,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full bg-black text-white px-6 py-4 flex items-center justify-between">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">
          {/* Back Button */}
          <button
            onClick={onClose}
            aria-label="Close Gallery"
            className="p-2 hover:bg-white/20 rounded-full transition"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Title */}
          <Link
            href="/kalyan"
            className="text-sm md:text-base font-medium truncate"
          >
            <span className="font-semibold">
              Hotel Sai Dhaba in Kalyan West, Kalyan - Gallery
            </span>
          </Link>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">
          {/* Call Button */}
          <a
            href="tel:07041620314"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md text-sm font-medium transition"
          >
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/call_white_icon.svg"
              alt="Phone"
              width={18}
              height={18}
              className="phone-animate"
            />
            07041620314
          </a>

          {/* Order Button */}
          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md text-sm font-medium transition">
            Order Online
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917041620314"
            target="_blank"
            className="flex items-center gap-2 border border-gray-300 bg-white text-black px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
          >
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/squarewhatsapp_icon.svg"
              alt="Whatsapp"
              width={20}
              height={20}
            />
            WhatsApp
          </a>
        </div>
      </div>

      {/*Navigation Section*/}

      <div className="bg-black text-white px-6 py-4">
        {/* Tabs Section */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ul className="flex gap-6 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <li
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`cursor-pointer pb-2 text-sm font-medium whitespace-nowrap transition 
                ${
                  activeTab === tab.name
                    ? "border-b-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.name} ({tab.count})
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center justify-end gap-3  pb-2">
            {/* Add Photos Button */}
            <button className="flex items-center gap-2 border border-white text-white text-sm font-medium px-4 py-1 rounded hover:bg-blue-700 transition">
              <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/upload_photos.gif"
                alt="add"
                height={25}
                width={25}
              />
              Add Photos
            </button>

            <button className="px-2 py-1 border border-white rounded hover:bg-gray-200 transition">
              <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/share_white.svg"
                alt="share"
                height={20}
                width={20}
              />
            </button>
            {/* Search */}
            <div
              className={`flex items-center border border-white rounded px-2 py-1 transition-all duration-300 overflow-hidden
      ${isOpen ? "w-52" : "w-10 cursor-pointer"}`}
              onClick={() => !isOpen && setIsOpen(true)}
            >
              {/* Search Icon */}
              <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/search_white_icon.svg"
                alt="search"
                width={18}
                height={18}
                className="shrink-0"
              />

              {/* Input (Only when open) */}
              {isOpen && (
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search photos"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onBlur={() => {
                    if (!search) setIsOpen(false);
                  }}
                  className="bg-transparent outline-none text-sm text-white placeholder-gray-300 ml-2 w-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        {filteredImages.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            No photos found.
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg break-inside-avoid"
              >
                <img
                  src={item.src}
                  alt="gallery"
                  onClick={() => setPreviewIndex(index)}
                  className="cursor-pointer w-full object-cover rounded-lg hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {previewIndex !== null && (
        <GalleryPreviewModal
          images={filteredImages}
          selectedIndex={previewIndex}
          onClose={() => setPreviewIndex(null)}
        />
      )}
    </div>
  );
};

export default ImageGalleryPage;
