import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss"

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT", to: "/contact" },
];

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          {data.map((item, index) => (
            <li key={index}>
              <button className="nav-item">
                <Link to={item.to} style={{ textDecoration: "none", color: "inherit" }}>
                  {item.label}
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
