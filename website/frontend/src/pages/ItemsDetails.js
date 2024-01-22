// ItemDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductItem from "../components/productItem";
import Header from "../components/header";
import "../styles/itemdetails.css";

function ItemDetails() {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/getOneProduct?_id=${itemId}`)
      .then((res) => {
        if (res.data.success) {
          setItemDetails(res.data.data);
        } else {
          setError("Server returned unsuccessful response.");
        }
      })
      .catch((err) => {
        setError(`Error while fetching item details: ${err.message}`);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!itemDetails) {
    return <p>No item details available.</p>;
  }

  return (
    <div>
      <Header />
      <div className="itemDetails">
        <div className="itemDetails-container">
          <div className="itemDetails-">
            <h2>{itemDetails.name}</h2>
            <ProductItem item={itemDetails} />
          </div>
          <div className="itemDetails-description">
            <p>Description: {itemDetails.description}</p>
            <p>Price: {itemDetails.price}₮</p>
            <p>Stock: {itemDetails.stock}</p>
            <button>Сагслах</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
