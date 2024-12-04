export interface productCardProps {
  id: string;
  stock: number;
  color: string;
  image: string;
  description: string;
}

export function ProductsCard({
  id,
  stock,
  color,
  image,
  description,
}: productCardProps) {
  return (
    <>
      <div>
        <img src={image} alt={name} />
        <p>{stock}</p>
        <p>{color}</p>
        <p>{description}</p>
      </div>
    </>
  );
}
