import { CalendarDays, MapPin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="tag">
          <CalendarDays size={16} className="icon" />
          Available for hire
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Rohan Srivastava</span>
        </h1>

        <p className="hero-subtitle">
          Frontend Developer with 3+ years of experience building scalable, responsive web
          applications using React.js, Next.js, JavaScript, HTML, and CSS. Skilled in developing
          component-based UIs, integrating RESTful APIs, managing application state with Redux,
          and ensuring cross-browser compatibility. Transitioned from a background in software
          testing at Infosys, bringing strong debugging, performance optimization, and project
          delivery skills.
        </p>

        <div className="hero-buttons">
          <Link to="/contact">
            <button className="btn-primary">Hire Me!</button>
          </Link>
          <Link to="/portfolio">
            <button className="btn-secondary">See my Portfolio</button>
          </Link>
        </div>

        <div className="location">
          <MapPin size={16} className="icon" />
          Bangalore, India
        </div>
      </div>

      <div className="hero-right">
        <img src="/src/assets/rohan_1.png" alt="Rohan Srivastava" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
