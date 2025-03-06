import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // ✅ Correct way

import "./styles.scss";


const data = [
  { label: "HOME", to: "/reactwebsite" },
  { label: "ABOUT", to: "/reactwebsite/about" },
  { label: "PORTFOLIO", to: "/reactwebsite/portfolio" },
  { label: "CONTACT", to: "/reactwebsite/contact" },
];

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {data.map((item, index) => (
          <li key={index}>
            <Link to={item.to} className="nav-item">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/belalhatem/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
        <a href="https://github.com/BelalHateem" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
