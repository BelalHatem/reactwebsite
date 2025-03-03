import React from "react";
import "./styles.scss"
const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <div className="about-header">
        <h1>About Me</h1>
        <p>Get to know me a little better!</p>
      </div>

      {/* Profile + Bio Section */}
      <div className="about-content">
        <div className="about-image">
          <img src="your-image.jpg" alt="Your Name" />
        </div>
        <div className="about-text">
          <h2>Hi, I'm Belal👋</h2>
          <p>
            I'm a passionate front-end developer with experience in React, JavaScript, 
            and modern web technologies. I love building interactive applications and 
            crafting smooth user experiences.
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div className="about-details">
        <div className="about-box">
          <h3>🎓 Education</h3>
          <p>Bachelor Honours in Computer Systems Engineering - UOA</p>
        </div>
        <div className="about-box">
          <h3>💼 Experience</h3>
          <p>Currently have no experience!</p>
        </div>
        <div className="about-box">
          <h3>🛠️ Skills</h3>
          <p>React, JavaScript, SCSS, Tailwind CSS, UI/UX, C, C++, Java</p>
        </div>
      </div>
    </div>
  );
};

export default About;
