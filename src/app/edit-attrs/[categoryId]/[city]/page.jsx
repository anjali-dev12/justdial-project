
import EstablishmentType from "@/app/components/EstablishmentType";
import EditCuisinesPage from "@/app/components/EditCuisinesPage";
import KnownFor from "@/app/components/KnownFor";
import DeliveryDetails from "@/app/components/DeliveryDetails";
import AverageCost from "@/app/components/AverageCost";
import MustOrderPage from "@/app/components/MustOrderPage";
import AlcoholPage from "@/app/components/AlcoholPage";
import ParkingPage from "@/app/components/ParkingPage";
import SpecialOfferingPage from "@/app/components/SpecialOfferingPage";
import AmenitiesPage from "@/app/components/AmenitiesPage";
import DiningOptionsPage from "@/app/components/DiningOptionsPage";
import SeatingOptions from "@/app/components/SeatingOptions";
import ServesPage from "@/app/components/SerevesPage";
import ServicesPage from "@/app/components/ServicesPage";
import GamingActivitiesPage from "@/app/components/GamingActivitiesPage";
import EntertainmentPage from "@/app/components/EntertainmentPage";
import BillingPage from "@/app/components/BillingPage";
import CrowdPage from "@/app/components/CrowdPage";
import Atmosphere from "@/app/components/Atmosphere";
import ReservationPage from "@/app/components/ReservationPage";
import DressCodePage from "@/app/components/DressCodePage";
import ComplimentaryPage from "@/app/components/ComplimentaryPage";

export default async function Page({ params }) {

  // ✅ unwrap promise
  const { categoryId, city } = await params;

  const componentMap = {
    "26": EditCuisinesPage,
    "25": EstablishmentType,
    "28": KnownFor,
    "268": DeliveryDetails,
    "31": AverageCost,
    "30": MustOrderPage,
    "33": AlcoholPage,
    "515": ParkingPage,
    "479":SpecialOfferingPage,
    "3": AmenitiesPage,
    "128": DiningOptionsPage,
    "478": SeatingOptions,
    "66" :ServesPage,
    "2": ServicesPage,
    "69": GamingActivitiesPage,
    "65" : EntertainmentPage,
    "10": BillingPage,
    "124": CrowdPage,
    "123": Atmosphere,
    "63" : ReservationPage,
    "64" : DressCodePage,
    "67" : ComplimentaryPage,
  };

  const SelectedComponent = componentMap[String(categoryId)];

  return (
    <>
      {SelectedComponent ? (
        <SelectedComponent />
      ) : (
        <h3>Data Not Found</h3>
      )}
    </>
  );
}