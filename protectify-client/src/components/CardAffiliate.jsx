import React from "react";
import "./components.css";
import { Grid } from "@mui/material";

export default function CardAffiliate() {
  return (
    <>
      <div className="cardAffiliate">
        <Grid container>
          <Grid item xs={12} lg={6}>
            <h2 style={{
                margin:"0px"
            }}>Recamara 10</h2>
            <p>Parentesco</p>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="container">
              <p>21/07/2024</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
