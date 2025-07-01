import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigateAndScrollTop = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <ul className="footer-nav">
          <li onClick={() => handleNavigateAndScrollTop("/portfolio")}>
            Portfolio
          </li>
          <li>
            <HashLink smooth to="/#faq">
              FAQ
            </HashLink>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>

        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/rohan-srivastava-607b14198/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://x.com/RohanSr52077381"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a
            href="mailto:rohanjadavpur@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="footer-content">
        <h2>Ready to Bring Your Vision to Life?</h2>
        <p>
          Let’s make something incredible together! Reach out to discuss your
          project, and let’s create designs that resonate and inspire.
        </p>
        <button
          className="hire-btn"
          onClick={() => handleNavigateAndScrollTop("/contact")}
        >
          Hire Me!
        </button>
      </div>

      <div className="footer-bottom">
        <p>
          <span>Rohan Srivastava</span> © all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
