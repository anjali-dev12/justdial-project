"use client";

import Image from "next/image";
import Link from "next/link";

const MyBusiness = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center mb-6 flex-wrap gap-10">
        <h1 className="text-2xl font-semibold text-gray-900">My Business</h1>

        <div className="flex gap-5">
          {/* Add New Business */}
          <button className="flex items-center gap-2 bg-blue-50 px-3 h-[40px] rounded-md">
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/suitcase_bluecircle.svg"
              alt="add business"
              width={22}
              height={22}
            />
            <span className="text-blue-700 text-[15px] font-medium">
              Add New Business
            </span>
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/blue_plus_icon.svg"
              alt="plus"
              width={18}
              height={18}
            />
          </button>

          {/* Download App */}
          <Link href="#">
            <div className="flex items-center border rounded-md overflow-hidden h-[40px] hover:bg-gray-100">
              {/* Text */}
              <div className="px-3 text-sm font-medium flex items-center">
                Download App
              </div>

              {/* Image (right side taller feel) */}
              <div className="flex items-center justify-center border-l h-full px-2 bg-gray-50">
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/getapp_jd.gif?v=1.0"
                  alt="download"
                  width={35}
                  height={35}
                  className="object-contain"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Card */}
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
        
        <div className="flex gap-4 flex-wrap">
          {/* Image */}
          <div className="w-[140px] h-[140px] rounded flex items-center justify-center">
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/jdmart_placeholder_350x350.svg"
              alt="business"
              width={100}
              height={100}
              className="rounded"
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Machine Service (Closed Down)
            </h2>

            <p className="text-gray-600 mb-3">Kondli, Delhi</p>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-bold">
                Advertise Now
              </button>

              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-bold">
                Edit Business Profile
              </button>
            </div>
          </div>

          {/* Profile Score */}
          <div className="flex flex-col items-center justify-center min-w-[150px]">
            <div className="relative w-20 h-20">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

              {/* Progress circle */}
              <div
                className="absolute inset-0 rounded-full border-4 border-red-700"
                style={{
                  clipPath: "inset(0 0 60% 50%)",
                }}
              ></div>

              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-bold text-lg">17%</span>
                <span className="text-xs text-red-700 font-semibold">Poor</span>
              </div>
            </div>

            <button className="mt-3 border border-blue-600 text-blue-600 px-3 py-2 rounded text-sm font-bold">
              Increase Profile Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBusiness;
