import React, { useState } from 'react';
import './FAQSection.css';

const faqData = [
  {
    question: 'What kind of projects do you work on?',
    answer: 'I build responsive and scalable frontend web applications using React.js and Next.js. Projects include college portals, school websites, and custom business dashboards.'
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in React.js, Next.js, Redux, Tailwind CSS, JavaScript, and UI libraries like Shadcn/UI and Framer Motion.'
  },
  {
    question: 'Can you integrate APIs and manage state?',
    answer: 'Absolutely! I have extensive experience integrating RESTful APIs, managing global state with Redux, and optimizing performance.'
  },
  {
    question: 'What is your previous experience?',
    answer: 'I transitioned from software testing at Infosys into frontend development. I have 3+ years of experience working with real-world React and Next.js projects.'
  },
  {
    question: 'Are you available for freelance or full-time roles?',
    answer: 'Yes, I’m available for both freelance and full-time opportunities based in Bengaluru, India. You can contact me through the website.'
  },
  {
    question: 'How soon can you start a project?',
    answer: 'I’m currently available and can begin within 1–3 days of project confirmation.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq-container" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-box">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              {faq.answer}
            </div>
            <div className="faq-underline"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
