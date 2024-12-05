import { Link } from "react-router-dom";

export interface singleProductCardProps {
  stock: number | undefined;
  related: number | undefined;
  color: string | undefined;
  image: string | undefined;
  description: string | undefined;
}

export default function SingleProductCard({
  stock,
  related,
  color,
  image,
  description,
}: singleProductCardProps) {
  return (
    <>
      <div>
        <Link to={"/"}>Back to products</Link>
        <img src={image} alt={""} />
        <p>{stock}</p>
        <p>{color}</p>
        <p>{description}</p>
        <p>{related}</p>
      </div>
    </>
  );
}
