import { Link } from "react-router-dom";
import { categoriesData } from "../HomePage";


export default function CategoriesCard({
  id,
  name,
  products,
  image,
}: categoriesData) {
  return (
    <>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{products}</p>
        <Link to={`/products/${id}`}>View Products</Link>
      </div>
    </>
  );
}
