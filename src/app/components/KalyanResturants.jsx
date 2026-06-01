"use client";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Star, X } from "lucide-react";
import ImageGalleryPage from "./ImageGalleryPage";
import UploadPhotoModal from "./UploadPhotoModal";
import { useRouter } from "next/navigation";
import OrderOnlineModal from "./OrderOnlineModal";

const KalyanRestuarants = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const shareUrl = "https://jsdl.in/RSL-SIW1771315905";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shareUrl);
    alert("Link copied!");
    setOpen(false);
  };

  const images = Array.from({ length: 139 }, (_, i) => ({
    id: i,
    src: "https://via.placeholder.com/400",
  }));

  const [showGallery, setShowGallery] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);

  useEffect(() => {
    if (showUploadModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showUploadModal]);

  /* ESC key close */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowUploadModal(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (showGallery) {
    return (
      <ImageGalleryPage images={images} onClose={() => setShowGallery(false)} />
    );
  }

  const breadcrumbs = [
    {
      label: "Kalyan",
      href: "https://www.justdial.com/Kalyan",
    },
    {
      label: "North Indian Restaurants In Kalyan",
      href: "https://www.justdial.com/Kalyan/North-Indian-Restaurants/nct-10339065",
    },
    {
      label: "North Indian Restaurants in Kalyan West",
      href: "https://www.justdial.com/Kalyan/North-Indian-Restaurants-in-Kalyan-West/nct-10339065",
    },
    {
      label: "Hotel Sai Dhaba",
      href: "https://www.justdial.com/Kalyan/Hotel-Sai-Dhaba-Adharwadi-Chowk-Kalyan-West/022PXX22-XX22-130924120042-Y5S2_BZDET",
    },
  ];

  const previewImages = [
    {
      src: "https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-my1a1p0jx4.jpg",
      href: "#",
    },
    {
      src: "https://content.jdmagicbox.com/v2/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-mumbai-north-indian-restaurants-77l89iv7nz.jpg",
      href: "#",
    },
    {
      src: "https://content.jdmagicbox.com/v2/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-mumbai-north-indian-restaurants-jxuei5yr72.jpg",
      href: "#",
    },

    {
      src: "https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-t9acx500b9.jpg",
      href: "#",
    },

    {
      src: "https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-vi815svaly.jpg",
      href: "#",
      more: true,
    },
    {
      src: "https://content.jdmagicbox.com/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-mme66709752p8os.jpg",
      href: "#",
      upload: true,
    },
  ];

  const handleReviewStarClick = (star) => {
    setRating(star);
    router.push(`/review?rating=${star}`);
  };

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="w-full pt-4 sm:pt-5 mt-3 border-t border-gray-300"
      >
        <ul className="flex flex-wrap items-center px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-[13px] font-normal text-gray-500 gap-y-2">
          {breadcrumbs.map((item, index) => (
            <li
              key={index}
              className="flex items-center break-words max-w-full"
            >
              <Link
                href={item.href}
                className="text-gray-800 hover:text-green-600 transition-colors duration-200"
              >
                {item.label}
              </Link>

              {index !== breadcrumbs.length - 1 && (
                <span className="mx-1 text-gray-400 flex items-center">
                  <RiArrowRightSLine size={16} />
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 px-3 sm:px-4">
        {/* Left */}
        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[300px] rounded-tl-xl overflow-hidden">
          <img
            src={previewImages[0].src}
            alt="left"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center */}
        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[300px] overflow-hidden">
          <img
            src={previewImages[1].src}
            alt="center"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-1 h-[220px] sm:h-[260px] md:h-[320px] lg:h-[300px]">
          <div className="relative overflow-hidden h-full">
            <img
              src={previewImages[2].src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative rounded-tr-xl overflow-hidden h-full">
            <img
              src={previewImages[3].src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* +139 More */}
          <div className="relative overflow-hidden h-full">
            <img
              src={previewImages[4].src}
              alt=""
              className="w-full h-full object-cover"
            />

            <div
              onClick={() => setShowGallery(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer text-center px-2"
            >
              +139
              <span className="ml-2 text-sm sm:text-base md:text-lg font-medium">
                More
              </span>
            </div>
          </div>

          {/* Add More */}
          <div
            onClick={() => setShowUploadModal(true)}
            className="relative overflow-hidden cursor-pointer group"
          >
            <img
              src={previewImages[5].src}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/50 text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center px-2">
              <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/add_photos_white.svg"
                alt="add photo"
                width={50}
                height={50}
              />

              <span>Add More Photo</span>
            </div>
          </div>
        </div>
      </div>

      <UploadPhotoModal
        isOpen={showUploadModal}
        onClose={() => setShowUploadModal(false)}
      />

      <div className="w-full px-4  pb-6 scroll-mt-[120px] ">
        <div className="flex flex-col lg:flex-row gap-6 border border-gray-200 rounded-bl-lg rounded-br-lg px-5 py-5">
          {/* LEFT LOGO */}
          <div className="w-full lg:w-[100px] flex-shrink-0">
            <div className="relative w-[100px] h-[100px] rounded-lg py-4 overflow-hidden border border-gray-400">
              <img
                src="https://content.jdmagicbox.com/comp/thane/s2/022pxx22.xx22.130924120042.y5s2/logo/bbzfmqhjgf8ibnphpuimsrtkvs7dj3di.jpg"
                alt="Hotel Sai Dhaba"
                className="object-cover"
              />
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="flex-1">
            {/* Title */}
            <div className="flex  gap-2">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg"
                alt="Hotel Sai Dhaba"
                height={25}
                width={25}
              />
              <h1 className="text-2xl font-semibold text-gray-900">
                Hotel Sai Dhaba
              </h1>
            </div>

            {/* Rating Section */}
            <div className="flex items-center gap-4 mt-3  flex-wrap">
              <div className="bg-green-600 text-white px-3 py-1 rounded-md font-semibold flex items-center gap-1">
                3.6 <FaStar size={14} />
              </div>

              <div className="text-gray-600">1,554 Ratings</div>

              <div className="flex gap-2 text-gray-900 font-medium">
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/claimed_icon.svg"
                  alt="Call Icon"
                  width={20}
                  height={20}
                />
                Claimed
              </div>
            </div>

            {/* Address & Info */}
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/results_locat_icon.svg"
                  alt="location"
                  width={20}
                  height={20}
                />
                <span className="text-gray-900 font-bold">
                  Kalyan West, Kalyan
                </span>
                <span className="text-gray-400">•</span>

                <span className="text-green-600 font-medium">Open</span>
                <span> until 12:00 am</span>
                <span className="text-gray-400">•</span>

                <span>17 Years in Business</span>
              </div>

              <div className="flex items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/pricetag.svg"
                    alt="price"
                    width={20}
                    height={20}
                  />
                  <span>Price for two ₹550</span>
                </div>

                <span className="text-gray-400">•</span>

                <div className="flex items-center gap-2">
                  <Image
                    src="https://akam.cdn.jdmagicbox.com/images/icons/iphone/new/icd-hi-tg-parking-available.png"
                    alt="parking"
                    width={20}
                    height={20}
                  />
                  <span>Parking Available</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <button className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 cursor-pointer rounded-md font-semibold hover:bg-green-700 transition">
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/call_white_icon.svg"
                  alt="Call Icon"
                  width={20}
                  height={20}
                  className="phone-animate"
                />
                07041620314
              </button>

              <button
                onClick={() => setShowOrderModal(true)}
                className="bg-blue-600 text-white px-5 py-2 rounded-md cursor-pointer font-semibold hover:bg-blue-700 transition"
              >
                Order Online
              </button>

              <button className="flex items-center gap-2 border border-green-900 px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition cursor-pointer">
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/squarewhatsapp_icon.svg"
                  alt="Whatsapp"
                  width={25}
                  height={25}
                />{" "}
                WhatsApp
              </button>

              <div className="relative">
                <button
                  onClick={() => setOpen(!open)}
                  className="border border-gray-400 p-3 rounded-md cursor-pointer hover:bg-gray-100"
                >
                  <Image
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/share_black_icon.svg"
                    alt="Share"
                    width={25}
                    height={25}
                  />
                </button>

                {/* Popover */}
                {open && (
                  <div className="absolute right-0 mt-2 w-75 bg-white shadow-2xl rounded-xl  px-4 z-50">
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-black"
                    >
                      <X size={18} />
                    </button>

                    <ul className="space-y-4 mt-4 flex  gap-3">
                      {/* Facebook */}
                      <li>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                          target="_blank"
                          rel="nofollow"
                          className=" p-2 rounded-lg transition"
                        >
                          <Image
                            src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/facebook_share_icon.svg"
                            alt="Share"
                            width={35}
                            height={35}
                          />
                          <span className="text-sm font-bold text-gray-800">
                            Facebook
                          </span>
                        </a>
                      </li>

                      {/* WhatsApp */}
                      <li>
                        <a
                          href={`https://web.whatsapp.com/send?text=${shareUrl}`}
                          target="_blank"
                          rel="nofollow"
                          className="  p-2 rounded-lg transition"
                        >
                          <Image
                            src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/whatsapp_share_icon.svg"
                            alt="Share"
                            width={35}
                            height={35}
                          />
                          <span className="text-sm  font-bold text-gray-800">
                            WhatsApp
                          </span>
                        </a>
                      </li>

                      {/* Copy Link */}
                      <li>
                        <button
                          onClick={handleCopy}
                          className=" px-2 mt-6 rounded-lg transition"
                        >
                          <Image
                            src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/copy_share_icon.svg"
                            alt="Share"
                            width={35}
                            height={35}
                          />
                          <span className="text-sm font-bold text-gray-800">
                            Copy Link
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <Link
                href="/jd-bussiness/edit-profile"
                target="_blank"
                className="border border-gray-400 p-2 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/edit_black_icon.svg"
                  alt="Edit"
                  width={25}
                  height={25}
                />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[350px]  p-4 flex flex-col">
            {/* Top Categories */}
            <div className="flex gap-2 text-sm text-gray-600">
              <span className="bg-gray-100 px-2 py-1 rounded-md text-[12px] font-bold">
                North Indian Restaurants
              </span>

              <span className="bg-gray-100 px-2 py-1 rounded-md text-[12px] font-bold">
                Restaurants
              </span>

              <span className="ml-3">
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/details_bookmark.svg"
                  alt="Edit"
                  width={20}
                  height={20}
                />
              </span>
            </div>

            {/* Gap */}
            <div className="my-14"></div>

            <div className="ml-24">
              <div className="font-bold text-lg text-gray-800 mb-2">
                Click to review
              </div>

              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div
                    key={star}
                    onClick={() => handleReviewStarClick(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    className={`
        w-[40px] h-[40px] 
        flex items-center justify-center
        rounded-md cursor-pointer
        transition-all duration-200
        ${star <= (hover || rating) ? "bg-[#fe4200]" : "border border-gray-300"}
      `}
                  >
                    <Star
                      size={20}
                      className={`transition-all duration-200 ${
                        star <= (hover || rating)
                          ? "text-white fill-white"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrderOnlineModal
        isOpen={showOrderModal}
        onClose={() => setShowOrderModal(false)}
      />
    </>
  );
};

export default KalyanRestuarants;
