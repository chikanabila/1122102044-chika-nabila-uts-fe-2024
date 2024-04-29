import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProtectedAdmin from "../Dashboard/protectedAdmin";
import './login.css'

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Email, Password }),
      });
      if (!response.ok) {
        const { message } = await response.json();
        setError(message);
        return;
      }
      const { token } = await response.json();
      //simpan token di local storage
      localStorage.setItem("token", token);
      // Set isLoggedIn state to true
      setLoggedIn(true);
      navigate("/login/dashboard");
    } catch (error) {
      setError("Terjadi kesalahan saat Login");
      console.error("Login Error:", error.message);
    }
  };

  const handleRegister = () => {
    navigate("/register"); // Redirect to the registration page
  };

  return (
    <div className="login">
      {error && <div>{error}</div>}
      {!loggedIn && ( // Only show login form or registration link if not logged in
        <form onSubmit={handleSubmit}>
          <div className="container mt-5">
            <h1 className="mb">Login</h1>
            <label className="form-label"
 
htmlFor="email">Email: </label>

            
<input

              
className="form-control"

              
type="text"
 
id="email"

              
value={Email}

              
onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label className="form-label" htmlFor="password">Password: </label>
            <input
              className="form-control"
              type="password" id="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-center">
              <button className="btn btn-primary" type="submit">Login</button>
              <button className="btn btn-secondary" onClick={handleRegister}>Register</button>
            </div>
          </div>
        </form>
      )}
      {loggedIn && <ProtectedAdmin />}
    </div>
  );
};

export default LoginForm;