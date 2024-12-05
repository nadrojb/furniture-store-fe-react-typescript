import { useState, useEffect } from "react";
import CategoriesCard from "../CategoriesCard";
import { Link } from "react-router-dom";

export interface categoriesData {
  id: number;
  name: string;
  products: number;
  image: string;
}

interface CategoriesResponse {
  data: categoriesData[];
}

export default function HomePage() {
  const [categories, setCategories] = useState<categoriesData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data: CategoriesResponse) => {
        setCategories(data.data);
      });
  }, []);

  function renderCategories() {
    return categories.map((category) => {
      return (
        <CategoriesCard
          key={category.id}
          id={category.id}
          name={category.name}
          products={category.products}
          image={category.image}
        />
      );
    });
  }

  return (
    <>
    <div className="px-3 mb-4 h-52 bg-no-repeat bg-cover bg-[url('../../../public/img/hero2.jpg')] ">
      <h2 className="text-2xl font-semibold mb-3 pt-10 pr-6 text-white">Take a look at our most popular categories</h2>
      <Link to={`/products/2`} className="bg-slate-800 text-white py-2.5 px-5 rounded-3xl text-sm font-semibold mr-1" >Tables</Link>
      <Link to={`/products/11`} className="bg-slate-800 text-white py-2.5 px-5 rounded-3xl text-sm font-semibold ml-1" >Sofas</Link>
    </div>
    <h1 className="font-mono mb-3 px-5 font-medium text-lg ">Categories</h1>
      <div className="px-3 flex justify-between flex-wrap">{renderCategories()}</div>
    </>
  );
}
