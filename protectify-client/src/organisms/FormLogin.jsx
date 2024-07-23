import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { login } from "../auth";
import "../index.css";
import axios from "axios";
import appData from "../config/appData.json";

export default function FormLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disableMessage, setDisableMessage] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí debes agregar la lógica de autenticación (e.g., llamada a una API)
    const token = "dummy-auth-token"; // Este token debe venir de tu servidor
    login("a")
    axios
      .post(
        `${appData.rest.protocol}://${appData.rest.host}:${appData.rest.port}/users/login`,
        {
          email: email,
          password: password,
        }
      )
      .then((data) => {
        login(JSON.stringify(data.data));
        setDisableMessage(true);
        navigate("/admin");
      })
      .catch((err) => {
        setDisableMessage(false);
      });
  };

  return (
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
          <input
            type="password"
            placeholder="Contraseña"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className="containerInput">
          <p style={{ display: disableMessage ? "none" : "block" }}>
            Credenciales incorrecta
          </p>
        </Grid>
        <Grid item xs={12} className="containerInput">
          <div className="container">
            <button onClick={handleSubmit} className="loginButton">
              Login
            </button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
