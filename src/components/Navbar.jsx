import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si"; // ✅ New Twitter X icon
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ROHAN SRIVASTAVA</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>

      <div className="nav-icons">
        <a
          href="mailto:rohanjadavpur@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://x.com/RohanSr52077381"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <SiX />
        </a>
        <a
          href="https://www.linkedin.com/in/rohan-srivastava-607b14198/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <Link to="/contact">
          <button className="hire-btn">Hire Me!</button>
        </Link>
      </div>

      <div className="menu-toggle">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu"
        >
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
          <li className="icon-row">
            <a href="mailto:rohanjadavpur@gmail.com" title="Email">
              <FaEnvelope />
            </a>
            <a href="https://x.com/RohanSr52077381" title="Twitter">
              <SiX />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-srivastava-607b14198/"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <Link to="/contact">
              <button className="hire-btn-mobile">Hire Me!</button>
            </Link>
          </li>
        </motion.ul>
      )}
    </nav>
  );
}
