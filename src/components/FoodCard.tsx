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
    <div className=" m-5 p-4 rounded  shadow-lg bg-white flex w-screen object-fill">
      <div className=" w-1/3">
        <img className="" src={props.item.image} alt="" />
      </div>
      <div className="  w-1/2 m-4">
        <h1 className="font-bold text-cyan-800 text-xl  ">
          {" "}
          {props.item.name}
        </h1>
        <h2 className="mt-3 text-lg">
          {" "}
          Price: {props.item.price} {props.item.currency}
        </h2>
        <h3 className="grow mt-4 mb-4 text-lg max-w-prose ...">
          {" "}
          {props.item.description}
        </h3>
        <h4 className="text-sm"> Created at : {props.item.createdAt}</h4>
        <h4 className="text-sm"> Updated at: {props.item.updatedAt}</h4>
        <div className="mt-8 place-self-center ">
          <span className="text-xs rounded-full shadow-sm border-spacing-1  outline outline-offset-2 outline-1 ... p-1 ">
            Rating:
            {props.item.rating}
          </span>
        </div>
        <button className=" object-center ml-30 rounded-sm bg-cyan-600 hover:bg-cyan-800 focus:outline-none focus:ring focus:ring-violet-300 mt-4 px-4 py-2 text-white uppercase">
          {" "}
          buy{" "}
        </button>
      </div>
    </div>
  );
};

export default Newcard;
