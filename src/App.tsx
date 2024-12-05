import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import { NotFound } from "./Components/NotFound";
import ProductsPage from "./Components/ProductsPage";
import UserContext from "./Contexts/UserContext";
import SingleProductPage from "./Components/SingleProductPage";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";








function App() {
  const [currentUser, setCurrentUser] = useState("biff");
  return (
    <>
      <UserContext.Provider
        value={{
          username: "biff",
        }}
      >
        <header className="flex justify-between mx-3 align-baseline my-3">
          <div>
            <h1 className="font-mono text-3xl font-semibold text-gray-800">Fuhrn</h1>
          </div>
          <div className="text-2xl text-gray-800">
          <FontAwesomeIcon icon={faCartShopping}/>
          <FontAwesomeIcon icon={faBars} className="ml-3"/>
          </div>
        </header>
          <form action="" className="w-full mx-auto text-center px-3 mb-4">
            <input type="text" placeholder="Search" className="w-2/3 bg-gray-200 py-2 px-2 rounded-l-lg" />
            <input type="submit" className="w-1/3 bg-gray-800 text-white py-2 px-2 rounded-r-lg"/>
          </form>
        <BrowserRouter>
          <Routes>
            <Route path="products/:catId" element={<ProductsPage />} />
            <Route path="product/:productId" element={<SingleProductPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
