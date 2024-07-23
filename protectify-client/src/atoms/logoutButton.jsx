import React from "react";
import { logout } from "../auth";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className="logoutButton"
        >
          Logout
        </button>
      </form>
    </>
  );
}
