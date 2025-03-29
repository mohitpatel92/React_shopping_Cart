import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Nav from "./Components/navbar";
import Product from "./Pages/Products";
import React from 'react';
import "./App.css";
import Cart from "./Pages/Cart";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/Login";



function App() {
  return (
    <div>
      <Nav/>     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </div>
  );
}

export default App;
