import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import TItle from "../atoms/TItle";
import FormAddRoom from "../organisms/FormAddRoom";
import CardBgRoom from "../organisms/CardBgRoom";
import { io } from "socket.io-client";

const saveData = async (data) => {
  const token = 'tu_token_jwt_aquí'; // Asegúrate de tener un token válido
  
  try {
    const response = await fetch('http://tu-servidor.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Incluye el token en el encabezado
      },
      body: JSON.stringify(data) // Los datos que quieres enviar
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error('Error al guardar los datos:', error);
    throw error;
  }
};

export default function AdminDashboard() {
  const [gasData, setGasData] = useState(null);
  const [smokeData, setSmokeData] = useState(null);

  useEffect(() => {
    const socket = io("ws://localhost:3000", {
      transports: ["websocket"],
      path: "/socket.io",
    });

    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
      const userId = 1; // Obtén el userId del usuario de alguna manera
      socket.emit("joinRoom", userId);
    });

    socket.on("gasData", async (data) => {
      console.log("Received gasData:", data);
      setGasData(data);
      try {
        const result = await saveData({ type: 'gas', value: data });
        console.log('Datos guardados:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    });

    socket.on("smokeData", async (data) => {
      console.log("Received smokeData:", data);
      setSmokeData(data);
      try {
        const result = await saveData({ type: 'smoke', value: data });
        console.log('Datos guardados:', result);
      } catch (error) {
        console.error('Error:', error);
      }
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <div>
            <div>
              <TItle text="Nuevo Movimiento" />
            </div>
            <div
              style={{
                margin: "0px",
              }}
            >
              <p>Se ha detectado movimiento desde</p>
            </div>
          </div>
          <div className="cardSensor">
            <div>
              <TItle text="Gas" />
            </div>
            <div
              style={{
                margin: "0px",
              }}
            >
              <p>{gasData ? `Nivel de gas: ${gasData}` : "Esperando datos..."}</p>
            </div>
          </div>
          <div className="cardSensor">
            <div>
              <TItle text="Humo " />
            </div>
            <div
              style={{
                margin: "0px",
              }}
            >
              <p>{smokeData ? `Nivel de humo: ${smokeData}` : "Esperando datos..."}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={4}></Grid>
        <Grid item xs={12} lg={4}></Grid>
      </Grid>
    </>
  );
}
