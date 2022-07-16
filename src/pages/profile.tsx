import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";

interface ProfileProps {}

const Profile: FunctionComponent<ProfileProps> = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const logoutHander = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <h1> hello {auth.user} </h1>
      <button
        className=" shadow-sm bg-slate-400 text-white"
        onClick={logoutHander}
      >
        {" "}
        logout{" "}
      </button>
    </div>
  );
};

export default Profile;
