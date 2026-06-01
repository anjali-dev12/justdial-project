"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

export default function AcceptedPaymentModes() {
  const [selected, setSelected] = useState([]);
  const router = useRouter();

  const togglePayment = (value) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    router.push("/jd-bussiness/edit-profile");
  };

  const paymentSections = [
    {
      title: "",
      items: [
        {
          label: "Cash",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/cash.svg",
        },
        {
          label: "UPI",
          description:
            "Jd Pay, PhonePe, Google Pay, Paytm, Amazon Pay, etc",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/upi.svg",
        },
      ],
    },
    {
      title: "Credit / Debit Card",
      items: [
        {
          label: "Visa / Master Card / Rupay",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/creditdebitcards.svg",
        },
        {
          label: "American Express",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/americanexpress.svg",
        },
        {
          label: "Diners Club",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/dinersclub.svg",
        },
      ],
    },
    {
      title: "",
      items: [
        {
          label: "Net Banking",
          description: "RTGS, NEFT and IMPS",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/netbanking.svg",
        },
        {
          label: "Sodexo / Pluxee Card",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/sodexo.svg",
        },
      ],
    },
    {
      title: "Wallets",
      items: [
        {
          label: "JioMoney",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/jiomoney.svg",
        },
        {
          label: "Paytm",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/paytm.svg",
        },
        {
          label: "PhonePe",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/phonepay.svg",
        },
        {
          label: "Amazon Pay",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/amazonpay.svg",
        },
        {
          label: "MobiKwik",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/mobikwik.svg",
        },
      ],
    },
    {
      title: "Other Payment Modes",
      items: [
        {
          label: "Cheque / Demand Draft",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/cheque.svg",
        },
        {
          label: "EMI Financing",
          image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/edit/emifacing.svg",
        },
      ],
    },
  ];

  return (
    <div className=" flex justify-center ">
      <div className="w-full bg-white rounded-xl shadow-md">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-300 p-4 flex items-center gap-90 z-50">
          <button onClick={handleBack} className="cursor-pointer">
            <FaChevronLeft size={20} />
          </button>

          <h1 className="font-semibold text-lg">Accepted Payment Modes</h1>
        </div>

        {/* Info Box */}
        <div className="p-4 bg-gray-100 text-[12px] text-gray-700 mx-4 mt-2 rounded-md">
          Update the payment modes accepted by your business for a smoother
          transaction with customers.
          <br />
          <br/>
          Please note that any changes in payment modes will go for audit and
          take upto 2 working days before it goes live.
        </div>

        {/* Payment Sections */}
        <div className="p-4 space-y-6">
          {paymentSections.map((section, index) => (
            <div key={index}>
              {section.title && (
                <h3 className="text-sm font-semibold text-gray-500 mb-3">
                  {section.title}
                </h3>
              )}

              <div className="space-y-3">
                {section.items.map((item) => (
                  <label
                    key={item.label}
                    className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer transition 
                    ${
                      selected.includes(item.label)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200"
                    }`}
                  >
                    {/* LEFT SIDE */}
                    <div className="flex items-start gap-3">

                      {/* Checkbox */}
                      <input
                        type="checkbox"
                        checked={selected.includes(item.label)}
                        onChange={() => togglePayment(item.label)}
                        className="mt-1 h-5 w-5 accent-blue-600"
                      />

                      {/* Text */}
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.label}
                        </p>
                        {item.description && (
                          <p className="text-xs text-gray-500">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-8 h-8 object-contain"
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
  <div className="fixed bottom-0 left-50 w-238 bg-white p-4 shadow-md">
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
    </div>
  );
}
