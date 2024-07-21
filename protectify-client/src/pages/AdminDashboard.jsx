import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import TItle from "../atoms/TItle";
import FormAddRoom from "../organisms/FormAddRoom";
import CardBgRoom from "../organisms/CardBgRoom";
import CardAccess from "../components/CardAccess";
import { io } from "socket.io-client";

const saveData = async (data) => {
  const token = "tu_token_jwt_aquí"; // Asegúrate de tener un token válido

  try {
    const response = await fetch("http://tu-servidor.com/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Incluye el token en el encabezado
      },
      body: JSON.stringify(data), // Los datos que quieres enviar
    });

    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error al guardar los datos:", error);
    throw error;
  }
};

export default function AdminDashboard() {
  const [gasData, setGasData] = useState(null);
  const [smokeData, setSmokeData] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
      socket.emit('userId', userId);
    });

    socket.on('data', (data) => {
      console.log('Received data from server:', data);
      if (data.gas && data.smoke) {
        setGasData(data.gas.current);
        setSmokeData(data.smoke.current);
      }
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

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
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <div className="cardSensor">
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
              <p>
                {gasData ? `Nivel de gas: ${gasData}` : "Esperando datos..."}
              </p>
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
              <p>
                {smokeData
                  ? `Nivel de humo: ${smokeData}`
                  : "Esperando datos..."}
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <div>
                <TItle text="Historial De Accesos" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {access2.map((access) => (
                  <Grid item xs={12} lg={6}>
                    <CardAccess key={access.nombre} {...access} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
