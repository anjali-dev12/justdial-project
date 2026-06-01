import GallerySection from "@/app/components/jdBusiness/GallerySection";
import ProfileWrapper from "@/app/components/jdBusiness/ProfileWrapper";

export default function EditProfilePage() {
  return (
         <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-20">
      
      <GallerySection />

      <div className="border border-gray-300 rounded-lg mt-4">
        <ProfileWrapper />
      </div>

    </div>



  )
}