import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function SingleProductPage() {
  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();

  const getSingleProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3001/product?id=${id}`);
      const data = await response.json();
      setSingleProduct(data.data);
    } catch (e) {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

function renderSingleProduct ()  {
    return singleProduct.map((productData) => {
        return (
            
        )
    })
}



}

