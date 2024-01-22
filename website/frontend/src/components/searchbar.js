import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "../styles/module.css";

const SearchBar = () => {
  const [input, setInput] = useState("");

  return (
    <div className="input-wrapper">
      <input
        type="text"
        className="textbox"
        placeholder="Бүтээгдэхүүн хайх..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <CiSearch id="search-icon" />
    </div>
  );
};

export default SearchBar;
