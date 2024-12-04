import { useState, useEffect } from "react";
import "./App.css";

interface categoriesData {
  id: number;
  name: string;
  products: number;
  image: string;
}

function App() {
  const [categories, setCategories] = useState<categoriesData>({
    id: 1,
    name: "chairs",
    products: 10,
    image: "https://placehold.co/600x400/png",
  });

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setCategories(data);
      });
  }, []);

  function renderCategories() {}

  return <></>;
}

export default App;
