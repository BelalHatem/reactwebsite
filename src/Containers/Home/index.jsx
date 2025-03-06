import React from "react";
import "./styles.scss";
import cvFile from '../../images/BELALNEWCV.pdf'; // Adjust path if necessary

const Home = () => {
    return (
        <div className="homepagebackground">
            <div className="home-content">
                <h1>BELAL HATEM</h1>
                <h2>My PORTOFLIO</h2>
                <p>I created this website to showcase my projects and bring my work to life.
                Building it not only strengthened my front-end development skills but also gave 
                me a creative way to share my experiences, passions, and personality. It’s more 
                than just a portfolio—it's a reflection of my journey.Feel free to explore, and 
                if you'd like to learn more about my work, you can download my CV below!</p>
                <a href={cvFile} download="BELALNEWCV.pdf" className="cv-button">
                    Download CV
                </a>
            </div>
        </div>
    );
};

export default Home;
