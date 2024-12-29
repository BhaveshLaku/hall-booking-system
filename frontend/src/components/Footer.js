import React from "react";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">&copy; 2024 ASCENTech Assignment</p>
        <p className="footer-text">
          Designed by{" "}
          <a
            href="https://www.your-website-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Bhavesh Laku
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
