import { FaLinkedin } from "react-icons/fa";
import "./ContactSection.css";
import { SiX } from "react-icons/si"; // ✅ New Twitter X icon


const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        Have a project idea or collaboration in mind? Reach out via the form or
        connect with me directly.
      </p>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-left">
          <div className="email-block">
            <p className="label-highlight">Email</p>
            <p className="email-value">rohanjadavpur@gmail.com</p>
          </div>

          <div className="socials-block">
            <p className="label-highlight">Socials</p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/rohansrivastava9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://x.com/RohanSr52077381"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <SiX />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-container">
          <p className="label-highlight">Contact Form</p>

          <form
            className="contact-form"
            action="https://formsubmit.co/rohanjadavpur@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />

            <label>
              <span className="blue-label">Name</span>
              <input type="text" name="name" required />
            </label>

            <label>
              <span className="blue-label">Email</span>
              <input type="email" name="email" required />
            </label>

            <label>
              <span className="blue-label">Your Message</span>
              <textarea name="message" required></textarea>
            </label>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
