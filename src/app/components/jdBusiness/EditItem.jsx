"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function EditItem({
  title,
  value,
  icons,
  missing,
  count,
  type = "text",
  menuImages = [],
  children,
  showEdit = true,
  onClick,
}) {
  const router = useRouter();

  return (
    <div
      onClick={onClick}
      className={`flex justify-between gap-3 p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <Image src={icons} alt="business image" width={40} height={40} />

        <div>
          <p className="font-semibold text-gray-800">{title} </p>
          {children}
          <p className="text-sm text-gray-500">{value}</p>
          <span className="text-blue-600 text-sm font-medium ml-1">
            {count}
          </span>
        </div>
      </div>

      {missing && (
        <>
          <div className="flex h-5 gap-2 text-xs bg-red-100 text-red-600 px-4  mt-5 rounded-lg mt-3">
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/jdbusiness/info_missing_tags.svg"
              width={12}
              height={12}
              className="w-3 h-3"
              alt="Missing"
            />
            Missing Info
          </div>

          <div>
            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icons/gojd/maps.png"
              alt="Map"
              title="Map"
              width={36}
              height={36}
              className="w-10 h-10 mt-3 ml-2"
            />
          </div>
        </>
      )}

      {type !== "menu" && (
        <Image
          src="https://akam.cdn.jdmagicbox.com/images/icontent/jdbusiness/edit_round.svg"
          alt="Edit"
          width={25}
          height={25}
        />
      )}

      {type === "menu" && (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={"auto"}
        >
          {/* Add Menu */}
          <SwiperSlide className="!w-[100px] ml-60">
            <div
              onClick={(e) => {
                e.stopPropagation();
                router.push("/edit-menu");
              }}
              className="w-[100px] h-[90px] flex items-center justify-center border border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <span className="text-sm text-gray-600 font-medium">
                Add Menu
              </span>
            </div>
          </SwiperSlide>

          {menuImages.map((img, index) => (
            <SwiperSlide key={index} className="!w-[100px]">
              <div className="w-[100px] h-[90px] rounded-lg overflow-hidden">
                <Image
                  src={img}
                  alt="Menu"
                  width={100}
                  height={90}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
