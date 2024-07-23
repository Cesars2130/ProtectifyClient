import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import CardAffiliate from "../components/CardAffiliate";
import TItle from "../atoms/TItle";

export default function CardBgAffiliate() {
  const [affiliates, setAffiliates] = useState([]);

  useEffect(() => {
    const existingAffiliates = JSON.parse(localStorage.getItem("affiliates")) || [];
    const initialAffiliates = [
      { nombre: "Monica", parentesco: "Amigos", fechaDeRegistro: "21/07/2024" },
      { nombre: "David", parentesco: "Amigos", fechaDeRegistro: "21/07/2024" },
      { nombre: "Cesar", parentesco: "Amigos", fechaDeRegistro: "21/07/2024" },
    ];
    setAffiliates([...initialAffiliates, ...existingAffiliates]);
  }, []);

  return (
    <div className="containerCardPages">
      <div className="cardPages">
        <Grid container spacing={2} direction={"row"}>
          <Grid item xs={12} style={{ paddingLeft: "40px" }}>
            <TItle text="Afiliados" />
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: "40px" }}>
            {affiliates.map((affiliate, index) => (
              <CardAffiliate
                key={index}
                nombre={affiliate.nombre}
                parentesco={affiliate.parentesco}
                fechaDeRegistro={affiliate.fechaDeRegistro}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
