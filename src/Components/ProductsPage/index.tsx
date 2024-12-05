import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "../ProductsCard";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const { catId } = useParams();

  const getProductsByCategoryId = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/products?cat=${catId}`
      );
      const data = await response.json();
      setProducts(data.data);
    } catch (e) {
      //set error using useState and desplay on render
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

  return (
    <>
      <div className="px-3 mb-4 h-52 bg-no-repeat bg-cover bg-[url('../../../public/img/hero2.jpg')] ">
        <h2 className="text-2xl font-semibold mb-3 pt-10 pr-6 text-white">
          Take a look at our most popular categories
        </h2>
        <Link
          to={`/products/2`}
          className="bg-slate-800 text-white py-2.5 px-5 rounded-3xl text-sm font-semibold mr-1"
        >
          Tables
        </Link>
        <Link
          to={`/products/11`}
          className="bg-slate-800 text-white py-2.5 px-5 rounded-3xl text-sm font-semibold ml-1"
        >
          Sofas
        </Link>
      </div>
      <h1 className="font-mono mb-3 px-5 font-medium text-lg ">Products</h1>
      <div className="w-8 ml-3">
        <Link to={"/"}>
          <img src="../../../public/img/circle-back.svg" alt="" />
        </Link>
      </div>
      <div className="px-3 flex justify-around flex-wrap">
        {renderProduts()}
      </div>
    </>
  );
}
