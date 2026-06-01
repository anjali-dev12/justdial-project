"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronDown } from "lucide-react";

const categories = [
  { name: "Beverages", count: 18 },
  { name: "Breads", count: 22 },
  { name: "Desserts", count: 1 },
  { name: "Main Course", count: 157 },
  { name: "Rice And Biryani", count: 33 },
  { name: "Rice And Noodles", count: 96 },
  { name: "Snacks", count: 10 },
  { name: "Soups And Salads", count: 21 },
  { name: "Starters", count: 99 },
];

const menuData = [
  {
    title: "Beverages",
    count: 18,
    items: [
      { name: "Jeera Soda", price: 35, type: "veg" },
      { name: "Diet Coke Soft Beverage", price: 55 },
      { name: "Coke Soft Beverage", price: 35, type: "veg" },
      { name: "Red Bull Soft Beverage", price: 175, type: "veg" },
      { name: "Rio Soft Beverage", price: 60, type: "veg" },
      { name: "Sweet Lassi", price: 80, type: "veg" },
      { name: "Monster Soft Beverage", price: 150, type: "veg" },
      { name: "Thums Up Soft Beverage", price: 35, type: "veg" },
    ],
  },
  {
    title: "Breads",
    count: 22,
    items: [
      { name: "Garlic Naan", price: 100, type: "veg" },
      { name: "Paneer Paratha", price: 170, type: "veg" },
      { name: "Chicken Keema Paratha", price: 195, type: "nonveg" },
      { name: "Mutton Keema Paratha", price: 260, type: "nonveg" },
      { name: "Chees Nan", price: 55, type: "veg" },
      { name: "Paneer Paratha", price: 170, type: "veg" },
      { name: "Chicken Keema Paratha", price: 195, type: "nonveg" },
      { name: "Egg Bread", price: 70, type: "egg" },
    ],
  },
  {
    title: "Desserts",
    count: 1,
    items: [{ name: "Gulab Jamun (2 Pieces)", price: 60, type: "veg" }],
  },

  {
    title: "Main Course",
    count: 157,
    items: [
      { name: "Mutton Palak", price: 460, type: "nonveg" },
      { name: "Kaju Kolhapuri", price: 390, type: "veg" },
      { name: "Mutton Masala", price: 450, type: "nonveg" },
      { name: "Palak Paneer", price: 250, type: "veg" },
      { name: "Dal Tadka", price: 225, type: "veg" },
      { name: "Egg Roll", price: 125, type: "egg" },
      { name: "Egg Kuri", price: 200, type: "egg" },
    ],
  },

  {
    title: "Rice And Biryani",
    count: 33,
    items: [
      { name: "Chicken Tikka Biryani", price: 350, type: "nonveg" },
      { name: "Mushroom Biryani", price: 290, type: "veg" },
      { name: "Chicken Hyderabadi Biryani", price: 450, type: "nonveg" },
      { name: "Paneer Pulao", price: 220, type: "veg" },
      { name: "Egg Biryani", price: 320, type: "egg" },
    ],
  },
  {
    title: "Rice And Noodles",
    count: 96,
    items: [
      {
        name: "Chicken Manchurian Noodles With Gravy",
        price: 210,
        type: "nonveg",
      },
      { name: "Veg American Chopsuey", price: 180, type: "veg" },
      {
        name: "Chicken Garlic Fried Rice With Gravy",
        price: 450,
        type: "nonveg",
      },
      { name: "Veg Hong Kong Fried Rice", price: 180, type: "veg" },
      { name: "Egg Schezwan Noodles", price: 180, type: "egg" },
    ],
  },
  {
    title: "Snacks",
    count: 10,
    items: [
      { name: "Veg Chinese Bhel", price: 170, type: "veg" },
      { name: "Chicken Koliwada", price: 180, type: "nonveg" },
      { name: "Boiled Chana", price: 125, type: "veg" },
      { name: "Egg Omelette", price: 40, type: "egg" },
      { name: "Finger Chips", price: 195, type: "veg" },
    ],
  },
  {
    title: "Soups And Salads",
    count: 21,
    items: [
      { name: "Chicken Hot And Sour Soup", price: 130, type: "nonveg" },
      { name: "Tomato Salad", price: 85, type: "veg" },
      { name: "Green Salad", price: 85, type: "veg" },
    ],
  },

  {
    title: "Starters",
    count: 99,
    items: [
      { name: "Paneer Chilli Dry", price: 210, type: "veg" },
      { name: "Green Chicken Tandoori", price: 280, type: "nonveg" },
      { name: "Mushroom Schezwan Dry", price: 210, type: "veg" },
      { name: "Egg Chilli", price: 250, type: "egg" },
    ],
  },
];

