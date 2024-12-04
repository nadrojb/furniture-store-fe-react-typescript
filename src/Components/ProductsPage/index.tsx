import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "../ProductsCard";
import { productCardProps } from "../ProductsCard";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { catId } = useParams();

  const getProductsByCategoryId = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/products?cat={catId}"
      );
      const data = await response.json();
      setProducts(data.data);
      console.log(products);
    } catch (e) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    getProductsByCategoryId();
  }, [catId]);

  function renderProduts() {
    return products.map((product) => {
      return (
        <ProductsCard
          key={product.id}
          id={product.id}
          stock={product.stock}
          color={product.color}
          image={product.image}
          description={product.description}
        />
      );
    });
  }

  return <>{renderProduts()}</>;
}
