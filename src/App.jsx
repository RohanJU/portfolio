import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Main Sections
import About from "./components/About";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import ServicesSection from "./components/ServicesSection";
import Resume from "/public/resume.pdf";

// Pages
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

// Home Page Layout
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectSection />
      <ServicesSection />
      <ExperienceSection />
      <About />
      <FAQSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
