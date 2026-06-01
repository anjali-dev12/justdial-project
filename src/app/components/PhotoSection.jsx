"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Play, ThumbsUp, ThumbsDown } from "lucide-react";

import UploadPhotoModal from "./UploadPhotoModal";

import { useState, useEffect } from "react";

const photosData = [
  {
    title: "All",
    count: "145 Photos / Videos",
    image:
      "https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-my1a1p0jx4-250.jpg",
  },
  {
    title: "Ambience",
    count: "11 Photos",
    image:
      "https://content.jdmagicbox.com/v2/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-mumbai-north-indian-restaurants-jxuei5yr72-250.jpg",
  },
  {
    title: "Food",
    count: "117 Photos",
    image:
      "https://content.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-vi815svaly-250.jpg",
  },
  {
    title: "By Owner",
    count: "5 Photos",
    image:
      "https://content.jdmagicbox.com/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-mme66709752p8os-250.jpg",
  },
  {
    title: "By User",
    count: "8 Photos",
    image:
      "https://content.jdmagicbox.com/v2/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-mumbai-north-indian-restaurants-77l89iv7nz-250.jpg",
  },
];

const featuredVideos = [
  {
    id: 1,
    thumbnail:
      "https://stream.jdmagicbox.com/thumbnail/022pxx22.xx22.130924120042.y5s2/022pxx22.xx22.130924120042.y5s2_qsahr9x5noeyvjg.jpg",
    videoUrl:
      "https://www.justdial.com/Kalyan/Hotel-Sai-Dhaba-Adharwadi-Chowk-Kalyan-West/022PXX22-XX22-130924120042-Y5S2_BZDET/reels?vid=6040440",
  },
  {
    id: 2,
    thumbnail:
      "https://stream.jdmagicbox.com/thumbnail/022pxx22.xx22.130924120042.y5s2/022pxx22.xx22.130924120042.y5s2_ytetdelbkcptb8f.jpg",
    videoUrl:
      "https://www.justdial.com/Kalyan/Hotel-Sai-Dhaba-Adharwadi-Chowk-Kalyan-West/022PXX22-XX22-130924120042-Y5S2_BZDET/reels?vid=6040440",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Vishal Parwshwari Shinge",
    image:
      "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user6.png?w=256&q=75",
    review:
      "Sai Dhaba Family Restaurant is excellent! The quantity of food is great, and the staff are very friendly. The service is amazing. Highly recommended!",
    time: "02:15 AM",
    date: "21 Oct, 2024",
  },
  {
    id: 2,
    name: "Rahul Patil",
    image:
      "https://content.jdmagicbox.com/mobile-t/icon/jdsocial/user5.png?w=256&q=75",
    review:
      "Food quality is very good and ambience is nice. Service was quick and staff were cooperative.",
    time: "08:30 PM",
    date: "18 Oct, 2024",
  },
];

const likes = [
  "Affordable prices",
  "Good quantity of food",
  "Neat and clean kitchen",
  "Tasty food",
  "Family friendly environment",
];

const dislikes = [
  "Terrible customer service",
  "Long wait times for delivery and in-between food service",
  "Rude staff",
  "Parking issues",
];

export default function PhotosSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showMoreLikes, setShowMoreLikes] = useState(false);
  const [showMoreDislikes, setShowMoreDislikes] = useState(false);
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
  return (
    <>
      <div className=" border-b border-gray-300 mt-4 p-6">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Photos</h2>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {photosData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer group">
                <div className="relative h-40 w-full rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="mt-3">
                  <p className="text-base font-semibold text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">{item.count}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Upload Button */}
        <div className="mt-8">
          <button
            onClick={() => setShowUploadModal(true)}
            className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Upload Photos
          </button>
        </div>

        <UploadPhotoModal
          isOpen={showUploadModal}
          onClose={() => setShowUploadModal(false)}
        />
      </div>

      <div className="mt-4 p-6 min-h-[300px] border-b border-gray-300">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-900">
            Featured Stories
          </h2>
        </div>

        {/* Carousel */}

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={4}
        >
          {featuredVideos.map((video) => (
            <SwiperSlide key={video.id}>
              <div
                className="relative group cursor-pointer"
                onClick={() => setActiveVideo(video.videoUrl)}
              >
                <img
                  src={video.thumbnail}
                  className="w-full h-56 object-cover rounded-lg"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-full">
                    <Play size={24} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
            <div className="relative w-[90%] md:w-[70%] h-[70vh] bg-black rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 text-white text-lg z-50"
              >
                ✕
              </button>

              <iframe
                src={activeVideo}
                className="w-full h-full"
                allow="autoplay"
              />
            </div>
          </div>
        )}
      </div>

      <div className="bg-white mt-3 p-6">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-900">
            Our Happy Customers
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <h3 className="text-base font-semibold text-gray-900 line-clamp-1">
                    {item.name}
                  </h3>
                </div>

                {/* Review Text */}
                <p className="mt-4 text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {item.review}
                </p>

                {/* Time & Date */}
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                  <span>{item.time}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className=" mt-4  border-b border-gray-300 p-6">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-900">Key Insights</h2>
        </div>

        <div className="rounded-lg bg-[#f7fbff] py-6 px-5">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Likes Section */}
            <div className="bg-white rounded-lg border  border-dashed mt-4 border-gray-300 py-5 px-3">
              <div className="flex items-center gap-2">
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/insight_like.svg"
                  alt="like"
                  width={25}
                  height={25}
                />

                <h3 className="text-lg font-semibold text-green-500">
                  What users liked
                </h3>
              </div>

              <ul className="mt-4 space-y-2">
                {(showMoreLikes ? likes : likes.slice(0, 3)).map((item, i) => (
                  <li key={i} className="text-sm text-gray-800">
                    • {item}
                  </li>
                ))}
              </ul>

              {likes.length > 3 && (
                <button
                  onClick={() => setShowMoreLikes(!showMoreLikes)}
                  className="mt-4 text-sm text-blue-600 hover:underline"
                >
                  {showMoreLikes ? "Show Less" : "More"}
                </button>
              )}
            </div>

            {/* Dislikes Section */}
            <div className="bg-white rounded-lg border  border-dashed mt-4 border-gray-300 py-5 px-3">
              <div className="flex items-center gap-2">
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/insight_improved.svg"
                  alt="dislike"
                  width={20}
                  height={20}
                />

                <h3 className="text-lg font-semibold text-red-600">
                  What can be improved
                </h3>
              </div>

              <ul className="mt-4 space-y-2">
                {(showMoreDislikes ? dislikes : dislikes.slice(0, 3)).map(
                  (item, i) => (
                    <li key={i} className="text-sm text-gray-800">
                      • {item}
                    </li>
                  ),
                )}
              </ul>

              {dislikes.length > 3 && (
                <button
                  onClick={() => setShowMoreDislikes(!showMoreDislikes)}
                  className="mt-4 text-sm text-blue-600 hover:underline"
                >
                  {showMoreDislikes ? "Show Less" : "More"}
                </button>
              )}
            </div>
          </div>
          <p className="mt-6 text-[12px] text-gray-900">
            *BETA VERSION - Likes and suggested improvements are based on the
            reviews across the web
          </p>
        </div>
      </div>
    </>
  );
}
