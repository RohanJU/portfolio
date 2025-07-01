import React from "react";
import "./ExperienceSection.css";

function ExperienceCard({ year, title, description, color }) {
  return (
    <div className={`experience-card ${color}`}>
      <div className="circle-accent" />
      <p className="year">{year}</p>
      <h3 className="role">{title}</h3>
      <hr />
      <p className="description">{description}</p>
    </div>
  );
}

export default ExperienceCard;
