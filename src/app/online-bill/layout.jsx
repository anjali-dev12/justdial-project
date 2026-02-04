// app/online-bill-payment/layout.jsx
import Link from "next/link";
import BillsRechargeHeader from "../components/BillsRechargeHeader";
import BillsRechargeTabs from "../components/BillsRechargeTabs";

export default function Layout({  }) {
  return (
    <div className="min-h-screen flex flex-col">

       <BillsRechargeHeader />

       

        <div className=" py-4 px-6 text-sm">
            <BillsRechargeTabs />
        </div>

     
    </div>
  );
}
