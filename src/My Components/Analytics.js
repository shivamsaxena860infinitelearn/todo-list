import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Analytics({ todos }) {

  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const pending = total - completed;

  // =========================
  // Bar Chart
  // =========================

  const barData = {
    labels: ["Total", "Completed", "Pending"],
    datasets: [
      {
        label: "Tasks",
        data: [total, completed, pending],
        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#ffc107"
        ]
      }
    ]
  };

  // =========================
  // Pie Chart
  // =========================

  const pieData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: [
          "#198754",
          "#dc3545"
        ]
      }
    ]
  };

  // =========================
  // Doughnut
  // =========================

  const doughnutData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completed, pending],
        backgroundColor: [
          "#20c997",
          "#fd7e14"
        ]
      }
    ]
  };

  return (

    <div className="container my-5" id="analytics">

      <h2 className="text-center fw-bold mb-5">
        📊 Analytics Dashboard
      </h2>

      <div className="row g-4">

        <div className="col-lg-4">

          <div className="card shadow border-0 rounded-4 p-4">

            <h4 className="text-center mb-4">
              📈 Tasks Overview
            </h4>

            <Bar data={barData} />

          </div>

        </div>

        <div className="col-lg-4">

          <div className="card shadow border-0 rounded-4 p-4">

            <h4 className="text-center mb-4">
              🥧 Task Distribution
            </h4>

            <Pie data={pieData} />

          </div>

        </div>

        <div className="col-lg-4">

          <div className="card shadow border-0 rounded-4 p-4">

            <h4 className="text-center mb-4">
              🍩 Productivity
            </h4>

            <Doughnut data={doughnutData} />

          </div>

        </div>

      </div>

    </div>

  );

}

export default Analytics;