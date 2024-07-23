import React from "react";
import "./components.css";
import { Grid } from "@mui/material";

export default function CardAccess(access) {
  const formatDateTime = (dateString) => {
    const dateObj = new Date(dateString);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString();
    return { date, time };
  };

  const { date, time } = access.exit_at
    ? formatDateTime(access.exit_at)
    : formatDateTime(access.access_at);

  const label = access.exit_at ? "La salida fue en esta fecha:" : "La entrada fue en esta fecha:";

  const getNameFromKeyId = (keyId) => {
    const namesMap = {
      586: "Cesar",
      540: "Monica",
      591: "David",
    };
    return namesMap[keyId] || keyId;
  };

  return (
    <>
      <div
        className="cardAffiliate"
        style={{
          marginBottom: "10px",
        }}
      >
        <Grid container>
          <Grid item xs={12} lg={6}>
            <h2
              style={{
                margin: "0px",
              }}
            >
              {getNameFromKeyId(access.key_id)}
            </h2>
            <p
              style={{
                margin: "0px",
              }}
            >
              Número De Recamara: {access.room_id}
            </p>
            <p
              style={{
                margin: "0px",
              }}
            >
              {time}
            </p>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className="container">
              {label} {date}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

