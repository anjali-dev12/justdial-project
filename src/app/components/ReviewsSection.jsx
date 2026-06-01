"use client";
import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import ShareModal from "./ShareModal";
import Link from "next/link";

const reviewsData = [
  {
    id: 1,
    name: "Vishal Parwshawri Shingle",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user6.png",
    rating: 5,
    date: "21 Oct 2024",
    review:
      "Sai Dhaba Family Restaurant is excellent! The quantity of food is great, and the staff are very friendly.",
    tags: ["Friendly staff", "Great service", "Good quantity"],
  },
  {
    id: 2,
    name: "Vilas Shukla",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user66.png",
    rating: 4,
    date: "18 Jul 2025",
    review:
      "Food quality was too good. We are satisfied. But improve the service.",
    tags: ["Tasty food"],
  },

  {
    id: 3,
    name: "Rohit Kumar",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user66.png",
    rating: 4,
    date: "18 Jul 2025",
    review:
      "Food quality was too good. We are satisfied. But improve the service.",
    tags: ["Tasty food"],
  },

  {
    id: 4,
    name: "Nikita Singh",
    image: "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user66.png",
    rating: 4,
    date: "18 Jul 2025",
    review:
      "Food quality was too good. We are satisfied. But improve the service.",
    tags: ["Tasty food"],
  },
];

const tags = [
  "North Indian Restaurants",
  "Dhaba Restaurants",
  "Home Delivery Restaurants",
];

const searches = [
  "Pure Veg Restaurants",
  "South Indian Restaurants",
  "Non Veg Thali Restaurants",
  "Dhaba Restaurants",
  "Non Veg Restaurants",
  "Malwani Restaurants",
  "Pure Veg Thali Restaurants",
  "Indian Restaurants",
  "Gujarati Thali Restaurants",
  "Maharashtrian Restaurants",
  "Thali Restaurants",
  "Multicuisine Restaurants",
  "Barbeque Restaurants",
  "Breakfast Restaurants",
  "Jain Restaurants",
  "Halal Restaurants",
  "Sizzler Restaurants",
  "Konkani Restaurants",
];

