import React from "react";
import "./styles.scss";
import luffyGif from '../../images/cropped-running.gif';

const About = () => {
  return (
    <div className="about-page">
      
      {/* Left Side - Content Section */}
      <div className="about-left">
        <div className="about-header">
          <h1>About Me</h1>
        </div>

        <div className="about-text">
          <p>
          Hi, I'm Belal, I am a recent graduate from the University of Auckland with a degree in Computer Systems Engineering. 
          Throughout my studies, I primarily worked with embedded systems, gaining hands-on experience in hardware-software integration.
          I have worked on many projects that involved healthcare solutions as well as video games where you can find in my portfolio section.
          Along the way, I also explored front-end web development, as well as Java and Python applications. 
          Outside of tech, I'm passionate about anime and video games, and when I'm not coding, you'll probably find me on the court—basketball is my favorite sport.
          </p>
        </div>

        <div className="about-details">
          <div className="about-box">
            <h3>🎓 Education</h3>
            <p>Bachelor Honours in Computer Systems Engineering - University Of Auckland</p>
          </div>
          <div className="about-box">
            <h3>💼 Experience</h3>
            <p>Experience in Retail and Hospitality</p>
          </div>
          <div className="about-box">
            <h3>🛠️ Skills</h3>
            <p>C • C++ • Embedded C • VHDL • Java • SQL • React • JavaScript • SCSS • TailWind CSS • UI/UX</p>
          </div>
        </div>
      </div>

      {/* Right Side - Pixel Background */}
      <div className="about-right">
        {/* Luffy Running Across the Screen */}
        <div className="luffy-animation">
          <img src={luffyGif} alt="Luffy Running" className="luffy" />
        </div>
      </div>


    </div>
  );
};

export default About;
