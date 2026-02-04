"use client";

import { useRouter } from "next/navigation";

export default function BillsRechargeHeader() {
  const router = useRouter();

  return (
    <header className="w-full border-b border-gray-200 px-40">
      <div className="flex items-center justify-between px-4 py-3">

        {/* Left */}
        <div className="flex items-center gap-3">
          <a href="https://www.justdial.com/">
            <img
              src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg"
              alt="Justdial Logo"
              width={102}
              height={25}
              priority
            />
          </a>

     </div>

        {/* Title */}
        <h1 className="text-base font-bold text-gray-800">
          Bills &amp; Recharge
        </h1>

        {/* Right */}
        <img
          src="https://akam.cdn.jdmagicbox.com/images/icontent/recharge/Bharat_BillPay_Newlogo.svg"
          alt="Bharat BillPay Logo"
          width={80}
          height={24}
        />
      </div>
    </header>
  );
}
