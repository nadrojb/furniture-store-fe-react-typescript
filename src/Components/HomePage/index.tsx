import { useState, useEffect } from "react";
import CategoriesCard from "../CategoriesCard";

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
      <div>{renderCategories()}</div>
    </>
  );
}
