import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Catergories from "./Components/Categories";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Categories</Link>
        <Link to="products">Products</Link>
        <Routes>
          <Route path="/" element={<Catergories />}>
            Categories
          </Route>
          <Route path="products">Products</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
