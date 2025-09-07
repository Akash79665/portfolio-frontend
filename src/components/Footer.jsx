import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Akash Turkhade. All rights reserved.</p>
      <div className="footer-links">
        <a
          href="https://github.com/Akash79665"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="footer-icon" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/akashturkhade/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="footer-icon" /> LinkedIn
        </a>
        <a
          href="mailto:apturkhade@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope className="footer-icon" /> Email
        </a>
      </div>
    </footer>
  );
}
