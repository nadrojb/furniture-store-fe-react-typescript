import { Link } from "react-router-dom";

export interface productCardProps {
  id: string;
  stock: number;
  color: string;
  image: string;
  description: string;
}

export default function ProductsCard({
  id,
  stock,
  color,
  image,
  description,
}: productCardProps) {
  return (
    <>
      <div>
        <img src={image} alt={""} />
        <p>{stock}</p>
        <p>{color}</p>
        <p>{description}</p>
        <Link to={`/product/${id}`}>View Product</Link>
      </div>
    </>
  );
}
