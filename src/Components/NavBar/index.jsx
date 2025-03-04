import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT", to: "/contact" },
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
    </nav>
  );
};

export default NavBar;
