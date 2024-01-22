// Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Slideshow from "./Slideshow";
import Header from "../../components/header";
import NewProduct from "../../components/newProduct";
import Footer from "../../components/Footer";

function Home() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/getProductList")
      .then((res) => {
        if (res.data.success) {
          setProductList(res.data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="slide-show">
        <Slideshow />
      </div>
      <NewProduct productList={productList} newProname="Онцгой" />
      <Slideshow />
      <NewProduct productList={productList} newProname="Шинэ бүтээгдэхүүн" />
      <NewProduct productList={productList} newProname="Өргөн хэрэглээнд" />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
