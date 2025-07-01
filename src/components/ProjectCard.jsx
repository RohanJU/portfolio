import React from "react";
import "./ProjectSection.css";

function ProjectCard({ title, image, bgColor, tilt, link }) {
  return (
    <div
      className="project-card"
      style={{
        backgroundColor: bgColor,
        transform: `rotate(${tilt}deg)`
      }}
    >
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      {/* Open link in new tab */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="project-button">See Project</button>
      </a>
    </div>
  );
}

export default ProjectCard;
