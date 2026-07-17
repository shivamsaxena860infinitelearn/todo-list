import React from "react";

function Header({
  title,
  theme,
  toggleTheme,
  search = "",
  setSearch = () => {},
}) {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow">

      <div className="container">

        <a
          className="navbar-brand fw-bold"
          href="/"
          onClick={(e)=>{
            e.preventDefault();

            window.scrollTo({
              top:0,
              behavior:"smooth"
            });
          }}
        >
          ✅ {title}
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >


          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={()=>window.scrollTo({
                  top:0,
                  behavior:"smooth"
                })}
              >
                🏠 Home
              </button>
            </li>


            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={()=>scrollToSection("dashboard")}
              >
                📊 Dashboard
              </button>
            </li>


            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={()=>scrollToSection("tasks")}
              >
                ✅ Tasks
              </button>
            </li>


            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={()=>scrollToSection("about")}
              >
                ℹ️ About
              </button>
            </li>

          </ul>



          {/* SEARCH */}

          <div className="ms-lg-3 mt-3 mt-lg-0">

            <input

              className="form-control"

              type="search"

              placeholder="🔍 Search tasks..."

              value={search}

              onChange={(e)=>setSearch(e.target.value)}

            />

          </div>



          <button
            className="btn btn-warning rounded-pill ms-lg-3 mt-3 mt-lg-0"
            onClick={toggleTheme}
          >

            {
              theme==="light"
              ? "🌙 Dark"
              : "☀️ Light"
            }

          </button>


        </div>

      </div>

    </nav>
  );
}

export default Header;