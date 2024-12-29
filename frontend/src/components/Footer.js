import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="footer-text">&copy; 2024 ASCENTech Assignment.</p>
        <p className="footer-text">
          Designed by{" "}
          <a href="https://www.your-website-link.com" className="footer-link">
            Bhavesh Laku
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
