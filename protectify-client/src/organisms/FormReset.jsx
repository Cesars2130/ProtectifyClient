import React, { useState } from "react";
import { Grid } from "@mui/material";
import "../index.css";
import axios from "axios";
import appData from "../config/appData.json";
import { Toaster, toast } from "sonner";

export default function FormReset() {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Envio De Nueva Contraseña Exitoso");

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
        <Toaster />

      </Grid>
      </form>
    </>
  );
}
