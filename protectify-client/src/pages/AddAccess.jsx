import React from "react";
import TItle from "../atoms/TItle";
import { Grid } from "@mui/material";
import CardBgAccess from "../organisms/CardBgAccess";
import Table from "../organisms/Table";
import Graphics from "../organisms/Graphics";

export default function AddAccess() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <CardBgAccess />
        </Grid>

        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Table />
            </Grid>
            <Grid item xs={12}>
             <Graphics/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
