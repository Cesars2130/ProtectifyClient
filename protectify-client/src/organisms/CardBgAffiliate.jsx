import React from "react";
import TItle from "../atoms/TItle";
import { Grid } from "@mui/material";
import CardAffiliate from "../components/CardAffiliate";


export default function CardBgAffiliate() {

    // fetch get setAfiliados
    // 
  const afiliados = [
    {
      nombre: "adolfo",
      parentesco: "primo",
      fechaDeRegistro: "21/07/2002",
    },
    {
        nombre: "adolfo",
        parentesco: "primo",
        fechaDeRegistro: "21/07/2002",
      },
  ];
  
  return (
    <>
      <div className="containerCardPages">
        <div className="cardPages">
          <Grid container spacing={2} direction={"row"}>
            <Grid
              item
              xs={12}
              style={{
                paddingLeft: "40px",
              }}
            >
              <TItle text="Afiliados" />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                paddingLeft: "40px",
              }}
            >
              <CardAffiliate/>
              <CardAffiliate/>
              <CardAffiliate/>

              
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
