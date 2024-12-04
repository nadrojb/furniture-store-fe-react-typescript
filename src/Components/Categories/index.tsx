import { useState, useEffect } from "react";

interface categoriesData {
  id: number;
  name: string;
  products: number;
  image: string;
}

export default function Catergories() {
  const [categories, setCategories] = useState<categoriesData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setCategories(data.data);
      });
  }, []);

  function renderCategories() {
    return categories.map((category) => {
      return <CatergoryCard key={category.id} name={category.name} />;
    });
  }

  return <></>;
}
