import { useState, useEffect } from "react";
import "./App.css";
import CatergoryButton from "./Components/CategoryButton";

interface categoriesData {
  id: number;
  name: string;
  products: number;
  image: string;
}

function App() {
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
      return <CatergoryButton key={category.id} name={category.name} />;
    });
  }

  return <>{renderCategories()}</>;
}

export default App;
