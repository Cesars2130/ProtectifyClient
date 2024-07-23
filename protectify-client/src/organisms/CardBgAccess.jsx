import React from "react";
import TItle from "../atoms/TItle";
import { Grid } from "@mui/material";
import CardAccess from "../components/CardAccess";

export default function CardBgAccess() {
  // fetch get setAfiliados
  //
  const access2 = [
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/07/2023",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/06/2022",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/07/2023",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/06/2022",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/07/2023",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/06/2022",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/07/2023",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/06/2022",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/07/2023",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/06/2022",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/07/2023",
      time: "21:00",
    },
    {
      nombre: "Adolfo",
      recamara: "recamara",
      date: "21/06/2022",
      time: "21:00",
    },
  ];

  return (
    <>
     
        <div className="containerPage">
          <Grid container spacing={2} direction={"row"}>
            <Grid
              item
              xs={12}
              style={{
                paddingLeft: "40px",
              }}
            >
              <TItle text="Historial De Accesos" />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                paddingLeft: "40px",
              }}
            >
              {access2.map((access) => (
                <CardAccess key={access.nombre} {...access} />
              ))}
            </Grid>
          </Grid>
        </div>
    </>
  );
}

//realizar mapeado en espacio grande
