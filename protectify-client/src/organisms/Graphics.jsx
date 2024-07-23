import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, LinearScale, Title, CategoryScale);

export default function Graphics() {
  const dataFromJson = {
    "David Brown Lee": {
      "frecuencia_absoluta": 1,
      "frecuencia_acumulada": 2,
      "frecuencia_relativa": 0.3333333333333333
    },
    "Ivy Gray Silver": {
      "frecuencia_absoluta": 1,
      "frecuencia_acumulada": 3,
      "frecuencia_relativa": 0.3333333333333333
    },
    "John Doe Smith": {
      "frecuencia_absoluta": 1,
      "frecuencia_acumulada": 1,
      "frecuencia_relativa": 0.3333333333333333
    }
  };

  const labels = Object.keys(dataFromJson);
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
    height: '400px', // Ajusta la altura según sea necesario
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