export default function ReviewsSection() {
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Relevant");
   const [liked, setLiked] = useState(false);
  const router = useRouter();
  const tabs = ["Relevant", "Latest", "High to Low"];

  const handleHelpful = () => {
    setLiked(!liked);
  };

  const handleStarClick = (star) => {
    setSelectedRating(star);
    router.push(`/review?rating=${star}`);
  };

  const handleAddReview = () => {
    router.push("/review");
  };
  return (
    <>
      <div className="bg-white rounded-xl p-5  space-y-10">
        {/* Header */}
        <div>
          <h2 className="text-[22px] mx-5 font-semibold text-gray-900">
            Reviews & Ratings
          </h2>

          {/* Overall Rating */}
          <div className="flex items-center mx-5 gap-5 mt-6">
            <div className="bg-green-700 text-white text-3xl font-semibold px-6 py-6 rounded-3xl">
              3.6
            </div>
            <div>
              <p className="text-2xl font-semibold text-gray-900">
                1,555 Ratings
              </p>
              <p className="text-lg  text-gray-700">
                JD rating index based on ratings across the web
              </p>
            </div>
          </div>
        </div>

        {/* Finish Review */}
        <div>
          <h3 className="text-[22px] font-semibold mx-5 text-gray-900">
            Finish your review
          </h3>
          <div className="flex flex-wrap px-5 py-2 gap-20">
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200
        ${
          star <= (hoverRating || selectedRating)
            ? "bg-[#FE4200] border-[#FE4200]"
            : "bg-white border-gray-300"
        }`}
                >
                  <Star
                    size={24}
                    className={`${
                      star <= (hoverRating || selectedRating)
                        ? "text-white fill-white"
                        : "text-gray-400"
                    }`}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={handleAddReview}
              className="text-blue-600 font-semibold border-2 border-blue-600 px-8 py-1 cursor-pointer rounded-md hover:bg-blue-50 transition"
            >
              {" "}
              Add a Review{" "}
            </button>
          </div>
        </div>

        {/* Recent Rating Trend */}
        <div>
          <h3 className="text-[22px] mx-5 font-semibold text-gray-900 mb-4">
            Recent rating trend
          </h3>

          <div className="flex flex-wrap gap-3 mx-5">
            {[1.0, 5.0, 5.0, 4.0, 5.0, 1.0, 5.0, 4.2, 4.5].map(
              (rate, index) => (
                <div
                  key={index}
                  className="flex items-center  gap-3 border px-4 py-0.5 border-gray-300 rounded-2xl text-gray-800 font-medium"
                >
                  {rate}
                  <Star size={16} className="fill-orange-500 text-orange-500" />
                </div>
              ),
            )}
          </div>
        </div>

        {/* User Reviews */}
        <div>
          <h3 className="text-lg font-semibold mx-5 text-gray-900 mb-6">
            User Reviews
          </h3>

          <div className="space-y-8 ">
            <ul className="flex gap-6">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  role="radio"
                  aria-checked={activeTab === tab}
                  tabIndex={0}
                  aria-label={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 cursor-pointer text-sm font-normal border border-gray-300  px-3 py-2 rounded
          ${
            activeTab === tab
              ? "bg-blue-100 text-blue-600 border-blue-500"
              : "bg-gray-50 text-gray-700 border-gray-300 hover:text-blue-500"
          }`}
                >
                  {tab}
                </li>
              ))}
            </ul>

            {(showAllReviews ? reviewsData : reviewsData.slice(0, 2)).map(
              (item) => (
                <div key={item.id} className="border-b border-gray-300 pb-6">
                  {/* Profile */}
                  <div className="flex items-center gap-4 cursor-pointer">
                    <Link href="/JdSocial/profile/Vishal-Parwshwari">
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={50}
                      width={50}
                      className="mx-5 object-cover"
                    />
                    </Link>
                    <div>
                      <h4 className="text-gray-900 text-lg">{item.name}</h4>
                    </div>
                    <p className="text-sm text-gray-500 ">{item.date}</p>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mx-5 my-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={22}
                        className={`${
                          star <= item.rating
                            ? "fill-orange-500 text-orange-500"
                            : "text-gray-300 "
                        }`}
                      />
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-1 bg-white text-gray-600 mx-5 text-xs px-3 py-1 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100 "
                      >
                        <Image
                          src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/positive_tag.svg"
                          alt="tag"
                          width={22}
                          height={22}
                        />
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Review Text */}
                  <p className="mt-4 text-gray-700 text-sm mx-5 leading-relaxed">
                    {item.review}
                  </p>

                  {/* Social Actions */}

                  <div className="flex gap-25 mt-4 mx-5 text-lg text-gray-800 ">
                    <button 
                     onClick={handleHelpful}
                    className="flex items-center gap-2 hover:text-black cursor-pointer">
                      <Image
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/black_helpful_icon.svg"
                        alt="helpful"
                        width={22}
                        height={22}
                      />
                      Helpful {liked && "(1)"}
                    </button>
    
                    <Link href={`/JdSocial/post/${item.id}`}>

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
                    className="flex items-center gap-2 hover:text-black cursor-pointer">
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
              ),
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="text-blue-600 font-bold text-[18px] px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              {showAllReviews ? "Show Less" : "Read all reviews"}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 border border-gray-300 p-5 mb-5">
        {/* Heading */}
        <div className="pb-5">
          <h2 className="text-xl font-semibold text-gray-900">
            People found Hotel Sai Dhaba by searching for
          </h2>
        </div>

        {/* Tags */}
        <ul className="flex flex-wrap gap-3">
          {tags.map((tag, index) => (
            <li key={index}>
              <button
                className="px-4 py-2 text-base font-normal text-gray-900 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                aria-label={tag}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 mb-6 mt-4">
        {/* Heading */}
        <div className="pb-5">
          <h2 className="text-xl font-semibold text-gray-900">
            Related Searches
          </h2>
        </div>

        {/* List */}
        <ul className="flex flex-wrap gap-x-2 gap-y-1">
          {searches.map((item, index) => (
            <li key={index}>
              <button
                aria-label={item}
                className="text-[13px] text-gray-900 hover:text-blue-600 transition-colors duration-200"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      </div>
    </>
  );
}
