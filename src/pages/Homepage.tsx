import { FunctionComponent } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Foodpage from "./Foodpage";

interface HomepageProps {}

const Homepage: FunctionComponent<HomepageProps> = () => {
  return (
    <div className="text-center bg-gray-50 text-gray-800 py-20 px-6">
      <h1 className="text-5xl font-bold mt-0 mb-6">FOOD PLACE</h1>
      <h3 className="text-3xl font-bold mb-8"> check our food!</h3>
      <Link to={"/login"}>
        <a
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Login to Get started
        </a>
      </Link>
    </div>
  );
};

export default Homepage;
