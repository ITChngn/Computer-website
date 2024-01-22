// NewProduct.js
import React from "react";
import ProductItem from "./productItem";

const NewProduct = ({ productList, newProname }) => {
  return (
    <div>
      <div className="new-product">
        <h2>{newProname}</h2>
        <div className="container">
          <div className="row">
            {productList.map((item, index) => (
              <ProductItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
