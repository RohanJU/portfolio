import React from "react";
import "./ServicesSection.css";

function ServiceCard({ color, text }) {
  return (
    <div className={`service-card ${color}`}>
      <div className="circle-accent" />
      <p>{text}</p>
    </div>
  );
}

export default ServiceCard;
