import React from "react";
import { Typography, Box, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import backgroundAbout from "../../images/aboutBackground.gif";
import WordleGame from "../../Containers/Wordle/WordleGame";

// Animation configuration for fading content in from the right
const fadeInRightVariant = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 20, transition: { duration: 1 } },
};

const About = () => {
  const theme = useTheme();
  const navbarHeight = theme.mixins.toolbar.minHeight; // get navbar height to offset layout

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: `calc(100vh - ${navbarHeight}px)`, // make page full height minus navbar
        alignItems: "stretch",
        overflowY: "auto",
        marginTop: `${navbarHeight}px`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // responsive layout
          flexGrow: 1,
        }}
      >
        {/* Left Side - Text Content Section */}
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: { xs: 3, sm: 4 },
            bgcolor: "rgba(255, 255, 255, 0.95)", // semi-transparent background
          }}
        >
          {/* Animated Title */}
          <motion.div initial="hidden" animate="visible" variants={fadeInRightVariant}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              About Me
            </Typography>
          </motion.div>

          {/* Animated Description Paragraph */}
          <motion.div initial="hidden" animate="visible" variants={fadeInRightVariant}>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.7, maxWidth: "80%", fontSize: 18, mx: "auto" }}
            >
              Hi, I'm Belal, a recent Computer Systems Engineering graduate from the University of Auckland.
              I have experience in embedded systems, front-end web development, and Python applications.
              Outside of tech, I'm passionate about anime, video games, and basketball.
            </Typography>
          </motion.div>

          {/* Additional Info Cards */}
          <Box sx={{ mt: 4, width: "80%", pb: 4 }}>
            {/* Education */}
            <motion.div initial="hidden" animate="visible" variants={fadeInRightVariant}>
              <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">🎓 Education</Typography>
                <Typography>
                  Bachelor Honours in Computer Systems Engineering - University Of Auckland
                </Typography>
              </Paper>
            </motion.div>

            {/* Work Experience */}
            <motion.div initial="hidden" animate="visible" variants={fadeInRightVariant}>
              <Paper sx={{ p: 2, mb: 2 }}>
                <Typography variant="h6">💼 Experience</Typography>
                <Typography>Experience in Retail and Hospitality</Typography>
              </Paper>
            </motion.div>

            {/* Skills */}
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

        {/* Right Side - Background with Wordle Game */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundAbout})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Embedded Wordle Game */}
          <WordleGame />
        </Box>
      </Box>
    </Box>
  );
};

export default About;