import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Insidecard from "./Insidecards";
import { useNavigate, useParams } from "react-router-dom";

interface NewcardProps {
  item: any;
}

const Newcard: FunctionComponent<NewcardProps> = (props) => {
  const params = useParams();
  const navg = useNavigate();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-80 bg-white">
      <img
        className="w-full object-cover h-[50%]"
        src={props.item.image}
        alt=""
      />
      <div className="px-6 py-4">
        <h1 className="font-bold text-cyan-800 text-xl mb-2 ">
          {" "}
          {props.item.name}
        </h1>
        <h2>
          {" "}
          Price: {props.item.price} {props.item.currency}
        </h2>
        <h3 className="truncate ..."> {props.item.description}</h3>
        <Link to={`./${props.item.id}`}>
          <button className="px-4 py-2 rounded bg-cyan-600 text-white mt-1 text-md inline-blcok uppercase">
            {" "}
            more info{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Newcard;
