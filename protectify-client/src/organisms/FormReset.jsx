import React, { useState } from "react";
import { Grid } from "@mui/material";
import "../index.css";
import axios from "axios";
import appData from "../config/appData.json";
import Toastify from 'toastify-js'

export default function FormReset() {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    Toastify({
      text: "Envio Exitoso",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "white",
      },
    }).showToast();
    
  };
  
  return (
    <>
      <form className="containerLogin" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} className="containerInput">
          <input
            type="text"
            placeholder="Correo"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className="containerInput">
          <div className="container">
            <button onClick={handleSubmit} className="loginButton">
              Enviar
            </button>
          </div>
        </Grid>
      </Grid>
      </form>
    </>
  );
}
