import React from "react";
import TItle from "../atoms/TItle";
import { Grid } from "@mui/material";

export default function CardBgRoom() {
  return (
    <>
      <div className="containerCardPages">
        <div className="cardPages">
          <Grid container spacing={2} direction={"row"} >
            <Grid
              item
              xs={12}
              style={{
                paddingLeft: "40px",
              }}
            >
              <TItle text="Cuartos" />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                paddingLeft: "40px",
              }}
            >
              <div className="cardRoom">
                <h2>Recamara 10</h2>
              </div>
              
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
