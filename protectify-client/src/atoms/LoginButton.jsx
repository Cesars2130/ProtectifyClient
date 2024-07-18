import React from "react";
import { login } from "../auth";
import { useNavigate } from "react-router-dom";
import "./atoms.css"

export default function LoginButton() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = "dummy-auth-token"; // Este token debe venir de tu servidor
    login(token);
    navigate("/admin");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button onClick={handleSubmit} className="loginButton">
          Login
        </button>
      </form>
    </>
  );
}
