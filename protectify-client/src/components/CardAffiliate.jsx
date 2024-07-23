import React from "react";
import { Grid } from "@mui/material";
import "./components.css";

export default function CardAffiliate({ nombre, parentesco, fechaDeRegistro }) {
  return (
    <div className="cardAffiliate">
      <Grid container>
        <Grid item xs={12} lg={6}>
          <h2 style={{ margin: "0px" }}>{nombre}</h2>
          <p>{parentesco}</p>
        </Grid>
        <Grid item xs={12} lg={6}>
          <div className="container">
            <p>{fechaDeRegistro}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
