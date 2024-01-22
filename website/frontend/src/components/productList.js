import React, { useState } from "react";
import ProductItem from "./productItem";

const ProductList = (products) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    // You can also perform other cart-related logic here
  };

  return (
    <div>
      {/* Render a list of products */}
      {products.map((product) => (
        <ProductItem key={product.id} item={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
