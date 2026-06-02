import { Suspense } from "react";
import WriteReviewPage from "../components/WriteReviewPage";

export default function EditImagePage() {
  return (
    <div className="px-50">
    
         <Suspense fallback={<div>Loading...</div>}>
        <WriteReviewPage />
      </Suspense>
      </div>
      
  );
}
