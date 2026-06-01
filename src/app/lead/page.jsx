"use client";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuMessageSquareMore, LuCircleChevronRight } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { IoClose } from "react-icons/io5";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function LeadDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Container */}
      <div className="max-w-6xl mx-auto bg-white border border-gray-200">

        {/* Header */}
        <div className="sticky top-18 bg-white z-50 border-b border-gray-200 px-4 md:px-6 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-lg md:text-2xl font-semibold">
              Acme Web Technology
            </h1>
            <p className="text-gray-500 text-xs md:text-sm">
              New Ashok Nagar
            </p>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 bg-blue-500 text-white rounded-md text-xs md:text-sm cursor-pointer">
              <TfiHeadphoneAlt size={14} />
              <span className="hidden sm:inline">Help</span>
            </button>

            <span className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
              <BsThreeDotsVertical size={18} />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 md:px-6 py-4 bg-blue-50">

          {/* Overall Performance */}
          <h2 className="text-base md:text-lg font-semibold mb-4">
            Overall Performance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Cards */}
            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">Total Enquiries</p>
              <h3 className="text-xl md:text-2xl font-bold mt-2">2,583</h3>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">Responded</p>
              <h3 className="text-xl md:text-2xl font-bold mt-2">1,688</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600 mt-2 inline-block">
                65% Good
              </span>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">Response Time</p>
              <h3 className="text-xl md:text-2xl font-bold mt-2">2h: 3m</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600 mt-2 inline-block">
                Poor
              </span>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <p className="text-gray-500 text-sm">Quotation Request</p>
              <h3 className="text-xl md:text-2xl font-bold mt-2">120</h3>
            </div>

            <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
              <LuMessageSquareMore size={24} className="cursor-pointer"/>
              <p>Get Reviews & Ratings</p>
            </div>

            <div className="bg-white rounded-xl shadow p-5 flex flex-col gap-2">
              <LuCircleChevronRight size={24} className="cursor-pointer"/>
              <p>View More</p>
            </div>

          </div>

          {/* Today's Performance */}
          <h2 className="text-base md:text-lg font-semibold mt-8 mb-4">
            Today's Performance
          </h2>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold">12 mins</h3>
            <p className="text-gray-500">Response Time</p>
          </div>

          {/* Swiper */}
          <div className="my-6">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2 },
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop
            >
              <SwiperSlide>
                <img src="https://akam.cdn.jdmagicbox.com/images/email_banner/Website_BannerStrip_31dec25.png" className="rounded-xl h-40 w-full object-cover"/>
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://akam.cdn.jdmagicbox.com/images/email_banner/Festive_Greeting_Ram_Navami_2026_LEADS_Mobile_1.png" className="rounded-xl h-40 w-full object-cover"/>
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://akam.cdn.jdmagicbox.com/images/email_banner/Festive_Greeting_Ram_Navami_2026_LEADS_Mobile_1.png" className="rounded-xl h-40 w-full object-cover"/>
              </SwiperSlide>

              <SwiperSlide>
                <img src="https://akam.cdn.jdmagicbox.com/images/email_banner/Festive_Greeting_Ram_Navami_2026_LEADS_Mobile_1.png" className="rounded-xl h-40 w-full object-cover"/>
              </SwiperSlide>

            </Swiper>
          </div>

          {/* Target Learners */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between gap-3 items-start sm:items-center">
            <p className="text-gray-700 font-medium">
              Who are the target learners?
            </p>

            <div className="flex gap-3">
              <button className="border border-blue-400 text-blue-500 px-3 py-1 rounded-md text-sm cursor-pointer">
                Add Now
              </button>
              <IoClose size={20} className="cursor-pointer"/>
            </div>
          </div>

          {/* Recent Enquiries */}
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-base md:text-lg font-semibold">
              Recent Enquiries
            </h2>
            <span className="text-blue-500 text-sm">View all</span>
          </div>

          {/* Enquiry Card */}
          <div className="bg-white rounded-xl shadow p-4 mt-4 flex flex-col md:flex-row justify-between gap-4">
            
            <div>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                READ
              </span>

              <h3 className="font-semibold mt-2">Kajal Soni</h3>
              <p className="text-sm text-gray-500">Delhi</p>
            </div>

            <div className="flex flex-col md:items-end">
              <p className="text-sm text-gray-400 mb-2">Today 11:14 am</p>

              <div className="flex gap-2">
                <button className="bg-blue-500 text-white p-2 rounded-md">
                  <FaPhoneAlt size={14}/>
                </button>
                <button className="bg-green-500 text-white p-2 rounded-md">
                  <FaWhatsapp size={14}/>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}