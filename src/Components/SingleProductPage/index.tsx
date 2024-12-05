import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SingleProductCard from "../SingleProductCard";

export default function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState([]);
  const { productId } = useParams();

  const getSingleProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/product?id=${productId}`
      );
      const data = await response.json();
      setSingleProduct(data.data);
      console.log(singleProduct);
    } catch (e) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  function renderSingleProduct() {
    return singleProduct.map((productData) => {
      return (
        <SingleProductCard
          key={productData.id}
          id={productData.id}
          stock={productData.stock}
          related={productData.related}
          color={productData.color}
          image={productData.image}
          description={productData.description}
        />
      );
    });
  }
  return <>{renderSingleProduct()}</>;
}
