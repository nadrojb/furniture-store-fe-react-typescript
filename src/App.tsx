import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { NotFound } from "./Components/NotFound";
import { DisplayId } from "./Components/DisplayId";
import { ProductsPage } from "./Components/ProductsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/number/5">Showe me an id</Link>
        <Link to="/products/5"></Link>
        <Routes>
          <Route path="number/:id" element={<DisplayId />} />
          <Route path="products/:catId" element={<ProductsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
