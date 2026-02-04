"use client";

const categories = [
  "Prepaid",
  "Postpaid",
  "DTH",
  "Electricity",
  "Book Cylinder",
  "Pay Gas Bill",
  "Landline",
  "Water",
  "Insurance",
  "Broadband",
  "Cable TV",
  "Fastag",
  "Loan Repayment",
  "Tax",
  "NCMC",
  "Donation",
  "Subscription",
  "Education",
  "Housing Society",
  "Rental",
  "NPS",
  "Mutual Funds",
  "Prepaid Meter",
  "eChallan",
  "Agent Collection",
  "Municipal Services",
  "Hospitals & Pathology"
];

export default function BillsCategoryGrid() {
  return (
    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
      {categories.map((item) => (
        <li key={item}>
          <button
            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-100"
          >
            <span className="w-10 h-10 rounded-full bg-blue-100"></span>
            <span className="text-xs text-gray-700 text-center">
              {item}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
