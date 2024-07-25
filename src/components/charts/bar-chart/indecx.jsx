"use client"
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export function VerticalBarChart({ ChartData, barColor }) {
  const options = {
    scales: {
      xAxes: [
        {
          barPercentage: 0.4,
        },
      ],
      x: {
        display: true, // show/ hide x-axis
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
    cornerRadius: 200,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (data) {
            return "Custom Label Text:" + data.formattedValue
          },
        },
      },

      datalabels: {
        formatter: function (value) {
          //custom money icon
          return "₺" + new Intl.NumberFormat("tr-TR").format(value)
        },
        color: "white",
        font: {
          weight: "bold",
          size: 1,
          family: "poppins",
        },
      },
    },
  }
  // The following colors will be used sequentially for the chart bars
  const backgroundColors = [barColor]

  const data = {
    labels: ChartData.map((item) => item.companyName),
    datasets: [
      {
        barPercentage: 13,
        barThickness: 906,
        maxBarThickness: 90,
        borderRadius: 9,
        minBarLength: 0,
        label: ChartData.map((item) => item.progressPaymentPrice),
        data: ChartData.map((item) => item.progressPaymentPrice),
        backgroundColor: backgroundColors,
      },
    ],
  }

  return <Bar data={data} options={options} />
}
