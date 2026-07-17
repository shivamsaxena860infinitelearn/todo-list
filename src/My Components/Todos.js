import React from "react";
import TodoItems from "./TodoItems";

function Todos({ todos, onDelete, toggleComplete }) {
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.length - completed;

  return (
    <div id="tasks" className="container my-5">

      {/* Heading */}

      <div className="text-center mb-5">

        <h2 className="fw-bold">
          📋 My Tasks
        </h2>

        <p className="text-muted">
          Manage your daily activities efficiently.
        </p>

      </div>

      {/* Quick Summary */}

      <div className="row text-center mb-4">

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm rounded-4 p-3">
            <h6>Total Tasks</h6>
            <h3 className="text-primary fw-bold">
              {todos.length}
            </h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm rounded-4 p-3">
            <h6>Completed</h6>
            <h3 className="text-success fw-bold">
              {completed}
            </h3>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm rounded-4 p-3">
            <h6>Pending</h6>
            <h3 className="text-warning fw-bold">
              {pending}
            </h3>
          </div>
        </div>

      </div>

      {/* Empty State */}

      {todos.length === 0 ? (
        <div className="text-center py-5">

          <h1 style={{ fontSize: "60px" }}>
            📭
          </h1>

          <h3 className="text-muted">
            No Tasks Available
          </h3>

          <p className="text-secondary">
            Add your first task and start organizing your day.
          </p>

        </div>
      ) : (

        <div>

          {todos.map((todo) => (
            <TodoItems
              key={todo.sno}
              todo={todo}
              onDelete={onDelete}
              toggleComplete={toggleComplete}
            />
          ))}

        </div>

      )}

    </div>
  );
}

export default Todos;