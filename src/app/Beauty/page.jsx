"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

export default function PopularServices() {
  const services = [
    {
      title: "Hair Cut",
      subtitle: "Hair Cut Services",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-hair-cut-web.png?t=1",
    },
    {
      title: "Facial",
      subtitle: "Beauty Parlours For Facial",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-facial-web.png?t=1",
    },
    {
      title: "Manicure",
      subtitle: "Nail Treatment Services",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-manicure-web.png?t=1",
    },
    {
      title: "Pedicure",
      subtitle: "Beauty Parlours For Pedicure",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-pedicure-web.png?t=1",
    },
    {
      title: "Hair Color",
      subtitle: "Beauty Pourlor For Hair Coloring ",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-hair-color-web.png?t=1",
    },
    {
      title: "Threading",
      subtitle: "Threading Services",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-threading-web.png?t=1",
    },
    {
      title: "Hair Styling",
      subtitle: "Hair Stylish",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-hair-styling-web.png?t=1",
    },
    {
      title: "Waxing",
      subtitle: "Beauty Parlours For Waxing",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-waxing-web.png?t=1",
    },

    {
      title: "Bridal Makeup",
      subtitle: "Bridal Makeup Artists",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-bridal-makeup-web.png?t=1",
    },
    {
      title: "Party Makeup",
      subtitle: "Party Makeup Artists",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-party-makeup-web.png?t=1",
    },
    {
      title: "Hair Straightening",
      subtitle: "Beauty Parlours For Hair Straightening",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-hair-straightening-web.png?t=1",
    },
    {
      title: "Nail Extentsions",
      subtitle: "Nail Extentsions Services",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-nail-extensions-web.png?t=1",
    },
  ];

  const salons = [
    {
      name: "Bliss Family Spa",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
      location: "Dombivli East, Mumbai",
      img: "https://content.jdmagicbox.com/v2/comp/mumbai/u7/022pxx22.xx22.230324094841.i9u7/catalogue/w7kxt315d20optr-8g9ao0rt0s-250.jpg",
      phone: "09972213182",
    },
    {
      name: "Iconic Family Spa",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
      location: "Kalyan West, Mumbai",
      img: "https://content.jdmagicbox.com/v2/comp/mumbai/b3/022pxx22.xx22.210213084153.d4b3/catalogue/iconic-family-spa-kalyan-west-kalyan-body-massage-centres-expamhsy6u-250.jpg",
      phone: "09972353073",
    },
    {
      name: "Spa Berry",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
      location: "Kalyan West, Mumbai",
      img: "https://content.jdmagicbox.com/v2/comp/mumbai/w2/022pxx22.xx22.240312143713.m7w2/catalogue/spa-berry-kalyan-west-kalyan-body-massage-centres-6fe3ibjakq-250.jpg",
      phone: "09972828699",
    },
    {
      name: "Isa Spa",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
      location: "Kalyan West, Mumbai",
      img: "https://content.jdmagicbox.com/v2/comp/mumbai/m1/022pxx22.xx22.220622123943.p2m1/catalogue/isa-spsa-kalyan-west-kalyan-micro-acupuncture-centres-vfdcsqdt8r-250.jpg",
      phone: "09972812398",
    },
  ];

  const spas = [
    {
      name: "Ayurvedic Spa",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-ayurvedic-spa-web.png?t=1",
    },
    {
      name: "Unisex Spa",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-unisex-spa-web.png?t=1",
    },
    {
      name: "Thai Spa",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-thai-spa-web.png?t=1",
    },
    {
      name: "Beauty Spa For Men",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-beauty-spa-for-men-web.png?t=1",
    },
  ];

  const procedures = [
    {
      name: "Derma",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-derma-web.png?t=1",
    },
    {
      name: "Anti-aging",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-anti-aging-web.png?t=1",
    },
    {
      name: "Hair Treatment",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-hair-treatment-web.png?t=1",
    },

    {
      name: "Beauty Clinic",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-beauty-clinic-web.png?t=1",
    },
  ];

  const homeservices = [
    {
      name: "Spas",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-spas-web.png",
    },
    {
      name: "Make Up Artists",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-makeup-artists-web.png",
    },
    {
      name: "Salon Services",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-salon-services-web.png",
    },
    {
      name: "Mehendi Artists",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-mehendi-artists-web.png",
    },
    {
      name: "Nail Artists",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-nail-artists-web.png",
    },
  ];

  const tattooServices = [
    {
      name: "Tattoo Parlours",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-tattoo-at-home-web.png?t=1",
    },
    {
      name: "Temporary Tattoo",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-temporary-tattoo-web.png?t=1",
    },
    {
      name: "Permanent Tattoo",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-permanent-tattoo-web.png",
    },
    {
      name: "Tattoo Removal",
      img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-tattoo-removal-web.png",
    },
  ];

  const wellnessData = [
  {
    name: "Hydrotherapy Centers",
    img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-hydrotherapy-centers-web.png?t=1?w=128&q=75",
    link: "#",
  },
  {
    name: "Ayurvedic Aromatherapy",
    img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-ayurvedic-aromatherapy-web.png?t=1?w=128&q=75",
    link: "#",
  },
  {
    name: "Swedish Spa",
    img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-swedish-spa-web.png?t=1?w=128&q=75",
    link: "#",
  },
  {
    name: "Turkish Spa",
    img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-turkish-spa-web.png?t=1?w=128&q=75",
    link: "#",
  },
  {
    name: "Couple Spa",
    img: "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-couple-spa-web.png?t=1?w=128&q=75",
    link: "#",
  },
];

  const tabs = ["Makeup Artists", "Wedding Photographers", "Wedding Planners"];
  const weddingData = {
    "Makeup Artists": [
      {
        name: "Madhu's Beauty Studio",
        icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
        rating: "5",
        reviews: "1 Rating",
        location: "Sector 4 Kalyan West, Mumbai",
        phone: "09606431242",
        img: "https://content.jdmagicbox.com/v2/comp/mumbai/j1/022pxx22.xx22.260226125319.a7j1/catalogue/k7l7w5wccyz03hl-xlxcub20qx-250.jpg?w=3840&q=75",
      },
      {
        name: "Crystal Beauty Zone",
        icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
        rating: "4.6",
        reviews: "487 Ratings",
        location: "Agra Road Lal Chowki Kalyan West, Mumbai",
        phone: "07490825424",
        img: "https://content.jdmagicbox.com/v2/comp/thane/84/022pgl50284/catalogue/crystal-beauty-zone-kalyan-city-thane-beauty-spas-1ezbzov6oq-250.jpg?w=3840&q=75",
      },
      {
        name: "The Merakist Studio",
        icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
        rating: "4.9",
        reviews: "50 Ratings",
        location: "Golden Park Road Kalyan West, Mumbai",
        phone: "09035068468",
        img: "https://content.jdmagicbox.com/v2/comp/mumbai/f7/022pxx22.xx22.251112132942.a6f7/catalogue/lnmub2v20npj5hm-6vpbgdpdo6-250.jpg?w=3840&q=75",
      },
      {
        name: "Glamorize Beauty & Glamours",
        icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
        rating: "3.5",
        reviews: "9 Ratings",
        location: "Dombivli East, Mumbai",
        phone: "09972430967",
        img: "https://content.jdmagicbox.com/v2/comp/mumbai/s6/022pxx22.xx22.220118142024.v8s6/catalogue/glamorize-beauty-and-glamours-dombivli-east-mumbai-makeup-artists-1900alurbj-250.jpg?w=3840&q=75",
      },
    ],

    "Wedding Photographers": [
      {
        name: "Shubham Photo Studio",
        icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
        img: "https://content.jdmagicbox.com/v2/comp/mumbai/b4/022pxx22.xx22.121105023001.t4b4/catalogue/shubham-photo-studio-kalyan-west-kalyan-photo-studios-j1t94vtq9a-250.jpg",
        rating: "4.7",
        reviews: "26 Ratings",
        location: "Birla College Road Kalyan West, Mumbai",
        phone: "09845229752",
      },
      {
        name: "Pankaj Digital Studio",
        icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
        img: "https://content.jdmagicbox.com/v2/comp/mumbai/i4/022pxx22.xx22.211102134628.m8i4/catalogue/pankaj-digital-studio-badlapur-thane-photo-studios-gu044uayuc-250.jpg",
        rating: "4.7",
        reviews: "269 Ratings",
        location: "Kulgaon Badlapur, Mumbai",
        phone: "09972414009",
      },
    ],

    "Wedding Planners": [
      {
        name: "Centre Point Events Pvt Ltd",
        icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
        img: "https://content.jdmagicbox.com/v2/comp/mumbai/w1/022pxx22.xx22.110709113655.v7w1/catalogue/centre-point-events-pvt-ltd-malad-west-mumbai-wedding-grounds-fvw2deoj2v-250.jpg",
        rating: "4.6",
        reviews: "90 Ratings",
        location: "S V Road Malad West, Mumbai",
        phone: "09845208953",
      },
      {
        name: "Annapoorna Catering Services",
        icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
        img: "https://content.jdmagicbox.com/v2/comp/mumbai/k3/022pxx22.xx22.200121131033.m1k3/catalogue/annapoorna-catering-services-dombivli-east-thane-caterers-8l58uqu46j-250.jpg",
        rating: "4.2",
        reviews: "3 Ratings",
        location: "Manpada Road Dombivli East, Mumbai",
        phone: "09980239884",
      },
      {
        name: "The Big Picture Event N Production House",
        icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
        img: "https://content.jdmagicbox.com/v2/comp/mumbai/c3/022pxx22.xx22.241225020846.b4c3/catalogue/the-big-picture-event-n-production-house-mumbai-event-organisers-dtanaf20gj-250.jpg",
        rating: "4.8",
        reviews: "17 Ratings",
        location: "Kandivali East, Mumbai",
        phone: "08971907476",
      },
      {
        name: "Destination Weddings - Book My Resorts",
        icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/new_thumb_icon.svg",
        img: "https://content.jdmagicbox.com/v2/comp/mumbai/00/022pze03100/catalogue/navneet-events-kalbadevi-mumbai-event-management-companies-r0txxc76cz-250.jpg",
        rating: "4",
        reviews: "8 Ratings",
        location: "Kalbadevi, Mumbai",
        phone: "07383719976",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("Wedding Planners");
  const currentData = weddingData[activeTab];

  return (
    <section className="py-10">
      {/* Heading */}
      <div className="border-b border-[rgba(0,0,0,0.1)]">
        <h2 className="text-3xl font-semibold text-gray-900 mb-10 text-center">
          Popular Beauty Services
        </h2>

        {/* 👇 GRID (4 per row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-5xl mx-auto pb-15">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circle */}
              <div className="w-25 h-25 bg-blue-50 rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition duration-300 cursor-pointer">
                <Image src={item.img} alt={item.title} width={45} height={45} />
              </div>

              {/* Text */}
              <h3 className="mt-3 text-[16px] font-[600] text-gray-900">
                {item.title}
              </h3>

              <p className="text-[14px] text-gray-500 whitespace-nowrap">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="topSalon border-b border-[rgba(0,0,0,0.1)] py-15">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Top Salons and Spas
        </h2>

        {/* Swiper */}
        <Swiper
          spaceBetween={20}
          slidesPerView={2.2}
          mousewheel={true}
          modules={[Mousewheel]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {salons.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto pl-5 py-2">
              {/* Card */}
              <div className="w-[520px] bg-sky-50 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 cursor-pointer flex">
                {/* 👇 Left Image FIXED */}
                <div className="w-[40%] flex items-center justify-center p-2">
                  <div className="relative w-[90%] h-[150px]">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-contain rounded-md" // 👈 important change
                    />
                  </div>
                </div>

                {/* Right Content */}
                <div className="w-[60%] p-4 flex flex-col justify-between">
                  {/* Title + Location */}
                  <div>
                    <div className="flex items-center gap-2">
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={22}
                        height={22}
                      />
                      <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 mt-2 line-clamp-2">
                      {item.location}
                    </p>
                  </div>

                  {/* 👇 Buttons FIXED */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex items-center justify-center gap-2 w-1/2 bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-md transition">
                      <Image
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/call_white_icon.svg"
                        alt="call"
                        width={16}
                        height={16}
                      />
                      Call
                    </button>

                    <button className="flex items-center justify-center gap-2 w-1/2 border border-gray-300 hover:bg-gray-100 text-sm py-2 rounded-md transition text-gray-700">
                      <Image
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/squarewhatsapp_icon.svg"
                        alt="whatsapp"
                        width={18}
                        height={18}
                      />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* View All */}
        <div className="flex justify-center py-20">
          <button className="bg-blue-600 text-white text-lg px-20 py-2 rounded-md">
            View All
          </button>
        </div>
      </div>

      <div className="spaSection">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center pt-15">
          Specialized Beauty Spas
        </h2>

        {/* Swiper */}
        <div className="flex justify-center">
          <Swiper
            spaceBetween={20}
            slidesPerView={2.2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {spas.map((item, index) => (
              <SwiperSlide key={index} className="!w-auto flex justify-center">
                {/* Clean Card */}
                <div className="flex flex-col items-center text-center cursor-pointer group">
                  {/* 👇 Image Only */}
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={260}
                    height={260}
                    className="object-contain"
                  />

                  {/* 👇 Title */}
                  <p className="mt-3 text-lg font-medium text-gray-800">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="comsmeticProcuder pt-15 pb-20 mt-18 bg-cover bg-center relative border-b border-[rgba(0,0,0,0.1)]"
        style={{
          backgroundImage:
            "url(https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/beauty-bg-web.png)",
        }}
      >
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          Cosmetic Procedures
        </h2>

        <div className="flex justify-center ml-40">
          <Swiper
            spaceBetween={22}
       slidesPerView={4}
centeredSlides={false} // 👈 MAIN FIX
            className="max-w-5xl w-full"
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 5 },
            }}
          >
            {procedures.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="flex flex-col items-center text-center cursor-pointer bg-white group p-3 rounded-md">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={160}
                    height={160}
                    className="object-contain transition duration-300"
                  />

                  <p className="mt-3 text-lg font-semibold text-gray-800">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="HomeService border-b border-[rgba(0,0,0,0.1)] pb-15">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center pt-15">
          At-home Beauty And Wellness Services
        </h2>

        {/* Swiper */}
        <div className="flex justify-center pl-4">
          <Swiper
            spaceBetween={18}
            slidesPerView={2.2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {homeservices.map((item, index) => (
              <SwiperSlide key={index} className="!w-auto flex justify-center">
                {/* Clean Card */}
                <div className="flex flex-col items-center text-center cursor-pointer group">
                  {/* 👇 Image Only */}
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={260}
                    height={260}
                    className="object-contain"
                  />

                  {/* 👇 Title */}
                  <p className="mt-3 text-lg font-medium text-gray-800">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="spaSection border-b border-[rgba(0,0,0,0.1)] pb-15">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center pt-15">
          Tattoo Services
        </h2>

        {/* Swiper */}
        <div className="flex justify-center">
          <Swiper
            spaceBetween={20}
            slidesPerView={2.2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {tattooServices.map((item, index) => (
              <SwiperSlide key={index} className="!w-auto flex justify-center">
                {/* Clean Card */}
                <div className="flex flex-col items-center text-center cursor-pointer group">
                  {/* 👇 Image Only */}
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={260}
                    height={260}
                    className="object-contain"
                  />

                  {/* 👇 Title */}
                  <p className="mt-3 text-lg font-medium text-gray-800">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="weddingService py-12 px-4 md:px-10 bg-white border-b border-[rgba(0,0,0,0.1)]">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
          Explore Wedding Services
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md border  ${
                activeTab === tab
                  ? "bg-blue-50 text-blue-500 font-[600] border border-blue-200"
                  : "bg-white text-gray-600 border-gray-200 font-[600]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {weddingData[activeTab].map((item, index) => (
            <div
              key={index}
              className="flex bg-white rounded-xl shadow hover:shadow-lg transition px-4 py-6"
            >
              {/* Image */}
              <div className="relative w-40 h-40 flex-shrink-0 mr-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between w-full">
                <div>

                  <div className="flex gap-3">
                    <Image
                        src={item.icon}
                        alt="icon"
                        width={30}
                        height={30}
                      /> 
                  <h3 className="font-semibold text-[18px]">{item.name}</h3>
                  </div>

                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-green-700 text-white text-xs font-[600] px-2 py-1 rounded">
                      {item.rating} ★
                    </span>
                    <span className="text-[16px] font-[600] text-gray-500">
                      {item.reviews}
                    </span>
                  </div>

                  <p className="text-sm text-gray-800 font-[600] mt-2 pb-5">{item.location}</p>
                </div>

                <div className="flex gap-3 mt-4">
                  <button className="flex items-center gap-2 w-1/2 bg-green-600 hover:bg-green-700 text-white text-lg py-1 rounded-md transition">
                      <Image
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/call_white_icon.svg"
                        alt="call"
                        width={20}
                        height={20}
                        className="ml-4"
                      />
                      {item.phone}
                    </button>

                  <button className="flex items-center gap-2 w-1/2 bg-blue-600 hover:bg-green-700 text-white text-lg py-1 rounded-md transition">
                    <Image
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/enquire_white_icon.svg"
                        alt="call"
                        width={20}
                        height={20}
                        className="ml-4"
                      />
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center mt-10">
          <button className="bg-blue-600 text-lg text-white px-25 py-2 rounded-md">
            View All
          </button>
        </div>
      </div>

       <div className="HomeService border-b border-[rgba(0,0,0,0.1)] pb-15">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center pt-15">
          Wellness And Relaxation
        </h2>

        {/* Swiper */}
        <div className="flex justify-center pl-4">
          <Swiper
            spaceBetween={18}
            slidesPerView={2.2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {wellnessData.map((item, index) => (
              <SwiperSlide key={index} className="!w-auto flex justify-center">
                {/* Clean Card */}
                <div className="flex flex-col items-center text-center cursor-pointer group">
                  {/* 👇 Image Only */}
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={260}
                    height={260}
                    className="object-contain"
                  />

                  {/* 👇 Title */}
                  <p className="mt-3 text-lg font-medium text-gray-800">
                    {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="topSalon border-b border-[rgba(0,0,0,0.1)] py-15">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Men's Grooming
        </h2>

        {/* Swiper */}
        <Swiper
          spaceBetween={20}
          slidesPerView={2.2}
          mousewheel={true}
          modules={[Mousewheel]}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {salons.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto pl-5 py-2">
              {/* Card */}
              <div className="w-[520px] bg-sky-50 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition duration-300 cursor-pointer flex">
                {/* 👇 Left Image FIXED */}
                <div className="w-[40%] flex items-center justify-center p-2">
                  <div className="relative w-[90%] h-[150px]">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-contain rounded-md" // 👈 important change
                    />
                  </div>
                </div>

                {/* Right Content */}
                <div className="w-[60%] p-4 flex flex-col justify-between">
                  {/* Title + Location */}
                  <div>
                    <div className="flex items-center gap-2">
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={22}
                        height={22}
                      />
                      <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 mt-2 line-clamp-2">
                      {item.location}
                    </p>
                  </div>

                  {/* 👇 Buttons FIXED */}
                  <div className="flex gap-2 mt-4">
                    <button className="flex items-center justify-center gap-2 w-1/2 bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-md transition">
                      <Image
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/call_white_icon.svg"
                        alt="call"
                        width={16}
                        height={16}
                      />
                      Call
                    </button>

                    <button className="flex items-center justify-center gap-2 w-1/2 border border-gray-300 hover:bg-gray-100 text-sm py-2 rounded-md transition text-gray-700">
                      <Image
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/jdmart/squarewhatsapp_icon.svg"
                        alt="whatsapp"
                        width={18}
                        height={18}
                      />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* View All */}
        <div className="flex justify-center py-20">
          <button className="bg-blue-600 text-white text-lg px-20 py-2 rounded-md">
            View All
          </button>
        </div>
      </div>

    </section>
  );
}
