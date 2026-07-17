import React from "react";

function TodoItems({ todo, onDelete, toggleComplete }) {

  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className={`card shadow-lg border-0 rounded-4 my-4 todo-card ${
        todo.completed ? "completed-task" : ""
      }`}
    >
      <div className="card-body">

        {/* Top */}

        <div className="d-flex justify-content-between align-items-center flex-wrap">

          <div>

            <h4
              className="fw-bold mb-1"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#6c757d" : "",
              }}
            >
              {todo.title}
            </h4>

            <small className="text-muted">
              📅 {today}
            </small>

          </div>

          <span
            className={`badge fs-6 ${
              todo.completed ? "bg-success" : "bg-warning text-dark"
            }`}
          >
            {todo.completed ? "✔ Completed" : "⏳ Pending"}
          </span>

        </div>

        {/* Description */}

        <p
          className="mt-4 mb-4"
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "#6c757d" : "",
            lineHeight: "1.8",
          }}
        >
          {todo.desc}
        </p>

        {/* Buttons */}

        <div className="d-flex gap-3 flex-wrap">

          <button
            className={`btn ${
              todo.completed
                ? "btn-outline-secondary"
                : "btn-success"
            }`}
            onClick={() => toggleComplete(todo)}
          >
            {todo.completed ? "↩ Undo Task" : "✔ Mark Complete"}
          </button>

          <button
            className="btn btn-danger"
            onClick={() => onDelete(todo)}
          >
            🗑 Delete Task
          </button>

        </div>

      </div>
    </div>
  );
}

export default TodoItems;