export default function MenuCatalog() {
  const [activeCategory, setActiveCategory] = useState("Beverages");
  const [openIndex, setOpenIndex] = useState(0);
  const [activeChip, setActiveChip] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleViewAll = (sectionTitle) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCategoryClick = (catName) => {
    setActiveCategory(catName);

    const index = menuData.findIndex((item) => item.title === catName);
    setOpenIndex(index);

    // 👇 Scroll karega section ko upar
    setTimeout(() => {
      const element = document.getElementById(catName);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const getIcon = (type) => {
    if (type === "veg")
      return "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/restaurants_menu_veg_icon.png";
    if (type === "nonveg")
      return "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/restaurants_menu_nonveg-icon.png";

    if (type === "egg")
      return "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/egg_icon_1_is_to_1.png";

    return null;
  };

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

  const chips = [
    {
      name: "Veg",
      value: "veg",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/veg_icon_1_is_to_1.png",
    },
    {
      name: "Non Veg",
      value: "nonveg",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/nonveg_icon_1_is_to_1.png",
    },
    {
      name: "Egg",
      value: "egg",
      icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newprot_w/egg_icon_1_is_to_1.png",
    },
  ];

   
  
  return (
    <>
      <div className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          {/* LEFT SIDEBAR */}

          <div className="lg:col-span-2 p-4">
            <input
              type="text"
              placeholder="Search from menu"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <ul className="space-y-2">
              {categories.map((cat) => (
                <li
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`cursor-pointer px-3 py-2 font-bold text-sm transition ${
                    activeCategory === cat.name
                      ? "bg-blue-100 text-blue-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {cat.name} ({cat.count})
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-4 p-4  border border-gray-300 rounded-lg">
            {/* Heading */}
            <h1 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">
              Menu of Hotel Sai Dhaba in Kalyan West
            </h1>

            {/* SWIPER */}
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Chips */}
            <h2 className="text-xl font-semibold mt-8 mb-4">
              Order Online Menu
            </h2>
            <ul className="flex flex-wrap gap-3 mb-6">
              {chips.map((chip) => {
                const isActive = activeChip === chip.value;

                return (
                  <li
                    key={chip.name}
                    onClick={() => setActiveChip(isActive ? null : chip.value)}
                    className={`flex items-center gap-2 px-4 py-1 rounded-md border  cursor-pointer transition ${
                      isActive
                        ? "bg-blue-100 border-blue-600"
                        : " bg-gray-50 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <img
                      src={chip.icon}
                      alt={chip.name}
                      width={18}
                      height={18}
                    />
                    <span className="text-sm font-medium text-gray-800">
                      {chip.name}
                    </span>

                    {isActive && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveChip(null);
                        }}
                        className="ml-1 text-gray-500 hover:text-black text-sm font-bold"
                      >
                        ✕
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Accordion */}
            <div className="space-y-6 ">
              {menuData.map((section, index) => {
                const filteredItems = section.items.filter((item) => {
                  const matchesChip = activeChip
                    ? item.type === activeChip
                    : true;

                  const matchesSearch = searchTerm
                    ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
                    : true;

                  return matchesChip && matchesSearch;
                });

                if (filteredItems.length === 0) return null;

                const isExpanded = expandedSections[section.title];
                const itemsToShow = isExpanded
                  ? filteredItems
                  : filteredItems.slice(0, 2);

                return (
                  <div
                    id={section.title}
                    key={section.title}
                    className="border-b border-gray-300 pb-4 scroll-mt-32"
                  >
                    {" "}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center py-3"
                    >
                      <h2 className="text-lg font-semibold text-gray-800">
                        {section.title} ({filteredItems.length})
                      </h2>
                      <ChevronDown
                        className={`transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === index && (
                      <div className="space-y-4 mt-4">
                        {itemsToShow.map((item, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-start"
                          >
                            <div>
                              {item.type && (
                                <img
                                  src={getIcon(item.type)}
                                  alt={item.type}
                                  width={14}
                                  height={18}
                                  className="mb-1"
                                />
                              )}
                              <p className="text-base font-medium text-gray-800">
                                {item.name}
                              </p>
                            </div>
                            <div className="text-base font-semibold text-gray-800">
                              ₹ {item.price}
                            </div>
                          </div>
                        ))}

                        {filteredItems.length > 2 && (
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => toggleViewAll(section.title)}
                              className="mt-4 text-blue-600 text-lg py-1 px-6 border border-blue-500 rounded-lg"
                            >
                              {isExpanded ? "Show Less" : "View All"}
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* ✅ No Result UI */}
              {menuData.every((section) =>
                section.items.every((item) => {
                  const matchesChip = activeChip
                    ? item.type !== activeChip
                    : false;

                  const matchesSearch = searchTerm
                    ? !item.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    : false;

                  return matchesChip || matchesSearch;
                }),
              ) &&
                searchTerm && (
                  <div className="text-center py-12">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/7486/7486754.png"
                      alt="not found"
                      className="w-40 mx-auto mb-6 opacity-70"
                    />
                    <h2 className="text-xl font-semibold mb-2">
                      No match found
                    </h2>
                    <p className="text-gray-500">
                      We could not find any matching results. Try searching for
                      something else.
                    </p>
                  </div>
                )}
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
