import React from "react";
import { Grid } from "@mui/material";
import TItle from "../atoms/TItle";
import FormAddRoom from "../organisms/FormAddRoom";
import CardBgRoom from "../organisms/CardBgRoom";

export default function AddRooms() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className="containerPage">
            <div>
              <TItle text="Cuartos" />
            </div>
            <div
              style={{
                margin: "0px",
              }}
            >
              <p>Ingrese los datos del nuevo cuarto</p>
            </div>
            <FormAddRoom />
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <CardBgRoom />
        </Grid>
      </Grid>
    </>
  );
}
