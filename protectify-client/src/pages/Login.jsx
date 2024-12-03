// src/pages/Login.jsx
import React, { useState } from "react";
import { Grid } from "@mui/material";
import TItle from "../atoms/TItle";
import "../index.css";
import FormLogin from "../organisms/FormLogin";
import FormReset from "../organisms/FormReset";
import { Toaster, toast } from "sonner";

const Login = () => {
  const [showPassForm, setShowPassForm] = useState(false);

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
            ></div>
            <FormLogin />
            <button
              style={{
                color: "#b29e84",
                border: "none",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onClick={() => {
                setShowPassForm(true);
              }}
            >
              Olvidaste tu contraseña?
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          {showPassForm == true && (
            <div className="containerPage">
              <div>
                <TItle text="Recuperar Contraseña" />
              </div>
              <div
                style={{
                  margin: "0px",
                }}
              ></div>
              <FormReset />
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
