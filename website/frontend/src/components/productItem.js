import React from "react";

const ProductItem = ({ item, index }) => {
  return (
    <div className="product-item">
      <a href={`/item/${item._id}`} key={index}>
        <img src={item.picture} alt={item.name} />
        <p>{item.name}</p>
        <strong>{item.price}₮</strong>
      </a>
      <a href="/" className="product-item-basked">
        Сагслах
      </a>
    </div>
  );
};

export default ProductItem;
