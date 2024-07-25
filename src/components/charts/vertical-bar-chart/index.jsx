"use client"
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function LineChart({ ChartData }) {
  const options = {
    scales: {
      x: {
        display: true, // show/hide x-axis
        grid: {
          display: false, // show/hide grid line in x-axis
        },
      },
      y: {
        display: true, // same as x-axis
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Set this to false to hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (data) {
            return "Custom Label Text: " + data.formattedValue
          },
        },
      },
    },
  }

  const data = {
    labels: ChartData.map((item) => item.companyName),
    datasets: [
      {
        data: ChartData.map((item) => item.blueLineData),
        borderColor: "#5482F7",
        backgroundColor: "rgba(84, 130, 247, 0.2)",
        fill: true,
        tension: 0.4, // curve the lines
      },
      {
        data: ChartData.map((item) => item.redLineData),
        borderColor: "#FF0000",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        fill: true,
        tension: 0.4, // curve the lines
      },
    ],
  }

  return <Line data={data} options={options} />
}
