import React from "react";
import { Line } from "react-chartjs-2";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";

const options = {
  responsive: true
}

function LineChart({ chartData }) {
  return <Line data={chartData} options={options}/>;
}

export default LineChart;