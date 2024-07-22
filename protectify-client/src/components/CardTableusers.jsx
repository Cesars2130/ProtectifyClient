import React from "react";
import { Grid } from "@mui/material";

export default function CardTableusers(user) {
  return (
    <>
      <Grid
        item
        xs={12}
        style={{
          borderBottom: " #212121 1px solid",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className="container">
              <h5>{user.name}</h5>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="container">
              <h5>{user.fa}</h5>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="container">
              <h5>{user.fr}</h5>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="container">
              <h5>{user.fra}</h5>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
