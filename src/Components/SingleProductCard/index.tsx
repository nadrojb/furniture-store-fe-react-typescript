
export interface singleProductCardProps {
  id: string;
  stock: number;
  related: number;
  color: string;
  image: string;
  description: string;
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
        <img src={image} alt={""} />
        <p>{stock}</p>
        <p>{color}</p>
        <p>{description}</p>
        <p>{related}</p>
      </div>
    </>
  );
}
