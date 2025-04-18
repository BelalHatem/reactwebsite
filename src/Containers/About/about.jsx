import React from "react";
import { Typography, Box, Paper, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import backgroundAbout from "../../images/aboutBackground.gif";
import WordleGame from "../../Containers/Wordle/WordleGame";

// Animation config
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const About = () => {
  const theme = useTheme();
  const navbarHeight = theme.mixins.toolbar.minHeight;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        marginTop: `${navbarHeight}px`, // offset below navbar
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: `calc(100vh - ${navbarHeight}px)`,
        }}
      >
        {/* Left Side - Text */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: { xs: 3, md: 6 },
            bgcolor: "rgba(255,255,255,0.95)",
          }}
        >
          {/* Title */}
          <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
            <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="center">
              About Me
            </Typography>
          </motion.div>

          {/* Paragraph */}
          <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                fontSize: { xs: "1rem", md: "1.1rem" },
                maxWidth: "700px",
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              I'm Belal, a recent Computer Systems Engineering graduate from the University of Auckland.
              I specialize in embedded systems, front-end development, and Python scripting. When I'm not coding,
              you'll find me watching anime, gaming, or playing basketball.
            </Typography>
          </motion.div>

          {/* Info Cards */}
          <Stack spacing={2} sx={{ width: "100%", maxWidth: "700px" }}>
            {[
              {
                icon: "🎓",
                title: "Education",
                text: "Bachelor Honours in Computer Systems Engineering - University of Auckland",
              },
              {
                icon: "💼",
                title: "Experience",
                text: "Experience in Retail and Hospitality environments",
              },
              {
                icon: "🛠️",
                title: "Skills",
                text: "C • C++ • VHDL • Java • Python • React • SCSS • UI/UX • Embedded C • SQL • Tailwind CSS",
              },
            ].map((item, index) => (
              <motion.div key={index} initial="hidden" animate="visible" variants={fadeInVariant}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    borderLeft: "4px solid #0077b5",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: 6,
                      transform: "scale(1.02)",
                      borderLeftColor: "#005a8d",
                    },
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    {item.icon} {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    {item.text}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </Box>

        {/* Right Side - Background + Wordle */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${backgroundAbout})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            p: 2,
          }}
        >
          <WordleGame />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
