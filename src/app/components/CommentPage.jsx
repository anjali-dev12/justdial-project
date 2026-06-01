"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import ShareModal from "./ShareModal";

export default function CommentPage() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const rating = 5;

  const handleHelpful = () => {
    setLiked(!liked);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-6 lg:px-8 pt-6 border-b border-gray-300">

  {/* LEFT SECTION */}
  <div className="flex-1 bg-white p-4 md:p-6 rounded-lg border border-gray-300">
    
    {/* Profile */}
    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
    <Link href="/JdSocial/profile/Vishal-Parwshwari">
      <Image
        src="https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user6.png"
        alt="user"
        width={46}
        height={46}
        className="rounded"
      />
     </Link>
      <div className="flex-1">
        <h3 className="text-base md:text-lg font-semibold capitalize">
          vishal parwshwari shinge
        </h3>
        <p className="text-sm text-gray-600">
          1 review, 0 followers
        </p>
      </div>

      <span className="text-xs md:text-sm text-gray-500">
        21 Oct 2024
      </span>
    </div>

    {/* Rating */}
    <div className="flex flex-wrap items-center gap-2 mt-6">
      <div className="bg-green-700 text-white px-3 py-1 rounded font-semibold text-sm">
        {rating}.0
      </div>

      <div className="flex gap-1 ml-0 sm:ml-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            className={
              star <= rating
                ? "fill-orange-500 text-orange-500"
                : "text-gray-300"
            }
          />
        ))}
      </div>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mt-4">
      {["Friendly staff", "Great service", "Good quantity"].map(
        (tag, i) => (
          <span
            key={i}
            className="flex items-center gap-1 bg-white text-gray-600 border border-gray-300 text-xs md:text-sm px-3 py-1 rounded-full hover:bg-gray-50"
          >
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/positive_tag.svg"
              alt="tag"
              width={18}
              height={18}
            />
            {tag}
          </span>
        )
      )}
    </div>

    {/* Review */}
    <p className="mt-4 text-gray-700 text-sm md:text-base">
      Sai Dhaba Family Restaurant is excellent! The quantity of food is
      great and the staff are very friendly. Highly recommend!
    </p>

    {/* Social Actions */}
    <div className="flex flex-wrap gap-6 mt-4 text-sm md:text-lg text-gray-800">
      
      <button
        onClick={handleHelpful}
        className="flex items-center gap-2 hover:text-black"
      >
        <Image
          src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/black_helpful_icon.svg"
          alt="helpful"
          width={20}
          height={20}
        />
        Helpful {liked && "(1)"}
      </button>

      <button className="flex items-center gap-2 hover:text-black">
        <Image
          src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/black_comment_icon.svg"
          alt="comment"
          width={20}
          height={20}
        />
        Comment
      </button>

      <button
        onClick={() => setIsShareOpen(true)}
        className="flex items-center gap-2 hover:text-black"
      >
        <Image
          src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/black_helpful_icon.svg"
          alt="share"
          width={20}
          height={20}
        />
        Share
      </button>
    </div>

    {/* Comment Box */}
    <div className="bg-gray-50 mt-5 p-3 md:p-4">
      <div className="flex items-center gap-2 md:gap-3 bg-white border border-gray-300 rounded-lg px-3 py-2">
        
        <Image
          src="https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user29.png"
          alt="user"
          width={36}
          height={36}
          className="rounded"
        />

        <input
          type="text"
          placeholder="Add a comment"
          className="flex-1 text-sm md:text-base outline-none"
        />

        <button className="font-semibold text-gray-500 text-sm md:text-base px-2 md:px-4 cursor-pointer">
          Post
        </button>
      </div>
    </div>
  </div>

  {/* RIGHT SIDEBAR */}
  <div className="w-full lg:w-[380px] xl:w-[420px]">
    
    {/* Company Info */}
    <div className="bg-gray-50 rounded-lg border border-gray-300 p-4 md:p-5">
      
      <Link
        href="https://www.justdial.com/Mumbai/Hotel-Sai-Dhaba/022PXX22-XX22-130924120042-Y5S2_BZDET"
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative w-full sm:w-24 h-40 sm:h-24">
          <Image
            src="https://content.jdmagicbox.com/checkin/mumbai/022PXX22.XX22.130924120042.Y5S2.jpg"
            alt="Hotel Sai Dhaba"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-base md:text-lg font-semibold text-gray-900">
            Hotel Sai Dhaba
          </h2>

          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="bg-green-700 text-white text-xs md:text-sm px-2 py-1 rounded">
              3.6
            </span>

            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={
                    star <= rating
                      ? "fill-orange-500 text-orange-500"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            <span className="text-gray-500 text-xs md:text-sm">
              1570 Ratings
            </span>
          </div>

          <p className="text-gray-600 text-sm md:text-base mt-2">
            Kalyan West, Kalyan
          </p>
        </div>
      </Link>

      {/* Call Button */}
      <a
        href="tel:07041620314"
        className="block text-center bg-green-700 text-white font-bold py-2 mt-4 rounded-lg hover:bg-green-600"
      >
        07041620314
      </a>
    </div>

    {/* Ad Banner */}
    <div className="mt-6 flex justify-center mb-4">
      <Image
        src="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/Google_ads_banner_300x250_17_06_2025.png"
        alt="Ad Banner"
        width={300}
        height={250}
        className="rounded-md w-full max-w-[300px]"
      />
    </div>
  </div>

  <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
</div>
  );
}
