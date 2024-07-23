import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';
import appData from "../config/appData.json";

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale);

export default function Graphics() {
  const [dataFromJson, setDataFromJson] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${appData.ApiPython.protocol}://${appData.ApiPython.host}/api/1`
      );
      const data = await response.json();
      setDataFromJson(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const labels = Object.keys(dataFromJson).filter(
    key => key !== 'media' && key !== 'mediana' && key !== 'moda' && key !== 'varianza' && key !== 'desviacion_estandar'
  );
  const dataValues = Object.values(dataFromJson).map(item => item.frecuencia_absoluta);
  const accumulatedValues = Object.values(dataFromJson).map(item => item.frecuencia_acumulada);

  const pieData = {
    labels: labels,
    datasets: [
      {
        label: 'Frecuencia Absoluta',
        data: dataValues,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Frecuencia Relativa por Nombre',
      },
    },
  };

  const barData = {
    labels: labels,
    datasets: [
      {
        label: 'Frecuencia Acumulada',
        data: accumulatedValues,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Frecuencia Acumulada por Nombre',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Nombres',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Frecuencia Acumulada',
        },
        beginAtZero: true,
      },
    },
  };

  const chartContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '400px',
  };

  const chartStyle = {
    flex: '1',
    width: '48%',
    height: '100%',
  };

  return (
    <div style={chartContainerStyle}>
      <div style={chartStyle}>
        <Pie data={pieData} options={pieOptions} />
      </div>
      <div style={chartStyle}>
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}
