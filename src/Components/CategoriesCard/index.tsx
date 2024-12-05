import { Link } from "react-router-dom";
import { categoriesData } from "../HomePage";
import { useContext } from "react";
import UserContext from "../../Contexts/UserContext";

export default function CategoriesCard({
  id,
  name,
  products,
  image,
}: categoriesData) {
  const { username } = useContext(UserContext);
  return (
    <>
      <div>
        {/* <p>Welcome back {username}</p> */}
      </div>
      <div className="w-40 mb-10">
        <img className=" mb-3" src={image} alt={name} />
        <h3 className="">{name}</h3>
        <p className=" pb-3">{products}</p>
        <Link to={`/products/${id}`} className="bg-slate-800 text-white py-2.5 px-5 rounded-3xl text-sm font-semibold">View</Link>
      </div>
    </>
  );
}
