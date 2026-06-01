"use client";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import GalleryPreviewModal from "./GalleryPreviewModal";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AmenitiesSection from "./AmenitiesSection";
import PhotosSection from "./PhotoSection";
import ReviewsSection from "./ReviewsSection";
import AlsoListedIn from "./AlsoListedIn";
import MenuCatalog from "./MenuCatalog";
import { useRef } from "react";

export default function DetailsTabs() {
  const [activeTab, setActiveTab] = useState("Overview");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const overviewRef = useRef(null);
  const photosRef = useRef(null);
 const AmenitiesRef = useRef(null);
const ReviewsRef = useRef(null);

  const tabs = [
    "Overview",
    "Menu",
    "Quick Info",
    "Services",
    "Photos",
    "Reviews",
  ];

   const handleTabClicks = (tab) => {
    setActiveTab(tab);

    // Agar Menu tab hai to sirf component show karo
    if (tab === "Menu") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sectionMap = {
      Overview: overviewRef,
      "Quick Info": AmenitiesRef,
      Services: AmenitiesRef,
      Photos: photosRef,
      Reviews: ReviewsRef,
    };

    sectionMap[tab]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };


  const menuItems = [
    { id: 1, name: "Jeera Soda", price: 35, veg: true },
    { id: 2, name: "Diet Coke Soft Beverage", price: 55, veg: false },
    { id: 3, name: "Coke Soft Beverage", price: 35, veg: true },
  ];

  const galleryImages = [
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-w1zv2nm.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-q5w53b8.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-whmj3t0.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-fgmxsss.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-w1zv2nm.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-q5w53b8.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-whmj3t0.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-fgmxsss.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-w1zv2nm.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-q5w53b8.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-whmj3t0.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-fgmxsss.jpg",
  ];

  const handleTabClick = (tab) => {
  setActiveTab(tab);

  const sectionMap = {
     Overview: overviewRef,
    "Quick Info": AmenitiesRef,
     Services: AmenitiesRef,
    Photos: photosRef,
    Reviews: ReviewsRef,
  };

  sectionMap[tab]?.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  return (

     <>
      {/* ---------------- TABS ---------------- */}
      <div className="w-full bg-white">
        <div className="flex gap-6 px-4 md:px-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`relative py-4 text-sm md:text-base font-semibold whitespace-nowrap transition
              ${
                activeTab === tab
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 bottom-0 h-[3px] w-full bg-blue-600"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-6 mt-6">

        {/* LEFT MAIN SECTION */}
        <div className="w-full lg:w-3/4">

          {/* ✅ MENU TAB CONTENT */}
          {activeTab === "Menu" ? (
            <MenuCatalog />
          ) : (
            <div className="border border-gray-300 rounded-lg py-6 bg-white">

              {/* MENU HEADER */}
              <div ref={overviewRef} className="flex justify-between items-center px-4 mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Menu
                </h2>
                <button 
                  onClick={() => setActiveTab("Menu")}
                className="text-blue-600 text-sm font-semibold hover:underline">
                  View All
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex gap-4 overflow-x-auto pb-8 border-b px-4 border-gray-300">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-[220px] bg-white rounded-xl shadow-sm border border-gray-300 p-4"
                  >
                    {item.veg && (
                      <img
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/restaurants_menu_veg_icon.png"
                        alt="veg"
                        className="w-4 h-5"
                      />
                    )}
                    <h3 className="font-medium mt-2 text-sm">
                      {item.name}
                    </h3>
                    <div className="mt-3 text-lg font-semibold">
                      ₹ {item.price}
                    </div>
                  </div>
                ))}
              </div>

              {/* SWIPER */}
              <div className="w-full px-5 py-10 border-b border-gray-300">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  breakpoints={{
                    320: { slidesPerView: 1.2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  {galleryImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt="hotel"
                        onClick={() => {
                          setSelectedIndex(index);
                          setIsModalOpen(true);
                        }}
                        className="w-full h-[150px] object-cover rounded-lg cursor-pointer"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* OTHER SECTIONS */}
              <div className="mt-6">

                <div ref={AmenitiesRef}>
                  <AmenitiesSection />
                </div>

                <div ref={photosRef}>
                  <PhotosSection />
                </div>

                <div ref={ReviewsRef}>
                  <ReviewsSection />
                </div>

              </div>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-1/4">
          <AlsoListedIn />
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <GalleryPreviewModal
          images={galleryImages.map((img) => ({ src: img }))}
          selectedIndex={selectedIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
