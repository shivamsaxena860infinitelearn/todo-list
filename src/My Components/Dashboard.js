import React from "react";
import ExportPDF from "./ExportPDF";

function Dashboard({ todos }) {

  // ==========================
  // Statistics
  // ==========================

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = total - completed;

  const progress =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  // ==========================
  // Current Date
  // ==========================

  const currentDate = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // ==========================
  // Greeting
  // ==========================

  const hour = new Date().getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "🌅 Good Morning";
  } else if (hour < 17) {
    greeting = "☀️ Good Afternoon";
  } else {
    greeting = "🌙 Good Evening";
  }

  // ==========================
  // Productivity
  // ==========================

  const status =
    progress === 100
      ? "🏆 Excellent! All tasks completed."
      : progress >= 70
      ? "🔥 Great progress! Keep it up."
      : progress >= 40
      ? "💪 You're doing well."
      : "🚀 Let's start completing tasks.";

  return (

    <div
      id="dashboard"
      className="container my-5"
    >

      {/* Welcome */}

      <div className="card shadow-lg border-0 rounded-4 p-5 text-center mb-5">

        <h2 className="fw-bold">
          {greeting}, Welcome to Todo Manager 👋
        </h2>

        <p className="text-muted fs-5">
          Organize your work, manage daily tasks and stay productive.
        </p>

        <h5 className="text-primary mt-2">
          📅 Today : {currentDate}
        </h5>

        <div className="mt-4">

          <button
            className="btn btn-danger px-4"
            onClick={() => ExportPDF(todos)}
          >
            📄 Download PDF Report
          </button>

        </div>

      </div>

      {/* Cards */}

      <div className="row g-4">

        <div className="col-lg-3">

          <div className="card shadow border-0 rounded-4 text-center p-4">

            <h5>📋 Total Tasks</h5>

            <h1 className="text-primary fw-bold mt-3">
              {total}
            </h1>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="card shadow border-0 rounded-4 text-center p-4">

            <h5>✅ Completed</h5>

            <h1 className="text-success fw-bold mt-3">
              {completed}
            </h1>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="card shadow border-0 rounded-4 text-center p-4">

            <h5>⏳ Pending</h5>

            <h1 className="text-warning fw-bold mt-3">
              {pending}
            </h1>

          </div>

        </div>

        <div className="col-lg-3">

          <div className="card shadow border-0 rounded-4 text-center p-4">

            <h5>📈 Progress</h5>

            <div
              className="progress my-3"
              style={{ height: "12px" }}
            >

              <div
                className="progress-bar bg-success"
                style={{
                  width: `${progress}%`,
                }}
              />

            </div>

            <h3 className="fw-bold">
              {progress}%
            </h3>

          </div>

        </div>

      </div>

      {/* Productivity */}

      <div className="card shadow-lg border-0 rounded-4 p-4 mt-5 text-center">

        <h4 className="fw-bold mb-3">

          🎯 Productivity Status

        </h4>

        <p className="lead">

          {status}

        </p>

      </div>

    </div>

  );

}

export default Dashboard;