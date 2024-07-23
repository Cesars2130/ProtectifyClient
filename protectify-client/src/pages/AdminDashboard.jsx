import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import TItle from "../atoms/TItle";
import CardAccess from "../components/CardAccess";
import { io } from "socket.io-client";
import appData from "../config/appData.json";

export default function AdminDashboard() {
  const [gasData, setGasData] = useState(null);
  const [smokeData, setSmokeData] = useState(null);
  const [movementData, setMovementData] = useState(null);
  const [accessData, setAccessData] = useState(() => {
    const savedAccess = localStorage.getItem("access");
    return savedAccess ? JSON.parse(savedAccess) : [];
  });

  const [gasWarn, setGasWarn] = useState(false);
  const [smokeWarn, setSmokeWarn] = useState(false);
  const [movementWarn, setMovementWarn] = useState(false);

  const [socket, setSocket] = useState(null);
  const [socket2, setSocket2] = useState(null);
  const [socket3, setSocket3] = useState(null);

  useEffect(() => {
    const socket = io(
      `${appData.wsSmoke.protocol}://${appData.wsSmoke.host}:${appData.wsSmoke.port}`
    );
    const socket2 = io(
      `${appData.wsMovement.protocol}://${appData.wsMovement.host}:${appData.wsMovement.port}`
    );
    const socket3 = io(
      `${appData.wsAccess.protocol}://${appData.wsAccess.host}:${appData.wsAccess.port}`
    );

    socket.on("connect", () => {
      console.log("Connected to Socket.IO SmokeGas server");
      socket.emit("userId", 1);
    });
    socket2.on("connect", () => {
      console.log("Connected to Socket.IO Movement server");
      socket2.emit("userId", 1);
    });
    socket3.on("connect", () => {
      console.log("Connected to Socket.IO Access server");
      socket3.emit("userId", 1);
    });

    socket.on("data", (data) => {
      console.log("Received data from server:", data);
      if (data.gas && data.smoke) {
        setGasData(data.gas.current);
        setSmokeData(data.smoke.current);
      }
      setSmokeWarn(data.smoke.current >= data.smoke.desired);
      setGasWarn(data.gas.current >= data.gas.desired);
    });

    socket2.on("newMovement", (newMovement) => {
      console.log("Received newMovement from server:", newMovement);
      setMovementData(newMovement);
      setMovementWarn(
        newMovement.movement.current >= newMovement.movement.desired
      );
    });

    socket3.on("newAccess", (newAccess) => {
      console.log("Received new SaveAccess from server:", newAccess);

      setAccessData((prevAccess) => {
        const updatedAccess = [...prevAccess, newAccess];
        localStorage.setItem("access", JSON.stringify(updatedAccess));
        return updatedAccess;
      });
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from Socket.IO SmokeGas server");
    });
    socket2.on("disconnect", () => {
      console.log("Disconnected from Socket.IO Movement server");
    });
    socket3.on("disconnect", () => {
      console.log("Disconnected from Socket.IO Access server");
    });

    setSocket(socket);
    setSocket2(socket2);
    setSocket3(socket3);

    return () => {
      socket.disconnect();
      socket2.disconnect();
      socket3.disconnect();
    };
  }, []);

  // Función para formatear la fecha y la hora
  const formatDateTime = (dateString) => {
    const dateObj = new Date(dateString);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString();
    return { date, time };
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <div className="cardSensor">
            <div>
              <TItle
                text={
                  movementData !== null
                    ? "Movimiento Detectado"
                    : "Esperando Datos..."
                }
                warn={movementWarn}
              />
            </div>
            <div
              style={{
                margin: "0px",
              }}
            >
              <p
                style={{
                  margin: "4px",
                }}
              >
                Se Ha Detectado Movimiento
              </p>
              <p
                style={{
                  margin: "4px",
                }}
              >
                Desde El Número De Recamara: {movementData && movementData.room_id}
              </p>
              <p
                style={{
                  margin: "4px",
                }}
              >
                El Día De: {movementData && formatDateTime(movementData.detected_at).date}
              </p>
              <p
                style={{
                  margin: "4px",
                }}
              >
                A las: {movementData && formatDateTime(movementData.detected_at).time}
              </p>
            </div>
          </div>
          <div className="cardSensor">
            <div>
              <TItle
                text={
                  gasData !== null ? `${gasData} ppm` : "Esperando datos..."
                }
                warn={gasWarn}
              />
            </div>
            <div
              style={{
                margin: "0px",
              }}
            >
              <p>Nivel del Gas</p>
            </div>
          </div>
          <div className="cardSensor">
            <div>
              <TItle
                text={
                  smokeData !== null ? `${smokeData} ppm` : "Esperando datos..."
                }
                warn={smokeWarn}
              />
            </div>
            <div
              style={{
                margin: "0px",
              }}
            >
              <p>Nivel de humo</p>
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
                {accessData.map((access) => (
                  <Grid item xs={12} lg={6} key={access.key_id}>
                    <CardAccess {...access} />
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
