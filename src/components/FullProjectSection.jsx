import React from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.css";

const FullProjectSection = () => {
  return (
    <section className="project-section">
      <h2 className="section-heading">
        <span>My Portfolio</span>
      </h2>
      <p className="portfolio-description">
        Explore some of the key projects I've worked on – each built with passion, precision, and purpose.
      </p>

      <div className="project-cards-container">
        <ProjectCard
          title="CollegeONN"
          image="/src/assets/pngegg (18).png"
          bgColor="#B3E5FC"
          tilt={-2}
          link="https://collegeonn.com/"
        />
        <ProjectCard
          title="Easy Academy"
          image="/src/assets/pngegg (22).png"
          bgColor="#FFF59D"
          tilt={2}
          link="https://easyacademy.in/"
        />
        <ProjectCard
          title="Druze Analytics"
          image="/src/assets/pngegg (23).png"
          bgColor="#F8BBD0"
          tilt={-1}
          link="https://druzeanalytics.in/"
        />
       
       
      </div>
    </section>
  );
};

export default FullProjectSection;
