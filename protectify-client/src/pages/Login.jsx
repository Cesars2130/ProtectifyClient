// src/pages/Login.jsx
import React, { useState } from "react";
import { Grid } from "@mui/material";
import TItle from "../atoms/TItle";
import "../index.css";
import FormLogin from "../organisms/FormLogin";

const Login = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className="containerPage">
            <div>
              <TItle text="Inicia Sesion" />
            </div>
            <div
              style={{
                margin: "0px",
              }}
            >
              <p >
                Si No Tienes Una Cuenta Registrate{" "}
                <a href="./registrations" style={{
                color:"#b29e84"
              }}>Aquí</a>
              </p>
            </div>
            <FormLogin/>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
