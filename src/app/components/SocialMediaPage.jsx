"use client";
import { useState } from "react";
import { FaChevronLeft, FaTrash } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SocialMediaPage() {
  const router = useRouter();

     const socialIcons = {
    facebook: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/follow_facebook.svg",
    twitter: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/follow_twitter.svg",
    linkedin: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/follow_linkedin.svg",
    youtube: "https://akam.cdn.jdmagicbox.com/images/icontent/jdbusiness/youtube.svg",
    instagram: "https://akam.cdn.jdmagicbox.com/images/icontent/jdbusiness/Insta.svg",
  };


  const [socialLinks, setSocialLinks] = useState({
    facebook: ["www.facebook.com/saidhabakalyan"],
    twitter: ["www.twitter.com/saidhabakalyan"],
    linkedin: [""],
    youtube: [""],
    instagram: ["www.instagram.com/theshettystar"],
  });

  const handleChange = (platform, index, value) => {
    const updated = { ...socialLinks };
    updated[platform][index] = value;
    setSocialLinks(updated);
  };

  const handleAdd = (platform) => {
    setSocialLinks({
      ...socialLinks,
      [platform]: [...socialLinks[platform], ""],
    });
  };

  const handleDelete = (platform, index) => {
    const updated = socialLinks[platform].filter((_, i) => i !== index);
    setSocialLinks({ ...socialLinks, [platform]: updated });
  };

  const renderSection = (platform, label,  addText) => (
    <div className="mb-6">
      {socialLinks[platform].map((link, index) => (
        <div key={index} className="relative mb-3">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            <Image
              src={socialIcons[platform]}
              alt={platform}
              width={20}
              height={20}
              className="mr-2"
            />
            <input
              type="text"
              value={link}
              onChange={(e) =>
                handleChange(platform, index, e.target.value)
              }
              placeholder={label}
              className="flex-1 outline-none text-sm"
            />
            {index !== 0 && (
              <button
                onClick={() => handleDelete(platform, index)}
                className="text-gray-500 ml-2"
              >
                <FaTrash size={14} />
              </button>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={() => handleAdd(platform)}
        className="text-blue-600 text-sm font-medium mt-1"
      >
        + {addText}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col pb-24  mx-auto">
      
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-300 p-4 flex items-center gap-90">
        <button onClick={() => router.back()}>
          <FaChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-medium">
          Add Social Media Links
        </h1>
      </header>

      {/* Content */}
      <div className="flex-1 px-4 py-4">
        
        {/* Info Box */}
        <div className="bg-gray-50 p-3 rounded-md mb-5 text-xs text-gray-700">
          <p>
            Add social media links in the business profile to maximize audience involvement.
          </p>
          <p className="mt-2">
            Please note that any change in social media links will go for audit
            and take up to 2 working days before it goes live.
          </p>
        </div>

                {renderSection(
          "facebook",
          "Facebook Business Page Link",
          "Add Another Facebook Business Page Link"
        )}

        {renderSection(
          "twitter",
          "X Business Account Link",
          "Add Another X Business Account Link"
        )}

        {renderSection(
          "linkedin",
          "LinkedIn Company Page Link",
          "Add Another LinkedIn Company Page Link"
        )}

        {renderSection(
          "youtube",
          "YouTube Channel Link",
          "Add Another YouTube Channel Link"
        )}

        {renderSection(
          "instagram",
          "Instagram Profile Link",
          "Add Another Instagram Profile Link"
        )}
      


      </div>

      {/* Bottom Save Button */}
      
     <div className="fixed bottom-0 left-50 w-238 bg-white p-4 shadow-md">
        <div className="max-w-md mx-auto">
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </div>
      
    </div>
  );
}