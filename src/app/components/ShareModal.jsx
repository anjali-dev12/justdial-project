"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = "https://jsdl.in/DT-43P8GC5V";
  const description = "Check out this on Justdial!";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

      <div className="bg-white w-full max-w-md mx-4 rounded-2xl shadow-2xl animate-slideUp">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold">
              Share With Friends
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Select from the options below
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close sharing"
            className="text-gray-500 text-2xl hover:text-black"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          <ul className="flex justify-between items-center">

            {/* Facebook */}
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&description=${description}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 hover:scale-105 transition"
              >
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/facebook_share_icon.svg"
                  alt="Share on Facebook"
                  width={50}
                  height={50}
                />
                <span className="text-sm text-gray-800">
                  Facebook
                </span>
              </a>
            </li>

            {/* WhatsApp */}
            <li>
              <a
                href={`https://web.whatsapp.com/send?text=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 hover:scale-105 transition"
              >
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/whatsapp_share_icon.svg"
                  alt="Share on WhatsApp"
                  width={50}
                  height={50}
                />
                <span className="text-sm text-gray-800">
                  WhatsApp
                </span>
              </a>
            </li>

            {/* Copy Link */}
            <li>
              <button
                onClick={handleCopy}
                className="flex flex-col items-center gap-3 hover:scale-105 transition"
              >
                <Image
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/copy_share_icon.svg"
                  alt="Copy Link"
                  width={50}
                  height={50}
                />
                <span className="text-sm text-gray-800">
                  Copy Link
                </span>
              </button>
            </li>
          </ul>

          {copied && (
            <div className="text-center text-sm text-green-600 mt-6 font-medium">
              Link copied successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}