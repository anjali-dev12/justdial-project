"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPencil } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BsMailboxFlag } from "react-icons/bs";
import { FaMicrosoft, FaChevronDown } from "react-icons/fa";
import {
  Phone,
  MapPin,
  Copy,
  Share2,
  Star,
  Edit,
  Globe,
  ChevronDown,
} from "lucide-react";
import { MdOutlineDirections } from "react-icons/md";
import { useRouter } from "next/navigation";
import SmsEmailModal from "./SmsEmailModal";
import ShareModal from "./ShareModal";

export default function AlsoListedIn() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isFollowOpen, setIsFollowOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "Harsh",
    mobile: "9911494305",
    email: "",
    body: "",
  });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const address = ` Survey No 47, Sai Dhaba, Adharwadi Chowk, Kalyan West,
              Kalyan-421301, Maharashtra`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const latitude = 19.2403;
  const longitude = 73.1305;

  const handleDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, "_blank");
  };
  const categories = [
    {
      name: "Restaurants",
      href: "/Kalyan/Restaurants-in-Kalyan-West/nct-10408936",
    },
    {
      name: "North Indian Restaurants",
      href: "/Kalyan/North-Indian-Restaurants-in-Kalyan-West/nct-10339065",
    },
    {
      name: "Chinese Restaurants",
      href: "/Kalyan/Chinese-Restaurants-in-Kalyan-West/nct-10097618",
    },
    {
      name: "Home Delivery Restaurants",
      href: "/Kalyan/Home-Delivery-Restaurants-in-Kalyan-West/nct-10250324",
    },
    {
      name: "Tandoori Restaurants",
      href: "/Kalyan/Tandoori-Restaurants-in-Kalyan-West/nct-10470790",
    },
    {
      name: "Inexpensive Restaurants Below Rs 500",
      href: "/Kalyan/Inexpensive-Restaurants-Below-Rs-500-in-Kalyan-West/nct-11400089",
    },
    {
      name: "Moderate Restaurants Rs 500 To Rs 1000",
      href: "/Kalyan/Moderate-Restaurants-Rs-500-To-Rs-1000-in-Kalyan-West/nct-11399978",
    },
    {
      name: "Biryani Restaurants",
      href: "/Kalyan/Biryani-Restaurants-in-Kalyan-West/nct-10047018",
    },
    {
      name: "Sea Food Restaurants",
      href: "/Kalyan/Sea-Food-Restaurants-in-Kalyan-West/nct-10424728",
    },
    {
      name: "Mughlai Restaurants",
      href: "/Kalyan/Mughlai-Restaurants-in-Kalyan-West/nct-10331943",
    },
  ];

  const visibleCategories = showAll ? categories : categories.slice(0, 5);

  const timings = [
    { day: "MON (Today)", time: "11:30 am - 12:00 am" },
    { day: "TUE", time: "11:30 am - 12:00 am" },
    { day: "WED", time: "11:30 am - 12:00 am" },
    {
      day: "THU, 19th Feb",
      time: "11:30 am - 12:00 am",
      holiday: "Chhatrapati Shivaji Maharaj Jayanti",
    },
    { day: "FRI", time: "11:30 am - 12:00 am" },
    { day: "SAT", time: "11:30 am - 12:00 am" },
    { day: "SUN", time: "11:30 am - 12:00 am" },
  ];

  const handleEditClick = () => {
    window.open("/jd-bussiness/edit-profile", "_blank");
  };

  return (
    <>
      <div className="w-full lg:flex-shrink-0 lg:basis-[28%] xl:basis-[24%] max-w-full space-y-5">
        {/* Main Card */}
        <div className="bg-white rounded-lg border border-gray-300">
          {/* Contact Section */}
          <div className="p-4 sm:p-5 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Contact</h2>

            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
              <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/blue_call_icon.gif"
                alt="Contact"
                width={25}
                height={25}
              />
              <a
                href="tel:07041620314"
                className="text-blue-600 font-medium hover:underline break-all text-sm sm:text-base"
              >
                07041620314
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div className="p-4 sm:p-5 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold mb-3">Address</h2>

            <p className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">
              {address}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={handleDirections}
                className="flex items-center gap-1 text-blue-600 font-semibold hover:underline text-sm sm:text-base"
              >
                <MdOutlineDirections size={18} />
                Get Directions
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-blue-600 font-semibold cursor-pointer hover:underline text-sm sm:text-base"
              >
                <Copy size={16} />
                Copy
              </button>

              {copied && (
                <div className="absolute mt-7 bg-black font-medium text-white text-[14px] px-5 py-2 rounded shadow-md">
                  Copied Address To Clipboard
                </div>
              )}
            </div>
          </div>

          {/* Extra Actions */}
          <div className="w-full max-w-xl px-4 pb-2 border-b border-gray-300 hover:bg-gray-100 font-bold">
            {/* Header */}
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex items-center justify-between pt-5 pb-2"
            >
              <div className="flex items-center  text-blue-700 gap-2">
                <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/det_time_icon_blue.svg"
                alt="Call Icon"
                width={20}
                height={20}
                className="phone-animate"
              />
                <div>
                  <span className="text-green-700 ">Opens in </span>
                  <span className="text-black font-bold">23 mins</span>
                </div>
              </div>

              <ChevronDown
                size={20}
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="px-2">
                {timings.map((item, index) => (
                  <div
                    key={index}
                    className={`py-1 ${
                      index === 3 ? "font-semibold" : "font-normal"
                    }`}
                  >
                    <div className="flex justify-between">
                      <span>{item.day}</span>
                      <span>{item.time}</span>
                    </div>

                    {item.holiday && (
                      <p className="text-sm text-red-500 mt-1">
                        ({item.holiday}) Business Hours may be affected
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 hover:bg-gray-100 font-bold px-4 py-2 border-b border-gray-300 cursor-pointer">
            <button
              className="flex gap-3"
              onClick={() => router.push("/edit-timing")}
            >
              <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/det-edit2_blue.svg"
                alt="Call Icon"
                width={25}
                height={25}
              />
              Suggest New Timings
            </button>
          </div>

          <div
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 hover:bg-gray-100 font-bold px-4 py-2 border-b border-gray-300 cursor-pointer"
          >
            <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/det_enquiry_icon_blue.svg"
                alt="Email"
                width={25}
                height={25}
              />
            Send Enquiry by Email
          </div>

          <div
            onClick={() => setEmailOpen(true)}
            className="flex items-center gap-3 hover:bg-gray-100 font-bold px-4 py-2 border-b border-gray-300 cursor-pointer"
          >
            <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_smsemail_icon_blue.svg"
                alt="Email"
                width={25}
                height={25}
              />
            Get info via SMS/Email
          </div>

          <div
            onClick={() => setIsShareOpen(true)}
            className="flex items-center gap-3 hover:bg-gray-100 font-bold px-4 py-2 border-b border-gray-300 cursor-pointer"
          >
           <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/det-share2_blue.svg"
                alt="Share"
                width={25}
                height={25}
              />
            Share
          </div>

          <div className="flex items-center gap-3 hover:bg-gray-100 font-bold px-4 py-2 border-b border-gray-300 cursor-pointer ">
            <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/det-ratethis_blue.svg"
                alt="Top rated"
                width={25}
                height={25}
              />
            Tap to rate
          </div>

          <div
            onClick={handleEditClick}
            className="flex items-center gap-3 hover:bg-gray-100 font-bold px-4 py-2 border-b border-gray-300 cursor-pointer"
          >
            <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/det-edit2_blue.svg"
                alt="Edit Listing"
                width={25}
                height={25}
              />
            Edit this Listing
          </div>

          <div
            onClick={() => router.push("/edit-website")}
            className="flex items-center gap-3 hover:bg-gray-100 font-bold px-4 py-2 border-b border-gray-300 cursor-pointer"
          >
            <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/filled_pencil_icon.svg"
                alt="Top rated"
                width={25}
                height={25}
              />
            Add Website
          </div>
          <div
            onClick={() => setIsFollowOpen(!isFollowOpen)}
            className="flex items-center justify-between cursor-pointer py-2 px-2 hover:bg-gray-50"
          >
            <span className="flex gap-4 ml-2  font-bold text-gray-800">
              <Image
                src="http://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/det_followus.svg"
                alt="Follow us"
                width={25}
                height={25}
              />
              Follow us
            </span>

            <FaChevronDown
              className={`transition-transform duration-300 ${
                isFollowOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Dropdown */}
          {isFollowOpen && (
            <div className="bg-white ml-3 pl-6 py-2 space-y-3">
              <a
                href="http://www.facebook.com/saidhabakalyan"
                target="_blank"
                rel="nofollow"
                className="flex items-center gap-3 hover:text-blue-600 transition"
              >
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/follow_facebook.svg"
                  alt="Facebook"
                  height={25}
                  width={25}
                
                />
                <span>Facebook</span>
              </a>

              <a
                href="http://www.twitter.com/saidhabakalyan"
                target="_blank"
                rel="nofollow"
                className="flex items-center gap-3 hover:text-sky-500 transition"
              >
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/follow_twitter.svg"
                  alt="Twitter"
                   height={25}
                  width={25}
                />
                <span>Twitter</span>
              </a>

              <a
                href="http://www.instagram.com/theshettystar"
                target="_blank"
                rel="nofollow"
                className="flex items-center gap-3 hover:text-blue-700 transition"
              >
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/follow_linkedin.svg"
                  alt="LinkedIn"
                  height={25}
                  width={25}
               />
                <span>LinkedIn</span>
              </a>
            </div>
          )}

          <div className="flex items-center gap-3 text-gray-900 pb-5 px-4 py-2 hover:bg-gray-100 font-bold text-xs sm:text-sm">
            <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/gst_icon_blue.svg"
                alt="Follow us"
                width={25}
                height={25}
              />
            GSTIN : 27BTTPS7153R1ZB
          </div>
          
        </div>

        {/* Also Listed In */}
        <div className="bg-white border border-gray-300 rounded-lg p-4 sm:p-5">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Also listed in
          </h2>

          <ul className="space-y-3  ">
            {visibleCategories.map((item, index) => (
              <li
                key={index}
                className="bg-white pl-8 shadow-md rounded-xl py-1"
              >
                <Link
                  href={item.href}
                  className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition break-words"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {categories.length > 5 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-5 text-lg sm:text-base font-medium  py-1  px-2 rounded-xl shadow-md font-semibold  text-blue-600 cursor-pointer"
            >
              {showAll ? "Show Less" : "More"}
            </button>
          )}
        </div>

        {/* Report Error */}
        <div className="bg-white rounded-lg p-4 sm:p-5 border border-gray-300">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 ">
            Report An Error
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mb-5">
            Help us to make Justdial more updated and more relevant for you.
          </p>

          <button
            type="button"
            onClick={() => window.open("/report", "_blank")}
            className="w-full sm:w-auto px-6 py-2 text-sm sm:text-base font-semibold text-blue-600 border border-blue-600 rounded-lg transition cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            Report Now
          </button>
        </div>
      </div>

      <SmsEmailModal isOpen={emailOpen} onClose={() => setEmailOpen(false)} />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 ">
          <div className="flex items-start justify-center px-4  py-18 mt-4">
            <div className="bg-white w-[88%] sm:w-[380px] rounded-2xl shadow-2xl max-h-[70vh] ">
              {/* Header */}
              <div className="flex justify-between items-start p-4  border-b border-gray-300 ">
                <div>
                  <h2 className="text-xl font-semibold">
                    Send Enquiry By Email
                  </h2>
                  <p className="text-lg font-medium mt-1">
                    To - Hotel Sai Dhaba
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Body */}
              <div className="p-4 space-y-3">
                {/* Name */}
                <div>
                  <label className="block text-sm mb-1 text-gray-400">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full text-lg border-b border-gray-300 px-3 py-2"
                    required
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm  text-gray-400">
                    Mobile No.*
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full text-lg border-b border-gray-300  px-3 py-2"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Only India Numbers. SMS to mobile is FREE
                  </p>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-gray-400 ">
                    Email ID*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-lg border-b border-gray-300  px-3 py-1"
                    required
                  />
                </div>

                {/* Body */}
                <div>
                  <label className="block text-sm mb-1">Body*</label>
                  <textarea
                    name="body"
                    maxLength={500}
                    value={formData.body}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 h-28"
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {formData.body.length} / 500
                  </div>
                  <div className="text-xs text-gray-500">
                    * Indicates mandatory fields
                  </div>
                </div>

                {/* Button */}
                <div className="flex items-center justify-center">
                  <button className="w-80 bg-blue-600 text-white py-2 rounded-lg ">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
