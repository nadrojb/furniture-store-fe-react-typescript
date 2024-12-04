import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Categories from "./Components/HomePage";
import { NotFound } from "./Components/NotFound";
import { DisplayId } from "./Components/DisplayId";

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/number/5">Showe me an id</Link>
        <Routes>
          <Route path="number/:id" element={<DisplayId />} />
          <Route path="/" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
