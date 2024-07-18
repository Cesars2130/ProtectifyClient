import React from 'react'
import { Grid } from "@mui/material";
import TItle from "../atoms/TItle";
import "../index.css";
import FormRegister from '../organisms/FormRegister';

export default function Registrations() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <div className="containerPage">
            <div>
              <TItle text="Registrate" />
            </div>
            <div
              style={{
                margin: "0px",
              }}
            >
              <p >
                Ingresa Tus datos{" "}
              
              </p>
            </div>
            <FormRegister/>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
