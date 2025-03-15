import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion"; 
import luffyGif from "../../images/cropped-running.gif";
import backgroundAbout from "../../images/aboutBackground.gif";

const fadeInRightVariant = {
  hidden: { opacity: 0, x: 0 }, 
  visible: { opacity: 1, x: 20, transition: { duration: 1 } }, 
};

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh", // Full screen height
        overflow: "hidden",
      }}
    >
      {/* Left Side - Content Section (50% width) */}
      <Paper
        elevation={3}
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: 4,
          bgcolor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <motion.div initial="hidden" animate="visible" variants={fadeInRightVariant}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            About Me
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInRightVariant}>
          <Typography variant="body1" sx={{ lineHeight: 1.7, maxWidth: "75%", fontSize: 20, mx: "auto" }}>
            Hi, I'm Belal, a recent Computer Systems Engineering graduate from the University of Auckland.
            I have experience in embedded systems, front-end web development, and Python applications.
            Outside of tech, I'm passionate about anime, video games, and basketball.
          </Typography>
        </motion.div>

        {/* About Details */}
        <Box sx={{ mt: 4 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeInRightVariant}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6">🎓 Education</Typography>
              <Typography>Bachelor Honours in Computer Systems Engineering - University Of Auckland</Typography>
            </Paper>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInRightVariant}>
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6">💼 Experience</Typography>
              <Typography>Experience in Retail and Hospitality</Typography>
            </Paper>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInRightVariant}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">🛠️ Skills</Typography>
              <Typography>
                C • C++ • Embedded C • VHDL • Java • SQL • React • JavaScript • SCSS • TailWind CSS • UI/UX
              </Typography>
            </Paper>
          </motion.div>
        </Box>
      </Paper>

      {/* Right Side - Background & Animation */}
      <Box
        sx={{
          width: "50%",
          position: "relative",
          backgroundImage: `url(${backgroundAbout})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflowX: "hidden",
        }}
      >
        {/* Running Luffy Animation */}
        <img
          src={luffyGif}
          alt="Luffy Running"
          style={{
            width: "15%",
            position: "absolute",
            bottom: "5vh",
            animation: "moveLuffy 5s linear infinite",
          }}
        />
      </Box>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes moveLuffy {
            0% { left: 0%; opacity: 0.2; }
            20% {left: 20%; opacity: 0.8;}
            100% { left: 100%; opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default About;
