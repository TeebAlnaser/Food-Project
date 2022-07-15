import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const [user, setUser] = useState("");

  return (
    <div className="container px-10 mx-auto shadow-sm  m-2 p-3  ">
      <div className="flex m-2   justify-center">
        <h1> Username: </h1>
        <input
          className="caret-pink-500 ml-2   bg-slate-200 shadow-sm..."
          onClick={(e) => {}}
        ></input>
      </div>
      <div className="flex m-2  justify-center">
        <h1 className="mr-9"> Email: </h1>
        <input className="caret-pink-500 ml-2   bg-slate-200 shadow-sm..."></input>
      </div>
      <div className="flex m-2    justify-center">
        <h1 className="mr-1"> Password: </h1>
        <input className="caret-pink-500 ml-2   bg-slate-200  shadow-sm..."></input>
      </div>
      <div className="  flex justify-center">
        <button className=" shadow-sm rounded bg-cyan-500 text-white p-3 mt-10 mb-4 px-5">
          login
        </button>
      </div>
      <div className="flex justify-center">
        <button className=" underline "> Forgot Password?</button>
      </div>
    </div>
  );
};

export default Login;
