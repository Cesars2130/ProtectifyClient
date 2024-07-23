import React, { useState } from "react";
import { Grid } from "@mui/material";
import "../index.css";
import "../atoms/atoms.css";

export default function FormAffiliate() {
  const [username, setUsername] = useState("");
  const [firstLastName, setFirstLastName] = useState("");
  const [secondLastName, setSecondLastName] = useState("");
  const [parentesco, setParentesco] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAffiliate = {
      nombre: `${username} ${firstLastName} ${secondLastName}`,
      parentesco,
      fechaDeRegistro: new Date().toLocaleDateString(),
    };
    const existingAffiliates = JSON.parse(localStorage.getItem("affiliates")) || [];
    localStorage.setItem("affiliates", JSON.stringify([...existingAffiliates, newAffiliate]));
    setUsername("");
    setFirstLastName("");
    setSecondLastName("");
    setParentesco("");
  };

  return (
    <form className="containerLogin" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} className="containerInput">
          <input
            type="text"
            placeholder="Nombre"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className="containerInput">
          <input
            type="text"
            placeholder="Apellido Paterno"
            className="input"
            value={firstLastName}
            onChange={(e) => setFirstLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className="containerInput">
          <input
            type="text"
            placeholder="Apellido Materno"
            className="input"
            value={secondLastName}
            onChange={(e) => setSecondLastName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className="containerInput">
          <input
            type="text"
            placeholder="Parentesco"
            className="input"
            value={parentesco}
            onChange={(e) => setParentesco(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <div className="container">
            <button type="submit" className="loginButton">
              Agregar
            </button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
