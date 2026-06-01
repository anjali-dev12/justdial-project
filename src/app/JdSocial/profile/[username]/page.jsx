
import ProfilePage from "@/app/components/ProfilePage";

export default function Profile({ params }) {

  const username = params.username;

  return  <ProfilePage username={params.username} />;

}