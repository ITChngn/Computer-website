import React, { useEffect, useState } from "react";
import SearchBar from "./searchbar";
import "../styles/header.css";
import { CiUser } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";
import DropdownButton from "./dropdown";
import axios from "axios";

const Header = (data) => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);
  const [isSticky, setSticky] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  /*  useEffect(() => {
    const loginUser = async () => {
      try {
        setLoading(true);
        const response = await axios.post("localhost:4000//api/login", {
          //your login data 
        });

        console.log("Login Response:", response);

        const userName = response.data?.user?.name || "";
        console.log("User Name:", userName);

        setName(userName);
      } catch (error) {
        setError("Error logging in");
        console.error("Error logging in:", error);
      } finally {
        setLoading(false);
      }
    };

    loginUser();
  }, []);
  */

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  /*const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };*/

  return (
    <header className={`your-header-class ${isSticky ? "sticky" : ""}`}>
      <div className="header-bar">
        <div className="div-dropdown">
          <DropdownButton />
        </div>
        <a href="/">
          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/401198999_1832916347161090_3157211743369510353_n.png?stp=dst-png_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=510075&_nc_ohc=9zs3akfgw44AX_NFpQA&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRvGp4m6GlVNgbbSqkllrj7-bTL7iDlnNfQWbVEEfa5FQ&oe=65A10100"
            alt="My Logo"
          />
        </a>
        <div className="header-search">
          <SearchBar />
        </div>
        <div className="cart-container">
          <GiShoppingCart
            id="cart-icon"
            onClick={() => addToCart({ id: 1, name: "Test Product" })}
          />
          (
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.length}</span>
          )}
          )<p>Сагс</p>
        </div>
        <div className="user-container">
          <a href="/login">
            <CiUser id="user-icon" />
          </a>
          <a href="/login" className="narbar-link">
            <p>{loading ? name : "Нэвтрэх"}</p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
