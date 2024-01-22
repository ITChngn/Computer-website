// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Category from "./pages/Category";
import ShoppingCart from "./pages/ShoppingCart";
import ItemDetails from "./pages/ItemsDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="category/:categoryId" element={<Category />} />
          <Route path="store" element={<ShoppingCart />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
