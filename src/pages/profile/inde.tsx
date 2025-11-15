import { useSelector } from "react-redux";

const Profile = () => {
  const  user  = useSelector((state) => state.auth);
  console.log(user,"user");
  return <div className="text-black">Profile</div>;
};

export default Profile;
