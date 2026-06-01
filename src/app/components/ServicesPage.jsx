"use client";
import { useState } from "react";

const servicesList = [
  "Home Delivery",
  "Available for Business Meetings",
  "Available for Functions",
  "Birthday / Group Parties",
  "Party Orders Accepted",
  "Takeaway Available",
  "Outdoor Services",
  "A La Carte Available",
  "Do It Yourself",
  "Food Menu Varies",
  "Home Bakers",
  "Meal Boxes",
  "Only Online Orders",
  "Pre-Ordering Required",
  "Self Service",
  "Skip the Line",
  "Slot Delivery",
  "Subscription Available",
  "Braille Menu",
  "Counter Service",
  "Kids Menu",
  "Solo Dinning",
];

export default function ServicesPage() {

  const router = useRouter();

  const [search, setSearch] = useState("");

  const [selected, setSelected] = useState([
    "Home Delivery",
    "Available for Business Meetings",
    "Available for Functions",
    "Birthday / Group Parties",
    "Party Orders Accepted",
    "Takeaway Available",
    "Outdoor Services",
  ]);

  const handleCheck = (item) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  const filteredList = servicesList.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    console.log("Selected Services:", selected);
  };

  return (
    <div className="bg-white px-50">
      
      {/* Header */}
      <header className="sticky top-0 bg-white z-50 flex items-center justify-between px-4 py-3 border border-gray-300">
        
        <button
          onClick={() => router.back()}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <FaChevronLeft size={18} />
        </button>

        <h1 className="text-lg font-semibold">Services</h1>

        <span></span>
      </header>


      <div className="px-5 pb-4  border border-gray-300">

        {/* Info Box */}
        <div className="flex gap-3 bg-gray-100 p-3 rounded-md ">

          <span>
            <Image
             src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/infoicn2.svg"
             height={15}
             width={15}
             />
          </span>

          <p className="text-xs text-gray-600">
            Please note that any changes to the details below can go for
            verification and take upto 2 working days to go live.
          </p>

        </div>


        {/* Search */}
        <div className="mt-5 mb-5 relative">

          <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 pl-9 pr-3 py-2 text-sm rounded-sm focus:outline-none focus:border-blue-500"
          />

        </div>


        <h2 className="mt-5 font-semibold">All Services</h2>


        {/* Checkbox List */}
        {filteredList.length > 0 ? (

          <div className="mt-4 space-y-3 ">

            {filteredList.map((item) => (

              <label
                key={item}
                className="flex items-center gap-5 cursor-pointer"
              >

                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => handleCheck(item)}
                  className="w-4 h-4"
                />

                <span>{item}</span>

              </label>

            ))}

          </div>

        ) : (

          <div className="flex flex-col items-center justify-center mt-10 text-center">

            <Image
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/nosearchfound.svg"
              alt="No result"
              width={120}
              height={120}
            />

            <h3 className="mt-4 font-semibold text-gray-700">
              No match found
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              We could not find any matching results. Try searching for something else.
            </p>

          </div>

        )}

      </div>


      {/* Bottom Button */}
      <div className="flex justify-center shadow-md fixed bottom-0 left-50 w-238 bg-white p-4">

        <button
          onClick={handleSave}
          className="w-100 bg-blue-600 text-white py-3 rounded-md"
        >
          Save
        </button>

      </div>

    </div>
  );
}