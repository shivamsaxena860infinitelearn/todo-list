import React, { useState } from "react";

function AddTodo(props) {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim() || !desc.trim()) {
      alert("⚠ Please fill all fields.");
      return;
    }

    props.onAdd(title, desc);

    setTitle("");
    setDesc("");
  };

  return (
    <div className="container my-5">

      <div className="card shadow-lg border-0 rounded-4 p-4">

        {/* Heading */}

        <div className="text-center mb-4">

          <h2 className="fw-bold">
            ➕ Add New Task
          </h2>

          <p className="text-muted mb-0">
            Stay organized by adding your daily tasks.
          </p>

        </div>

        <form onSubmit={submit}>

          {/* Title */}

          <div className="mb-3">

            <label className="form-label fw-bold">
              📝 Task Title
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Example: Complete React Assignment"
              value={title}
              maxLength={50}
              onChange={(e) => setTitle(e.target.value)}
            />

            <small className="text-muted">
              {title.length}/50 Characters
            </small>

          </div>

          {/* Description */}

          <div className="mb-3">

            <label className="form-label fw-bold">
              📄 Description
            </label>

            <textarea
              className="form-control"
              rows="4"
              placeholder="Write task details..."
              value={desc}
              maxLength={200}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>

            <small className="text-muted">
              {desc.length}/200 Characters
            </small>

          </div>

          {/* Info */}

          <div className="alert alert-info">

            💡 Tip: Keep task titles short and descriptions meaningful for better productivity.

          </div>

          {/* Button */}

          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold"
          >
            🚀 Add Task
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddTodo;