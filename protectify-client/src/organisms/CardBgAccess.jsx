import React, { useState, useEffect } from "react";
import TItle from "../atoms/TItle";
import { Grid } from "@mui/material";
import CardAccess from "../components/CardAccess";
import { io } from "socket.io-client";
import appData from "../config/appData.json";



export default function CardBgAccess() {
  // fetch get setAfiliados
  //
  const [accessData, setAccessData] = useState(() => {
    // Recupera las actividades del local storage al iniciar
    const savedAccess = localStorage.getItem("access");
    return savedAccess ? JSON.parse(savedAccess) : [];
  });
  const [socket3, setSocket3] = useState(null);
  useEffect(() => {
    
    const socket3 = io(
      `${appData.wsAccess.protocol}://${appData.wsAccess.host}:${appData.wsAccess.port}`
    );

   
    socket3.on("connect", () => {
      console.log("Connected to Socket.IO Acces server");
      socket.emit("userId", 1);
    });


    socket3.on("newAccess", (newAccess) => {
      console.log("Received new SaveAccess from server:", newAccess);

      setAccessData((prevAccess) => {
        const updatedAccess = [...prevAccess, newAccess];
        localStorage.setItem("access", JSON.stringify(updatedAccess));
        return updatedAccess;
      });
    });

    socket3.on("disconnect", () => {
      console.log("Disconnected from Socket.IO Acccess server");
    });

    
    setSocket3(socket3);

    return () => {
      socket3.disconnect();
    };
  }, []);
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
              {accessData.map((access) => (
                <CardAccess key={access.key_id} {...access} />
              ))}
            </Grid>
          </Grid>
        </div>
    </>
  );
}

//realizar mapeado en espacio grande
