import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Logo & Description */}
        <div className="text-center mb-4">
          <h2 className="footer-title">Todo Manager</h2>

          <p className="footer-desc">
            Organize your daily tasks, manage your workflow, and boost your
            productivity with a simple and modern Todo application.
          </p>
        </div>
<center>
        {/* Navigation */}
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/">Dashboard</a>
          <a href="/">Tasks</a>
          <a href="/">About</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <span>📧 support@todomanager.com</span>
          <span>📱 +91 XXXXX XXXXX</span>
        </div>

        <hr className="footer-line" />

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Todo Manager. All Rights Reserved.
          </p>

          <p>Built with ❤️ using React & Bootstrap</p>
        </div>

        {/* Scroll Button */}
        <div className="text-center mt-4">
          <button
            className="btn btn-primary rounded-circle"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            ↑
          </button>
        </div>
</center>
      </div>
    </footer>
  );
}

export default Footer;