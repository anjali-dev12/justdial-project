'use client'
import React from 'react'
import { useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";

const notifications = [
  {
    title: "Meta Shuts Metaverse Project After $80B Loss",
    desc: "Meta Closes Metaverse",
    time: "10 minutes ago",
    img: "https://akam.cdn.jdmagicbox.com/images/wap/logo/jd_120.png",
    active: false,
  },
  {
    title: "HDFC Bank Stock Plunges Amid Earnings Disappointment",
    desc: "HDFC Stock Crash",
    time: "24 minutes ago",
    img: "https://akam.cdn.jdmagicbox.com/images/wap/logo/jd_120.png",
    active: true,
  },
  {
    title: "Meta Shuts Metaverse Project After $80B Loss",
    desc: "Meta Closes Metaverse",
    time: "10 minutes ago",
    img: "https://akam.cdn.jdmagicbox.com/images/wap/logo/jd_120.png",
    active: false,
  },
  {
    title: "HDFC Bank Stock Plunges Amid Earnings Disappointment",
    desc: "HDFC Stock Crash",
    time: "24 minutes ago",
    img: "https://akam.cdn.jdmagicbox.com/images/wap/logo/jd_120.png",
    active: false,
  },
  {
    title: "Meta Shuts Metaverse Project After $80B Loss",
    desc: "Meta Closes Metaverse",
    time: "10 minutes ago",
    img: "https://akam.cdn.jdmagicbox.com/images/wap/logo/jd_120.png",
    active: false,
  },
  {
    title: "HDFC Bank Stock Plunges Amid Earnings Disappointment",
    desc: "HDFC Stock Crash",
    time: "24 minutes ago",
    img: "https://akam.cdn.jdmagicbox.com/images/wap/logo/jd_120.png",
    active: false,
  },

];


const notificationPage = () => {
 const [openIndex, setOpenIndex] = useState(null);
 const [data, setData] = useState(
  notifications.map(item => ({
    ...item,
    showConfirm: false, // confirmation dikhane ke liye
    hidden: false       // hide karne ke liye
  }))
);

  const handleMenuClick = (index) => {
    setOpenIndex(index);
  };

  const handleYes = (index) => {
    const updated = [...data];
    updated[index].hidden = true;
    setData(updated);
    setOpenIndex(null);
  };

  const handleNo = () => {
    setOpenIndex(null);
  };


  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Notifications
      </h2>

      <div className="border border-gray-200 rounded">
        {data.map((item, index) => {
          if (item.hidden) return null;

          return (
            <div
              key={index}
              className={`flex justify-between items-start p-3 border-b border-gray-200 min-h-[130px] ${
                item.active ? "bg-white" : "bg-gray-100"
              }`}
            >
              {/* LEFT */}
              <div className="flex gap-3 w-full">
                {openIndex !== index ? (
                  <>
                    {/* Image */}
                    <div className="min-w-[70px] p-4 border border-gray-200 rounded">
                      <Image
                        src={item.img}
                        alt="notify"
                        width={100}
                        height={100}
                        className="rounded-md"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col">
                      <h3 className="text-[21px] pb-2 font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-[16px] font-bold pb-6 text-gray-600">
                        {item.desc}
                      </p>
                      <span className="text-[14px] text-gray-400 font-bold mt-4">
                        {item.time}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col justify-center items-center w-full text-center">
                    <p className="text-[18px] font-semibold text-gray-800">
                      Are you sure you want to hide this notification?
                    </p>

                    <div className="flex gap-3 mt-3">
                      <button
                        onClick={() => handleYes(index)}
                        className="bg-blue-600 text-white px-5 font-bold py-1 rounded"
                      >
                        Yes
                      </button>
                      <button
                        onClick={handleNo}
                        className="bg-white border border-blue-600 text-blue-600 px-5 font-bold py-1 rounded"
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT ICON */}
              {openIndex !== index && (
                <div
                  onClick={() => handleMenuClick(index)}
                  className="cursor-pointer text-gray-500 text-lg px-2"
                >
                  <BsThreeDotsVertical size={25} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default notificationPage;