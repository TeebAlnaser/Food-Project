import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth";

interface NewheaderProps {}

const Newheader: FunctionComponent<NewheaderProps> = () => {
  const auth = useAuth();

  return (
    <div className="flex items-center justify-between py-4 w-full   px-2 pl-10 ">
      <div className=" flex gap-4 subpixel-antialiased text-2xl  font-bold text-cyan-500">
        <Link className="hover:scale-105" to="./home">
          {" "}
          Home{" "}
        </Link>
        <Link className="hover:scale-105" to="./food">
          {" "}
          Food{" "}
        </Link>
        <Link className="hover:scale-105" to="./counter">
          contact us{" "}
        </Link>
      </div>
      <div>
        <span className="rounded-full bg-sky-400  h-12 w-12 text-center flex items-center justify-center"></span>
      </div>
      {!auth.user && (
        <Link className="hover:scale-105" to="./login">
          login{" "}
        </Link>
      )}
    </div>
  );
};

export default Newheader;
