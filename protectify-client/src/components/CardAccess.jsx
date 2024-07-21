import React from "react";
import "./components.css";
import { Grid } from "@mui/material";

export default function CardAccess(access) {
  return (
    <>
      <div
        className="cardAffiliate"
        style={{
          marginBottom: "10px",
        }}
      >
        <Grid container>
          <Grid item xs={12} lg={6}>
            <h2
              style={{
                margin: "0px",
              }}
            >
              {access.nombre}
            </h2>
            <p
              style={{
                margin: "0px",
              }}
            >
              {access.recamara}
            </p>
            <p
              style={{
                margin: "0px",
              }}
            >
              {access.time}
            </p>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="container">{access.date}</div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
