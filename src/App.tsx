import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);



  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  function renderCategories () {

  }

  return <></>;
}

export default App;
