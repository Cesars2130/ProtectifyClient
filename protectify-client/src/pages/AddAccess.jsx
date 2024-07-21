import React from "react";
import TItle from "../atoms/TItle";
import { Grid } from "@mui/material";
import CardBgAccess from "../organisms/CardBgAccess";
import Table from "../organisms/Table";

export default function AddAccess() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <div className="cardSensor">
            <CardBgAccess />
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Table />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} lg={7}>
                  <div >

                  </div>
                </Grid>
                <Grid item xs={12} lg={5}></Grid>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
