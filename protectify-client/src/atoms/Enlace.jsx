import React from "react";
import { Grid } from "@mui/material";
import "../atoms/atoms.css";
import "../index.css";

export default function Enlace(page) {
  return (
    <>
      <Grid
        item
        xs={12}
        lg={2}
        style={{
          margin: "10px",
        }}
        className="container"
      >
        <div className="containerEnlace">
          <a href={page.href} className="enlace">
            {page.nombrePage}
          </a>
        </div>
      </Grid>
    </>
  );
}
