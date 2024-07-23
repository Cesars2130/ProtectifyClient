import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import CardTableusers from "../components/CardTableusers";

export default function Table() {
  const [usersTable, setUsersTable] = useState([]);
  const [statistics, setStatistics] = useState({
    media: 0,
    varianza: 0,
    mediana: 0,
    desviacion_estandar: 0,
    moda: []
  });
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.protectify.shop/api/1");
      const data = response.data;

      const tableData = Object.keys(data)
        .filter(
          key =>
            key !== "media" &&
            key !== "mediana" &&
            key !== "moda" &&
            key !== "varianza" &&
            key !== "desviacion_estandar"
        )
        .map(key => ({
          name: key,
          fa: data[key].frecuencia_absoluta,
          fr: data[key].frecuencia_relativa,
          fra: data[key].frecuencia_acumulada
        }));

      setUsersTable(tableData);
      setStatistics({
        media: data.media || 0,
        varianza: data.varianza || 0,
        mediana: data.mediana || 0,
        desviacion_estandar: data.desviacion_estandar || 0,
        moda: data.moda || []
      });
      setError(null); // Reset error state if the request is successful
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="tableTemplete">
        {error && <div className="error">{error}</div>}
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
                        <h4>frecuencia Acumulada</h4>
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
                            <h2>Media</h2>
                          </Grid>
                          <Grid item xs={6}>
                            <h2>{statistics.media}</h2>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{ margin: "0px", alignItems: "center" }}
                        >
                          <Grid item xs={6}>
                            <h2>Varianza</h2>
                          </Grid>
                          <Grid item xs={6}>
                            <h2>{statistics.varianza}</h2>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{ margin: "0px", alignItems: "center" }}
                        >
                          <Grid item xs={6}>
                            <h2>Mediana</h2>
                          </Grid>
                          <Grid item xs={6}>
                            <h2>{statistics.mediana}</h2>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid
                          container
                          style={{ margin: "0px", alignItems: "center" }}
                        >
                          <Grid item xs={6}>
                            <h2>Desviacion Estandar</h2>
                          </Grid>
                          <Grid item xs={6}>
                            <h2>{statistics.desviacion_estandar}</h2>
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
