import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tabel from "../DataFetch/Tabel";

const ProtectedAdmin = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <div className="App-link">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="container">
        <Tabel/>
      </div>
    </>
  );
};

export default ProtectedAdmin;
