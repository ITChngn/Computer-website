// Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import { FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";
import "../styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    if (!email || !password) {
      window.alert("Warning", "Please enter email and password.");
      return;
    }
    setLoading(true);

    axios
      .post("http://localhost:4000/api/v1/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setLoading(false);
        if (res.data.success === true) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          window.alert("Login successful.");
          window.location.href = "/";
        }
      })
      .catch(() => {
        window.alert("Warning", "Incorrect email or password.");
        setLoading(false);
      });
  };
  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="login-header">
          <div className="login-text">Нэвтрэх</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <p>Email</p>
          <div className="input">
            <MdOutlineEmail className="icon" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="inputs">
          <p>Нууц үг</p>
          <div className="input">
            <FaLock className="icon" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Нууц үг"
            />
          </div>
        </div>
        <div className="forgot-password">
          Нууц үгээ мартсан?<span> Click here!</span>
        </div>
        <div className="submit-container">
          <div className="submit" onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Нэвтрэх"}
          </div>

          <Link to="/register">
            <div className="submit-button">Бүртгүүлэх</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
