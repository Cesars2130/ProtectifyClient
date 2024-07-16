import React from "react";
import { Grid } from "@mui/material";
import "../index.css";
import "./components.css";

export default function CardGeneric(card) {
  return (
    <>
      <Grid item xs={12} lg={4} >
        <div className="containerCard">
          <div className="franja"
          >
            <div className="header">
              <h1>{card.headTitle}</h1>
            </div>
          </div>
          <div className="containerTextCard">
            <h3>{card.text}</h3>
          </div>
        </div>
      </Grid>
    </>
  );
}
