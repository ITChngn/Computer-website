/* eslint-disable react/jsx-no-comment-textnodes */
// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import { FaLock } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import "../styles/login.css";
import axios from "axios";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleRegistration = () => {
    setLoading(true);

    // Replace 'YOUR_API_ENDPOINT' with the actual endpoint you are working with
    axios
      .post("http://localhost:4000/api/v1/register", {
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.success === true) {
          window.alert("Registration successful.");
          // Navigate to the login page or update the UI as needed
        }
      })
      .catch(() => {
        setLoading(false);
        window.alert("Registration failed.");
      });
  };

  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-header">
          <div className="login-text">Бүртгүүлэх</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <p>Firstname</p>
          <div className="input">
            <FaRegUser className="icon" />
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
        </div>
        <div className="inputs">
          <p>Lastname</p>
          <div className="input">
            <FaRegUser className="icon" />
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <div className="inputs">
          <p>Email</p>
          <div className="input">
            <MdOutlineEmail className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="inputs">
          <p>Нууц үг</p>
          <div className="input">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Нууц үг"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="inputs">
          <p>Нууц үг давтах</p>
          <div className="input">
            <FaLock className="icon" />
            <input
              type="password"
              name="password"
              value={confirmPassword}
              placeholder="Нууц үг давтах"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="submit-container">
          <div
            className="submit"
            onClick={handleRegistration}
            disabled={loading}
          >
            {loading ? "Registering..." : "Бүртгүүлэх"}
          </div>
          <Link to="/login">
            <div className="submit-button">Нэвтрэх</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
