import React from "react";
import { Grid } from "@mui/material";
import TItle from "../atoms/TItle";
import CardBgRoom from "../organisms/CardBgRoom";
import FormAffiliate from "../organisms/FormAddAffiliate";
import CardBgAffiliate from "../organisms/CardBgAffiliate";

export default function AddAffiliates() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className="containerPage">
            <div>
              <TItle text="Afiliados" />
            </div>
            <div
              style={{
                margin: "0px",
              }}
            >
              <p>Ingrese Los Datos del nuevo afiliado</p>
            </div>
            <FormAffiliate/>
          </div>
        </Grid>
        <Grid item xs={12} lg={6}>
          <CardBgAffiliate/>
        </Grid>
      </Grid>
    </>
  );
}
