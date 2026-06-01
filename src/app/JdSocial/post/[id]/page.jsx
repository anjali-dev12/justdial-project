import CommentPage from "@/app/components/CommentPage";

export default function PostPage({ params }) {
 
    return(
          <div>
            <CommentPage id={params.id} />
            </div>
    );
    

}