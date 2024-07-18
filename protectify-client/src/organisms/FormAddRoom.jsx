import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useState } from "react";
import "../index.css";
import "../atoms/atoms.css";

export default function FormAddRoom() {
  const [username, setUsername] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/add-room");
  };

  return (
    <>
      <form className="containerLogin" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input
              type="text"
              placeholder="Nombre"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <div className="container">
              <button onClick={handleSubmit} className="loginButton">
                Agregar
              </button>
            </div>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
