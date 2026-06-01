"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function ContactDetails() {
  const router = useRouter();

  const [contactPersons, setContactPersons] = useState([
    { title: "", name: "", designation: "" },
  ]);

  const [mobiles, setMobiles] = useState([""]);
  const [whatsapps, setWhatsapps] = useState([""]);
  const [emails, setEmails] = useState([""]);
  const [landlines, setLandlines] = useState([]);
  const [tollFrees, setTollFrees] = useState([]);

  const addTollFree = () => {
    setTollFrees([...tollFrees, ""]);
  };

  const addLandline = () => {
    setLandlines([...landlines, { code: "+91", std: "", number: "" }]);
  };

  const addContactPerson = () => {
    setContactPersons([
      ...contactPersons,
      { title: "", name: "", designation: "" },
    ]);
  };

  const removeItem = (index, array, setter) => {
    const updated = array.filter((_, i) => i !== index);
    setter(updated);
  };

  const handleSave = () => {
    router.push("/jd-bussiness/edit-profile");
  };


  const addMobile = () => setMobiles([...mobiles, ""]);
  const addWhatsapp = () => setWhatsapps([...whatsapps, ""]);
  const addEmail = () => setEmails([...emails, ""]);

  return (
    <div className="min-h-screen  flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-300 p-4 flex items-center justify-between z-50">
        <button onClick={() => router.back()} className="text-lg">
          <FaChevronLeft size={20} className="cursor-pointer" />
        </button>
        <h1 className="font-semibold text-base">Contact Details</h1>
        <div />
      </div>

      <div className="space-y-6 p-4 ">
        {/* Info Box */}
        <div className="bg-blue-50 border border-gray-300 p-4 rounded-lg text-sm text-gray-700">
          Update business contact details to stay in touch with your customers
          in real time
        </div>

        {/* Contact Person Section */}
        {contactPersons.map((person, index) => (
          <div key={index} className="space-y-4  p-4 rounded-md ">
            {/* Title + Name */}
            <div className="flex gap-3">
              <select className="border border-gray-400  rounded-md px-3 py-2 text-sm">
                <option value="">Title</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Dr</option>
                <option>Ms</option>
              </select>

              <input
                type="text"
                placeholder="Contact Person Name"
                className="w-full border border-blue-400 rounded-md px-3 py-2 text-sm"
              />
              {index !== 0 && (
                <MdDelete
                  size={26}
                  onClick={() =>
                    removeItem(index, contactPersons, setContactPersons)
                  }
                  className="text-gray-500 hover:text-red-500 cursor-pointer"
                />
              )}
            </div>

            {/* Designation */}

            <select className="w-full border border-gray-400  rounded-md px-3 py-2 text-sm">
              <option value="">Desigation</option>
              <option>Assistant Branch Manager</option>
              <option>Assistant General Manager</option>
              <option>Assistant Manager</option>
              <option>Assistant Professor</option>
              <option>Assistant Regional Manager</option>
              <option>Associate Professor</option>
            </select>
          </div>
        ))}
        <button
          onClick={addContactPerson}
          className="text-blue-600 text-sm font-semibold"
        >
          + Add Another Contact Person
        </button>

        {/* Mobile Section */}
        {mobiles.map((mobile, index) => (
          <div key={index} className="flex gap-2 pr-5">
            <span className=" flex gap-2 px-3 py-2 bg-gray-100 border border-gray-400 rounded-lg text-sm font-semibold">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India Flag"
                className="w-6 h-4 object-cover rounded-sm"
              />
              +91
            </span>
            <input
              type="tel"
              maxLength={10}
              placeholder="Mobile Number"
              className="flex-1 border border-gray-400 rounded-lg px-3 py-2 text-sm"
            />

            {index !== 0 && (
              <MdDelete
                size={26}
                onClick={() => removeItem(index, mobiles, setMobiles)}
                className="text-gray-500 hover:text-red-500 cursor-pointer"
              />
            )}
          </div>
        ))}

        <button
          onClick={addMobile}
          className="text-blue-600 text-sm font-semibold"
        >
          + Add Another Mobile Number
        </button>

        {/* WhatsApp Section */}
        {whatsapps.map((wp, index) => (
          <div key={index} className="flex gap-2 pr-5">
            <span className=" flex gap-2 px-3 py-2 bg-gray-100 border border-gray-400 rounded-lg text-sm font-semibold">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India Flag"
                className="w-6 h-4 object-cover rounded-sm"
              />
              +91
            </span>
            <input
              type="tel"
              maxLength={10}
              placeholder="WhatsApp Number"
              className="flex-1 border border-gray-400 rounded-lg px-3 py-2 text-sm"
            />

            {index !== 0 && (
              <MdDelete
                size={26}
                onClick={() => removeItem(index, whatsapps, setWhatsapps)}
                className="text-gray-500 hover:text-red-500 cursor-pointer"
              />
            )}
          </div>
        ))}

        <button
          onClick={addWhatsapp}
          className="text-blue-600 text-sm font-semibold"
        >
          + Add Another WhatsApp Number
        </button>

        {/* Email Section */}
        {emails.map((email, index) => (
          <>
            <div className="flex gap-3 pr-5">
              <input
                key={index}
                type="email"
                placeholder="Email"
                className="w-full border border-gray-400 rounded-lg px-3 py-2 text-sm "
              />

              {index !== 0 && (
                <MdDelete
                  size={26}
                  onClick={() => removeItem(index, emails, setEmails)}
                  className="text-gray-500 hover:text-red-500 cursor-pointer"
                />
              )}
            </div>
          </>
        ))}

        <div className=" flex flex-col gap-4 text-lg items-start pt-4">
          <button
            onClick={addEmail}
            className="text-blue-600 text-sm font-semibold"
          >
            + Add Another Email
          </button>

          {landlines.length > 0 && (
            <div className="space-y-4 w-full">
              {landlines.map((item, index) => (
                <div key={index} className="flex gap-3 items-center w-full">
                  {/* Country Code */}
                  <span className="flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-400 rounded-lg text-sm font-semibold whitespace-nowrap">
                    <img
                      src="https://flagcdn.com/w40/in.png"
                      alt="India Flag"
                      className="w-6 h-4 object-cover rounded-sm"
                    />
                    {item.code}
                  </span>

                  {/* STD Code */}
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="STD"
                    className="w-24 border border-gray-400 rounded-lg px-3 py-2 text-sm"
                  />

                  {/* Landline Number (Width Increased 🔥) */}
                  <input
                    type="tel"
                    maxLength={7}
                    placeholder="Landline Number"
                    className="flex-1 min-w-[250px] border border-gray-400 rounded-lg px-3 py-2 text-sm"
                  />

                  {/* Delete only for extra */}
                  {index !== 0 && (
                    <MdDelete
                      size={26}
                      onClick={() => removeItem(index, landlines, setLandlines)}
                      className="text-gray-500 hover:text-red-500 cursor-pointer"
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <button
            onClick={addLandline}
            className="text-blue-600 text-sm font-semibold"
          >
            + Add Landline Number
          </button>

        {tollFrees.length > 0 && (
  <div className="w-full space-y-3">
    {tollFrees.map((item, index) => (
      <div key={index} className="flex items-center gap-3 w-full">
        
        <input
          type="tel"
          maxLength={13}
          placeholder="Toll-Free Number"
          className="w-full border border-gray-400 rounded-lg px-3 py-2 text-sm"
        />

        {index !== 0 && (
          <MdDelete
            size={26}
            onClick={() => removeItem(index, tollFrees, setTollFrees)}
            className="text-gray-500 hover:text-red-500 cursor-pointer shrink-0"
          />
        )}
      </div>
    ))}
  </div>
)}
          <button
            onClick={addTollFree}
            className="text-blue-600 text-sm font-semibold"
          >
            + Add Toll-Free Number
          </button>
        </div>
      </div>
       {/* Save Button */}
            <div className="fixed bottom-0 w-239 bg-white p-4">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
          >
            Save and Continue
          </button>
        </div>
      </div>

    </div>
  );
}
