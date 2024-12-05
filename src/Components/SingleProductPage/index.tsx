import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleProductCard, {
  singleProductCardProps,
} from "../SingleProductCard";

export default function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState<singleProductCardProps>();
  const { productId } = useParams();

  const getSingleProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/product?id=${productId}`
      );
      const data = await response.json();
      setSingleProduct(data.data as singleProductCardProps);
    } catch (e) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <>
      <SingleProductCard {...singleProduct} />
    </>
  );
}
