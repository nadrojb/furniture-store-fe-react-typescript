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
      <div className="w-40 mb-10">
        <img src={image} alt={""} className="mb-10" />
        <p className="px-1 mb-3" >{stock}</p>
        <p className="px-1">{color}</p>
        <p className="px-1 pb-3">{description}</p>
        <Link to={`/product/${id}`} className="bg-slate-800 text-white py-2.5 px-5 rounded-3xl text-sm font-semibold">View</Link>
      </div>
    </>
  );
}
