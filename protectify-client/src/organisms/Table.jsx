import React from "react";
import { Grid } from "@mui/material";
import CardTableusers from "../components/CardTableusers";

export default function Table() {
  const usersTable = [
    {
      name: "adolfo",
      fa: "24",
      fr: "90",
      fra: "10",
    },
    {
      name: "adolfo",
      fa: "24",
      fr: "90",
      fra: "10",
    },
    {
      name: "adolfo",
      fa: "24",
      fr: "90",
      fra: "10",
    },
  ];
  return (
    <>
      <div className="tableTemplete">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <div className="container">
                        <h4>Usuario</h4>
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="container">
                        <h4>frecuencia Absoluta</h4>
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="container">
                        <h4>frecuencia Acumuluda</h4>{" "}
                      </div>
                    </Grid>
                    <Grid item xs={3}>
                      <div className="container">
                        <h4>frecuencia Relativa</h4>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    {usersTable.map((user) => (
                      <CardTableusers key={user.name} {...user} />
                    ))}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <h2
                      style={{
                        borderBottom: " #212121 1px solid",
                      }}
                    >
                      Dispersion y Tendencia Central
                    </h2>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{ margin: "0px", alignItems: "center" }}
                        >
                          <Grid item xs={6}>
                            <h2>Ejemplo</h2>
                          </Grid>
                          <Grid item xs={6}>
                            <h2>23</h2>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{ margin: "0px", alignItems: "center" }}
                        >
                          <Grid item xs={6}>
                            <h2>Ejemplo</h2>
                          </Grid>
                          <Grid item xs={6}>
                            <h2>23</h2>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{ margin: "0px", alignItems: "center" }}
                        >
                          <Grid item xs={6}>
                            <h2>Ejemplo</h2>
                          </Grid>
                          <Grid item xs={6}>
                            <h2>23</h2>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{ margin: "0px", alignItems: "center" }}
                        >
                          <Grid item xs={6}>
                            <h2>Ejemplo</h2>
                          </Grid>
                          <Grid item xs={6}>
                            <h2>23</h2>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{ margin: "0px", alignItems: "center" }}
                        >
                          <Grid item xs={6}>
                            <h2>Ejemplo</h2>
                          </Grid>
                          <Grid item xs={6}>
                            <h2>23</h2>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{ margin: "0px", alignItems: "center" }}
                        >
                          <Grid item xs={6}>
                            <h2>Ejemplo</h2>
                          </Grid>
                          <Grid item xs={6}>
                            <h2>23</h2>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
    </>
  );
}
