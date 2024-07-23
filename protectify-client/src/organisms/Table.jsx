import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import CardTableusers from "../components/CardTableusers";
import appData from "../config/appData.json";

export default function Table() {
  const [usersTable, setUsersTable] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${appData.ApiPython.protocol}://${appData.ApiPython.host}/api/1`
      );
      const data = await response.json();
      const users = Object.keys(data)
        .filter(key => key !== 'media' && key !== 'mediana' && key !== 'moda' && key !== 'varianza' && key !== 'desviacion_estandar')
        .map(key => ({
          name: key,
          fa: data[key].frecuencia_absoluta,
          fr: data[key].frecuencia_relativa,
          fra: data[key].frecuencia_acumulada,
        }));
      setUsersTable(users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
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
                      <h4>Frecuencia Absoluta</h4>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="container">
                      <h4>Frecuencia Acumulada</h4>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="container">
                      <h4>Frecuencia Relativa</h4>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  {usersTable.map((user, index) => (
                    <CardTableusers key={index} {...user} />
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
                {/* Add additional content for statistics display if needed */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
