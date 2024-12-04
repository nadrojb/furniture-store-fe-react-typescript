import { Link } from "react-router-dom";

interface categoryCardProps {
  id: number;
  name: string;
  products: number;
  image: string;
}

export default function CategoriesCard({
  id,
  name,
  products,
  image,
}: categoryCardProps) {
  return (
    <>
      <div>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>{products}</p>
        <Link to={`/products/${id}`}></Link>
      </div>
    </>
  );
}
