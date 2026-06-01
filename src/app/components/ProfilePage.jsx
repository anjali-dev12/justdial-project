"use client";
import { useState } from "react";
import Image from "next/image";
import { Star, X } from "lucide-react";
import Link from "next/link";
import ShareModal from "./ShareModal";
import Rating from '@mui/material/Rating';

export default function ProfilePage() {
  const [ratings, setRatings] = useState([0, 0]);
  const [hover, setHover] = useState([0, 0]);
  const [liked, setLiked] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [value, setValue] = useState(2);

  const handleReviewStarClick = (index, star) => {
    const newRatings = [...ratings];
    newRatings[index] = star;
    setRatings(newRatings);
  };
  const handleHelpful = () => {
    setLiked(!liked);
  };

  return (
    <div className="w-full px-4 md:px-6">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* LEFT SIDEBAR */}
        <div className="md:col-span-3 space-y-4">
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
            <div className="relative">
              <Image
                src="https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user1.png"
                alt="cover"
                width={400}
                height={150}
                className="w-full h-32 md:h-40 object-cover"
              />
            </div>

            {/* User Info */}
            <div className="flex items-center p-4">
              <div className="relative -mt-12 ml-2">
                <Image
                  src="https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user6.png"
                  alt="profile"
                  width={80}
                  height={80}
                  className="rounded-full border-4 border-white"
                />
              </div>

              <div className="ml-4">
                <h2 className="font-semibold text-gray-900 text-lg text-center">
                  vishal parwshwari shinge
                </h2>

                <p className="text-[16px] text-gray-700">1 posts</p>
              </div>
            </div>
          </div>

          {/* Recent Search */}
          <div className="bg-white border border-gray-300 rounded-lg px-3 py-6">
            <h3 className="text-lg font-semibold mb-4">Recent Search</h3>
            {/* Item */}
            <div className="space-y-6">
              {[1, 2].map((item, i) => (
                <div key={i} className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="text-base md:text-lg text-gray-900">
                    {i === 0
                      ? "Golden Wok Fine Dine Restaurant"
                      : "Hotel Gaondevi"}
                  </h4>

                  <p className="text-sm text-gray-500">Kalyan West, Kalyan</p>

                  <p className="text-sm font-semibold mt-2">
                    Rate this Business
                  </p>

                  <div className="flex gap-2 mt-3 flex-wrap">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        onClick={() => handleReviewStarClick(i, star)}
                        onMouseEnter={() => {
                          const newHover = [...hover];
                          newHover[i] = star;
                          setHover(newHover);
                        }}
                        onMouseLeave={() => {
                          const newHover = [...hover];
                          newHover[i] = 0;
                          setHover(newHover);
                        }}
                        className={`w-9 h-9 md:w-[40px] md:h-[40px]
          flex items-center justify-center
          rounded-md cursor-pointer transition
          ${
            star <= (hover[i] || ratings[i])
              ? "bg-[#fe4200]"
              : "border border-gray-300"
          }`}
                      >
                        <Star
                          size={18}
                          className={`${
                            star <= (hover[i] || ratings[i])
                              ? "text-white fill-white"
                              : "text-gray-400"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* POSTS SECTION */}
        <div className="md:col-span-6 p-4 rounded-lg border border-gray-200">
          <div className="flex flex-wrap items-center gap-2 text-sm md:text-lg">
            <span className="text-gray-600 text-lg">
              vishal parwshwari shinge Rated Hotel Sai Dhaba
            </span>

            <span className="text-lg font-semibold text-gray-900">5</span>
            <span className="text-yellow-500 mb-1">⭐</span>
          </div>

          <div className="text-[16px] text-gray-500">1 year ago</div>

          <div className=" bg-gray-50 px-2 pb-8 mt-3 border border-gray-200 rounded-lg">
            {/* Image */}
            <Link href="#">
              <div className="relative mt-1 w-full h-[280px] overflow-hidden">
                <Image
                  src="https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-my1a1p0jx4.jpg"
                  alt="Hotel Sai Dhaba"
                  fill
                  className="object-cover"
                />
              </div>
            </Link>

            {/* Business Details */}
            <div className="mt-4 flex justify-between">
              <div>
                <div className="flex gap-3">
                  <img
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg"
                    alt="Hotel Sai Dhaba"
                    height={25}
                    width={25}
                  />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Hotel Sai Dhaba
                  </h2>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="bg-green-700 text-white px-2 py-1 rounded text-sm font-semibold">
                    3.6
                  </span>

                  <span className="text-yellow-500"><Rating name="read-only" value={4} readOnly /></span>

                  <span className="text-gray-500 text-sm">1570 Ratings</span>
                </div>

                <p className="text-gray-700 mt-2 text-[15px]">
                  Kalyan West, Kalyan
                </p>
              </div>
              {/* Call Button */}
              <div className="mt-4">
                <button className="flex flex-col items-center cursor-pointer space-y-2">
                  <Image
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/resultphone_28nov.svg"
                    alt="Call"
                    width={22}
                    height={22}
                  />
                  <span className="text-[15px] font-semibold text-gray-700">
                    CALL
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-sm text-gray-700 mt-4">
            Sai Dhaba Family Restaurant is excellent! The quantity of food is
            great, and the staff are very friendly. The service is amazing...
            <span className="text-blue-600 cursor-pointer ml-1">Show more</span>
          </p>

          {/* Share Section */}
          <div className="flex gap-6 mt-4 border-t border-gray-200 pt-4 text-sm text-gray-700">
            <button
              onClick={handleHelpful}
              className="flex items-center gap-2 hover:text-black cursor-pointer"
            >
              <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/black_helpful_icon.svg"
                alt="helpful"
                width={22}
                height={22}
              />
              Helpful {liked && "(1)"}
            </button>
            <Link href={`/JdSocial/post/1`}>
              <button className="flex items-center gap-2 hover:text-black cursor-pointer">
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/black_comment_icon.svg"
                  alt="comment"
                  width={22}
                  height={22}
                />
                Comment
              </button>
            </Link>
            <button
              onClick={() => setIsShareOpen(true)}
              className="flex items-center gap-2 hover:text-black cursor-pointer"
            >
              <Image
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/black_share_icon.svg"
                alt="share"
                width={22}
                height={22}
              />
              Share
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="md:col-span-3 bg-white border border-gray-200 rounded-lg p-4 w-full h-fit sticky md:top-4">
          {/* Title */}
          <div className="mt-3">
            <a
              href="https://exoticahousing.in/lp-rmw/exotica-one32/"
              target="_blank"
              className="block text-gray-700 bg-gray-100 px-4 py-3 font-semibold text-base hover:underline"
            >
              Exotica One32 Sector 132
            </a>
          </div>

          {/* Ad Image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <img
              src="https://tpc.googlesyndication.com/simgad/6288030424937838296/14763004658117789537?w=400&h=209&tw=1&q=75"
              alt="Exotica One32"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Button */}
          <a
            href="https://exoticahousing.in/lp-rmw/exotica-one32/"
            target="_blank"
            className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 hover:bg-gray-400 transition"
          >
            Open
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
}
