"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  FaFileInvoice,
  FaMobileAlt,
  FaSatelliteDish,
  FaWifi,
  FaTv,
  FaCar,
  FaUniversity,
  FaReceipt,
  FaCreditCard
} from "react-icons/fa";

const tabs = [
  {
    id: "my-bills",
    label: "My Bills",
    icon: FaFileInvoice,
    path: "/online-bill-payment/my-bills",
  },
  {
    id: "mobile",
    label: "Mobile",
    icon: FaMobileAlt,
    path: "/online-bill-payment/mobile",
  },
  {
    id: "dth",
    label: "DTH",
    icon: FaSatelliteDish,
    path: "/online-bill-payment/dth",
  },

   {
    id: "dth",
    label: "Electricity",
    icon: FaSatelliteDish,
    path: "/online-bill-payment/dth",
  },
 
  {
    id: "broadband",
    label: "Broadband",
    icon: FaWifi,
    path: "/online-bill-payment/broadband",
  },
  {
    id: "cable-tv",
    label: "Cable TV",
    icon: FaTv,
    path: "/online-bill-payment/cable-tv",
  },
  {
    id: "fastag",
    label: "Fastag",
    icon: FaCar,
    path: "/online-bill-payment/fastag",
  },
  {
    id: "loan",
    label: "Loan Repayment",
    icon: FaUniversity,
    path: "/online-bill-payment/loan",
  },
  {
    id: "tax",
    label: "Tax",
    icon: FaReceipt,
    path: "/online-bill-payment/tax",
  },
  {
    id: "ncmc",
    label: "NCMC",
    icon: FaCreditCard,
    path: "/online-bill-payment/ncmc",
  },
];

export default function BillsRechargeTabs() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ul
      role="tablist"
      className="flex gap-2 overflow-x-auto border-b border-gray-200 px-2"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.path;

        return (
          <li key={tab.id} role="presentation">
            <button
              role="tab"
              aria-selected={isActive}
              onClick={() => router.push(tab.path)}
              className={`flex flex-col items-center gap-1 px-3 py-2 min-w-[80px]
                ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }`}
            >
              <Icon size={22} />
              <span className="text-xs font-medium text-center">
                {tab.label}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
