import axios from "axios";
import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Foodcard from "./FoodCard";
import Newcard from "./Newcard";

interface InsidecardProps {}

const Insidecard: FunctionComponent<InsidecardProps> = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  axios
    .get(`https://prisma-food.herokuapp.com/v1/product/${id}`)
    .then((res) => {
      setData(res.data.data);
      console.log(res);
    })
    .catch((err) => console.log(err));
  return (
    <div className="grid grid-cols-2 ">
      <Foodcard item={data} key={id} />
    </div>
  );
};

export default Insidecard;
