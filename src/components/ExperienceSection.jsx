import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./ExperienceSection.css";

function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header">
        <h2>
          <span className="highlight-bg">My Experience</span>
        </h2>
        <div className="arrow">↷</div>
      </div>

      <div className="experience-list">
        <ExperienceCard
          year="May 2024 – Present"
          title="Frontend Developer at Robomanthan Pvt Ltd"
          description="Built the official website using React.js and Next.js. Integrated REST APIs and created responsive UIs with Tailwind CSS. Focused on performance optimization and accessibility (WCAG)."
          color="blue"
        />
        <ExperienceCard
          year="Mar 2022 – Feb 2024"
          title="Frontend Developer at Infosys Limited"
          description="Developed internal tools with React.js and JavaScript. Enhanced UI interactions, managed component states, and collaborated across backend and QA teams for seamless workflows."
          color="yellow"
        />
        <ExperienceCard
          year="Sep 2021 – Feb 2022"
          title="Test Engineer at Infosys Limited"
          description="Executed manual testing, bug reporting with JIRA, and contributed to UAT and regression cycles. Played a key role in issue identification and coordination with QA teams."
          color="pink"
        />
      </div>
    </section>
  );
}

export default ExperienceSection;
