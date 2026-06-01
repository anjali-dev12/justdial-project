"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  const [location, setLocation] = useState("Kalyan");
  const [search, setSearch] = useState("Hotel Sai Dhaba");
  const [showLang, setShowLang] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-[rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between px-6 py-4">
        {/* 🔹 Center Search Section */}
        <div className="flex gap-5 w-[60%] text-gray-500">
          {/* 🔹 Logo */}

          <Link href="/" className="flex items-center">
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg"
              alt="logo"
              width={100}
              height={30}
            />
          </Link>

          {/* 📍 Location */}
          <div className="flex border border-gray-300 gap-1 pl-3 py-3 w-[35%] bg-gray-50 rounded-md  shadow-md">
            <CiLocationOn size={19} />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full outline-none text-sm text-black"
              placeholder="Select Location"
            />
          </div>

          {/* 🔍 Search */}
          <div className="flex items-center w-[43%] relative px-3 py-2 bg-white border border-gray-300 rounded-md shadow-md">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-sm text-black"
              placeholder="Search"
            />

            {/* ❌ Close (same as before) */}
            {search && (
              <span
                onClick={() => setSearch("")}
                className="absolute right-20 text-[18px] cursor-pointer text-gray-500"
              >
                ✖
              </span>
            )}

            {/* 🎤 Mic GIF */}
            <div className="cursor-pointer">
              <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/jdvoice_mic.gif?v=1.0"
                alt="mic"
                width={20}
                height={20}
              />
            </div>

            {/* 🔍 Search Icon Button */}
            <button className="ml-3 bg-orange-500 hover:bg-orange-600 text-white p-1 rounded-md">
              <IoSearch size={19} />
            </button>
          </div>
        </div>

        {/* 🔹 Right Section */}
        <div className="flex items-center gap-3">
          {/* 🌐 Language */}
          <div className="relative ">
            <div
              onClick={() => setShowLang(!showLang)}
              className="cursor-pointer flex items-center gap-1"
            >
              <div className="flex gap-1 mt-2 p-1 rounded text-blue-600 hover:bg-gray-50">
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/nav_language_icon.svg"
                  alt="add language"
                  width={19}
                  height={19}
                />
                <span className="text-[15px] text-blue-800">EN</span>
                <span className="mt-1">
                  <FaAngleDown />
                </span>
              </div>
            </div>

            {showLang && (
              <div className="absolute top-10 right-0 left-1 bg-white text-black rounded-md shadow-md w-30 z-50">
                {[
                  "English - EN",
                  "हिंदी - HI",
                  "मराठी - MR",
                  "বাংলা - BN",
                  "ગુજરાતી - GU",
                  "ಕನ್ನಡ - KN",
                  "தமிழ் - TA",
                ].map((lang, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href="/lead" className="hover:underline">
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/leads-button-animation.GIF"
              alt="add lead"
              width={80}
              height={80}
            />
          </Link>

          {/* 🏢 My Business */}
          <Link href="/mybusiness">
            <div className="flex flex-wrap gap-1 bg-[#0f4a8a] text-white text-[14px] border border-[#0f4a8a] pr-2 rounded-md">
              <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/nav_mybusiness_icon_10nov25.gif"
                alt="add lead"
                width={30}
                height={30}
              />
              <span className="mt-1">My Business</span>
            </div>
          </Link>

          {/* 🔔 Notification */}
          <Link href="/notifications">
          <span className="cursor-pointer">
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/notify_icon.svg"
              alt="add lead"
              width={30}
              height={30}
            />
          </span>
          </Link>

          {/* 👤 Profile */}
          <Link href="/Beauty" className="hover:underline">
          <div className="relative cursor-pointer">
            <Image
              src="https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user29.png"
              alt="user"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="absolute -top-1 -right-1 bg-red-600 text-xs text-white px-1 rounded-full font-semibold">
              1
            </span>
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
