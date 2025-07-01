import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";

function ProjectSection() {
  const collegeonn = "/assets/pngegg (18).png";
  const easyacademy = "/assets/pngegg (22).png";
  const druzeanalytics = "/assets/pngegg (23).png";

  return (
    <section className="project-section">
      <h2 className="section-heading">
        <span>Featured Projects</span>
      </h2>

      <div className="project-cards-container">
        <ProjectCard
          title="College ONN"
          image={collegeonn}
          bgColor="#B3E5FC"
          tilt={-2}
          link="https://collegeonn.com/"
        />
        <ProjectCard
          title="Easy Academy"
          image={easyacademy}
          bgColor="#FFF59D"
          tilt={2}
          link="https://easyacademy.in/"
        />
        <ProjectCard
          title="Druze Analytics"
          image={druzeanalytics}
          bgColor="#F8BBD0"
          tilt={-1}
          link="https://druzeanalytics.in/"
        />
      </div>

      <Link to="/portfolio">
        <button className="check-portfolio-btn">Check my Portfolio</button>
      </Link>
    </section>
  );
}

export default ProjectSection;
