"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa"

export default function GallerySection() {
  const router = useRouter();

const handleBack = () => {
  router.push("/kalyan");
};

  const handleClick = () => {
    router.push("/edit-image");
  };
 return (
    <>
    <div className="flex items-center gap-4 bg-white p-4">
   <button
        onClick={handleBack}
        className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
      >
        <FaChevronLeft size={20} />
      </button>
      
      <div>
        <h2 className="text-lg font-semibold cursor-pointer">Hotel Sai Dhaba</h2>
        <p className="text-sm text-gray-500 cursor-pointer">Kalyan West</p>
      </div>
      
    </div>
     <div
      className="relative h-40 bg-cover bg-center shadow"
      style={{
        backgroundImage:
          "url('https://images.jdmagicbox.com/v2/comp/kalyan/s2/022pxx22.xx22.130924120042.y5s2/catalogue/sai-dhaba-family-restaurant-kalyan-west-kalyan-north-indian-restaurants-my1a1p0jx4.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 rounded-xl flex flex-col items-center justify-center text-white">
        
        <button
          onClick={handleClick}
          className="px-4 py-2 cursor-pointer  text-white rounded-lg font-medium  transition"
        >
          + Add Photos / Videos
        </button>

      </div>
    </div>
    </>
  );
}
