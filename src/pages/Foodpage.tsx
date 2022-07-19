import axios from "axios";
import { useState } from "react";
import Insidecard from "../components/Insidecards";
import Newcard from "../components/Newcard";

const Food = () => {
  const [data, setData] = useState([]);
  axios
    .get("https://prisma-food.herokuapp.com/v1/productAll")
    .then((res) => {
      setData(res.data.data.products);
      console.log(res);
    })
    .catch((err) => console.log(err));

  return (
    <div className="container mx-auto m-2">
      <div>
        <div className=" grid grid-cols-3 gap-4 ">
          {data?.map((item, index) => {
            return <Newcard item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Food;
