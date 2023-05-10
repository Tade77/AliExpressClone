import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Error from "./components/Error";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [updates, setUpdates] = useState([]);
  useEffect(() => {
    axios("http://localhost:3001/products")
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setUpdates(data);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products updates={updates} />} />
        <Route
          path="products/:productsId"
          element={<ProductDetails updates={updates} />}
        />
        {/* <Route path="/sign-in" element={<LoginForm />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
