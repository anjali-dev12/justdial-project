"use client";

import { useState } from "react";
import BillsCategoryGrid from "./BillsCategoryGrid";

const tabs = [
  { id: "pending", label: "Pending Bills" },
  { id: "history", label: "History" },
  { id: "auto", label: "Auto Payment" },
];

export default function MyBillsTabs() {
  const [activeTab, setActiveTab] = useState("pending");

  return (
    <div className="w-full">

      {/* Tabs */}
      <ul className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium
                ${
                  activeTab === tab.id
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Panels */}
      <div className="mt-4">
        {activeTab === "pending" && <PendingBills />}
        {activeTab === "history" && <History />}
        {activeTab === "auto" && <AutoPayment />}
      </div>
    </div>
  );
}

function PendingBills() {
  return (
    <div className="text-center py-6">
      <p className="text-sm text-gray-600 mb-4">
        No bill pending, select a category & get started
      </p>

      <BillsCategoryGrid />
    </div>
  );
}

function History() {
  return <p className="text-sm text-gray-500">No Previous Transaction</p>;
}

function AutoPayment() {
  return <p className="text-sm text-gray-500">Auto Payment section</p>;
}
