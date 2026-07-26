import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Typewriter } from "react-simple-typewriter";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMongodb, SiVercel } from "react-icons/si";
import projectImg from "../assets/pasteappimage.png";
import organizenotes from "../assets/organizenotes.png"
import ecommerce from "../assets/e-commerce.png"
import amanPhoto from "../assets/profilephoto.jpeg";
import "./Navbar.css";

function Navbar() {
  const [showSecond, setShowSecond] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState("frontend");
  // 1. Hook stays at the top level of the component
const [isSending, setIsSending] = useState(false);
const sendEmail = (e) => {
    e.preventDefault();
    
    // 2. Update state to true
    setIsSending(true);

    emailjs
      .sendForm(
        "service_pi8escn",
        "template_7tav3pk",
        e.target,
        "EIjb4xAjyyI8CRuZj"
      )
      .then(() => {
        alert(" thank You! Your Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => { 
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again.");
      }) 
      .finally(() => {
        setIsSending(false);
      });
};
  const skillsData = {
    frontend: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#47A248" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    languages: [
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
    ],
    tools: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#f2efefff" },
      { name: "Vercel", icon: SiVercel, color: "#f5f2f2ff" },
      { name: "Firebase", icon: SiVercel, color: "rgb(243, 203, 203)" },
      { name: "Render", icon: SiVercel, color: "rgb(173, 171, 171)" },
      { name: "Railway", icon: SiVercel, color: "rgb(179, 129, 129)" },

    ],
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecond(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    
    <div className="container dark">
      <div className="Header">
        <div className="left-section">
          <h1 className="Name">Aman Yadav</h1>
        </div>
        <div className="humburger" onClick={() => setMenuOpen(!menuOpen)}>
          {" "}
          ☰{" "}
        </div>
        <div className={`Middle-section ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          {/* <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>
            Testimonials
          </a> */}
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <button
            className="resume"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Aman_Yadav_Resume.pdf";
              link.download = "Aman_Yadav_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Get Resume
          </button>
        </div>

        <div className="Right-section">
          <button
            className="resume"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Aman_Yadav_Resume.pdf";
              link.download = "Aman_Yadav_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Get Resume
          </button>
         
        </div>
      </div>
      <div className="Middle-section-content">
        <div className="About" id="about">
          <div className="image">
            <img src={amanPhoto} alt="Aman yadav" />
          </div>
          <div className="divider"></div>

          <div className="information">
            <span className="heading top">I'm</span>
            <div className="head">
              <h1 className="heading">
                <Typewriter
                  words={["Aman Yadav", "a Creative Developer"]}
                  loop={false}
                  cursor
                  cursorStyle=". _"
                  typeSpeed={80}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </h1>
            </div>
            <div className="content">
              I’m a creative web developer passionate about building efficient,
              user-focused applications. Combining strong DSA knowledge with
              modern technologies, I strive to create solutions that are both
              innovative and scalable.
            </div>
          </div>
        </div>
        <div className="skills-section" id="skills">
          <div className="skill">
            <h1 className="skill-heading">. / Skills</h1>
          </div>
          <div className="list">
            <button
              className={activeSkill === "frontend" ? "active" : ""}
              onClick={() => setActiveSkill("frontend")}
            >
              Frontend
            </button>

            <button
              className={activeSkill === "backend" ? "active" : ""}
              onClick={() => setActiveSkill("backend")}
            >
              Backend / Database
            </button>

            <button
              className={activeSkill === "languages" ? "active" : ""}
              onClick={() => setActiveSkill("languages")}
            >
              Programming Languages
            </button>
            <button
              className={activeSkill === "tools" ? "active" : ""}
              onClick={() => setActiveSkill("tools")}
            >
              Tools & Deployment
            </button>
          </div>
          <div className="list-name">
            {skillsData[activeSkill].map((skill, index) => (
              <span key={index} className="skill-item">
                {/* Render the icon as a component */}
                <skill.icon
                  size={40}
                  color={skill.color}
                  style={{ marginBottom: "10px" }}
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        <section className="projects-section" id="projects">
          <h2 className="projects-heading">./Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <div className="card-image">
                <img src={projectImg} alt="project" />
              </div>

              <div className="card-content">
                <p className="project-title">▶ PasteApp</p>

                <div className="tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JS</span>
                  <span>React</span>
                </div>
                <a 
                  href="https://pasteapp-2005.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                className="btn">
                  View Project →
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="card-image">
                <img src={ecommerce} alt="project" />
              </div>

              <div className="card-content">
                <p className="project-title">▶ E-commerce</p>

                <div className="tech">
                  <span>HTML</span>
                  <span>Tailwind CSS</span>
                  <span>JS</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Mongodb</span>
                  <span>Express.js</span>
                 
                  
                </div>

                <a href="https://onecart-frontend03.onrender.com" 
                 target="_blank"
                  rel="noopener noreferrer"
                  className="btn">
                  View Project →
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="card-image">
                <img src={organizenotes} alt="project" />
              </div>

              <div className="card-content">
                <p className="project-title">▶ OrganizeNotes</p>

                <div className="tech">                
                 <span>HTML</span>
                  <span>Tailwind CSS</span>
                  <span>JS</span>
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>MySql</span>
                  <span>Express.js</span>
                </div>

                <a href="https://oraganize-notes.vercel.app" 
                 target="_blank"
                  rel="noopener noreferrer"
                  className="btn">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="contact-container">
            {/* LEFT SIDE */}
            <div className="contact-left">
              <h2 className="contact-title">
                <span className="green-line"></span> Get in Touch
              </h2>

              <p className="contact-text">
                I’m open to collaborations, freelance opportunities, or just a
                tech talk. Let’s connect on any of these platforms.
              </p>

              <ul className="contact-links">
                <li>
                  <a
                    href="https://wa.me/919936476308"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=amanyadav755081@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaEnvelope />
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/amanyadav0109"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/amanyadav2005"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            {/* <div className="contact-right">
              <h3>Send a Message</h3>

              <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>

                <button type="submit">
                  <span>Send</span> ✈
                </button>
              </form>
            </div> */}
            <div className="contact-right">
              <h3>Send a Message</h3>

              <form className="contact-form" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>

                {/* <button type="submit">
                  <span>Send</span> ✈
                </button> */}
                <button type="submit" disabled={isSending}>
        {isSending ? "Sending..." : "Send Message"}
      </button>
              </form>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-container">
            {/* LEFT */}
            <p className="footer-text">
              © {new Date().getFullYear()} Aman Yadav. All rights reserved.
            </p>

            {/* RIGHT */}
            <div className="footer-icons">
              <a
                href="https://github.com/amanyadav0109"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/amanyadav2005"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amanyadav755081@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Navbar;
