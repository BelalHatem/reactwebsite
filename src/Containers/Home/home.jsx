import React from "react";
import { Container, Typography, Button, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import cvFile from "../../images/BELALNEWCV.pdf";
import backgroundImageHome from "../../images/homepageBackground.gif";

// Animation variant for fading in the content
const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Home = () => {
  const theme = useTheme();
  const navbarHeight = theme.mixins.toolbar.minHeight; // Get navbar height to adjust layout

  return (
    <Box
      sx={{
        minHeight: `calc(100vh - ${navbarHeight}px)`, // Full height minus navbar height
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url(${backgroundImageHome})`, // Animated background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "5rem 1rem", // Padding to avoid edge overlap
        marginTop: `${navbarHeight}px`, // Offset content below navbar
      }}
    >
      <Container maxWidth="md">
        {/* Animated fade-in content wrapper */}
        <motion.div initial="hidden" animate="visible" variants={fadeInVariant}>
          <Box
            sx={{
              bgcolor: "rgba(40, 40, 40, 0.85)", // Semi-transparent dark background for text contrast
              p: { xs: 3, sm: 4 }, // Responsive padding
              borderRadius: 2, // Rounded corners
              maxWidth: "90%",
              margin: "0 auto",
            }}
          >
            {/* Main Title */}
            <Typography
              variant="h2"
              fontWeight="bold"
              color="white"
              gutterBottom
              sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem" } }}
            >
              BELAL HATEM
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h4"
              color="white"
              gutterBottom
              sx={{ fontSize: { xs: "1.2rem", sm: "1.8rem" } }}
            >
              MY PORTFOLIO
            </Typography>

            {/* About paragraph */}
            <Typography
              variant="body1"
              color="white"
              paragraph
              sx={{
                textAlign: "justify", // Makes paragraph easier to read
                wordWrap: "break-word",
                width: "80%",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              I created this website to showcase my projects and bring my work to life.
              Building it not only strengthened my front-end development skills but also
              gave me a creative way to share my experiences, passions, and personality.
            </Typography>

            {/* CV Download Button */}
            <Button
              variant="contained"
              color="success"
              href={cvFile}
              download="BELALNEWCV.pdf"
            >
              Download CV
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
