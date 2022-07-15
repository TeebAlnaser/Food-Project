import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  return (
    <div>
      <button className=" shadow-sm bg-slate-400 text-white"> logout </button>
    </div>
  );
};

export default Profile;
