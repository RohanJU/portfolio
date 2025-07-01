import React from "react";
import ServiceCard from "./ServiceCard";
import "./ServicesSection.css";

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <h2>
          <span className="highlight-bg">My Services</span>
        </h2>
        <div className="arrow">↷</div>
      </div>

      <div className="services-grid">
        <ServiceCard color="blue" text="React & Next.js Development" />
        <ServiceCard color="yellow" text="Responsive UI/UX Design" />
        <ServiceCard color="pink" text="API Integration & State Management" />
        <ServiceCard color="blue" text="Performance Optimization & SEO" />
        <ServiceCard color="yellow" text="Cross-Browser Compatibility" />
        <ServiceCard color="pink" text="Frontend Debugging & Testing" />
      </div>
    </section>
  );
}

export default ServicesSection;
