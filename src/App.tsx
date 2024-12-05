import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { NotFound } from "./Components/NotFound";
import { ProductsPage } from "./Components/ProductsPage";
import UserContext from "./Contexts/UserContext";

function App() {
  const [currentUser, setCurrentUser] = useState("biff");
  return (
    <>
      <UserContext.Provider
        value={{
          username: "biff",
        }}
      >
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Routes>
            <Route path="products/:catId" element={<ProductsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
