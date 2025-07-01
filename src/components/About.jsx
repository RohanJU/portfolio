import "./About.css";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-label">
        <span className="highlight">About Me</span>
      </div>

      <div className="about-content">
        <ImageCard />

        <div className="about-text">
          <p>
            Hello! I’m <strong>Rohan Srivastava</strong>, a Frontend Developer based in Bengaluru, India, with over 3 years of professional experience. I specialize in building scalable, responsive web applications using technologies like React.js, Next.js, JavaScript, HTML, and CSS.
          </p>

          <p>
            My development journey began as a software tester at Infosys, where I built a strong foundation in debugging, performance optimization, and delivering quality software. Over time, I transitioned into frontend development — mastering component-based UI architecture, API integration, and state management using Redux.
          </p>

          <p>
            Whether it’s crafting elegant user interfaces, integrating real-time data, or ensuring cross-browser compatibility, I’m passionate about creating delightful user experiences. If you're looking to collaborate on a project or need a dedicated developer, let's connect!
          </p>

          <Link to="/contact">
            <button className="contact-button">Contact Me</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
