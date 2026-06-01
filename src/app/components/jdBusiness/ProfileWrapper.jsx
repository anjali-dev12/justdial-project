"use client";
import EditItem from "./EditItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react"; 
import AdditionalInfoSidebar from "../AdditionalInfoSidebar";

export default function ProfileWrapper() {
  const menuImages = [
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-eticq3e-t.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-0836ku0-t.jpg",
    "https://images.jdmagicbox.com/comp/mumbai/s2/022pxx22.xx22.130924120042.y5s2/menu/hotel-sai-dhaba-kalyan-west-kalyan-north-indian-restaurants-cf4bpv9-t.jpg",
  ];

  const router = useRouter();
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  return (
    <div className="bg-white rounded-xl p-4 space-y-3">
      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/business_name_icon.svg"
        title="Business Name"
        value="Hotel Sai Dhaba"
        onClick={() => router.push("/edit-companyname-new")}
      />

      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/contact_details_icon.svg"
        title="Contact Details"
        value="Add Contact Number"
        onClick={() => router.push("/edit-contactsV2")}
      />
      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/map_location_icon.svg"
        title="Business Address"
        value="Survey No 47, Sai Dhaba, Adharwadi Chowk, Kalyan West"
        onClick={() => router.push("/edit-address")}
        missing
      />

      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/clock_icon.svg"
        title="Business Timings"
        value="Opens in 27 mins"
        onClick={() => router.push("/edit-timing")}
      />

      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/accepted_pmt_icon.svg"
        title="Payment Modes"
        value="UPI, Visa / MasterCard / Rupay, Cash"
        onClick={() => router.push("/edit-payments")}
      />

      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/bus_categories.svg"
        title="Business Categories"
        value=" Restaurants, North Indian Restaurants, Chinese Restaurants,
          Home Delivery Restaurants..."
        count="+12 more"
        onClick={() => router.push("/edit-category")}
      />
      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/yr_of_est_icon.svg"
        title="Year of Establishment"
        value="2009"
        onClick={() => router.push("/edit-year")}
      />

      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/menu_icon.svg"
        title="Menu"
        type="menu"
        menuImages={menuImages}
      />

      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/website_url_icon.svg"
        title="Business Website"
        onClick={() => router.push("/edit-website")}
      />

      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/bs_businfo_icon.svg"
        title="Additional Business Info"
        value="Update Cuisines, Establishment Type, Known for and more"
        onClick={() => setShowAdditionalInfo(true)}
      />
      <EditItem
        title="Social Media"
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/social_media_channels_icon.svg"
        onClick={() => router.push("/edit-socialmedia")}
      >
        {/* Social Icons Row */}
        <div className="flex items-center gap-2 mt-1 text-gray-600">
          <Image
            src="https://akam.cdn.jdmagicbox.com/images/icontent/jdbusiness/facebook.svg"
            alt="Facebook"
            width={25}
            height={25}
          />

          <Image
            src="https://akam.cdn.jdmagicbox.com/images/icontent/jdbusiness/youtube.svg"
            alt="Youtube"
            width={25}
            height={25}
          />
          <Image
            src="https://akam.cdn.jdmagicbox.com/images/icontent/jdbusiness/Insta.svg"
            alt="Instagram"
            width={25}
            height={25}
          />
          <Image
            src="https://akam.cdn.jdmagicbox.com/images/icontent/jdbusiness/linkedin.svg"
            alt="Linkdin"
            width={25}
            height={25}
          />
          <Image
            src="https://akam.cdn.jdmagicbox.com/images/icontent/jdbusiness/twitter.svg"
            alt="Twitter"
            width={22}
            height={22}
          />
        </div>
      </EditItem>

      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/report_error_icon.svg"
        title="Report an Error"
        onClick={() => router.push("/edit-reportErrorNew")}
      />

      <EditItem
        icons="https://akam.cdn.jdmagicbox.com/images/icontent/analytics/report_a_legal_issue.svg"
        title="Report Fraud, Offensive or Harmful Issue"
        onClick={() => router.push("/edit-reportFraud")}
      />

      {showAdditionalInfo && (
        <AdditionalInfoSidebar onClose={() => setShowAdditionalInfo(false)} />
      )}
    </div>
  );
}
