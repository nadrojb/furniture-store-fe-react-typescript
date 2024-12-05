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
        <p>Welcome back {username}</p>
      </div>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{products}</p>
        <Link to={`/products/${id}`}>View Products</Link>
      </div>
    </>
  );
}
