import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion"; 
import cvFile from "../../images/BELALNEWCV.pdf";
import backgroundImageHome from "../../images/homepageBackground.gif";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }, 
};

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundImage: `url(${backgroundImageHome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariant}
        >
          <Box sx={{ bgcolor: "rgba(40, 40, 40, 0.85)", p: 4, borderRadius: 2 }}>
            <Typography variant="h2" fontWeight="bold" color="white" gutterBottom>
              BELAL HATEM
            </Typography>
            <Typography variant="h4" color="white" gutterBottom>
              MY PORTFOLIO
            </Typography>
            <Typography variant="body1" color="white" paragraph sx={{textAlign: "centre", width:"80%", wordWrap: "break-word", margin: "0 auto", pb: 2}}>
              I created this website to showcase my projects and bring my work to life.
              Building it not only strengthened my front-end development skills but also gave
              me a creative way to share my experiences, passions, and personality.
            </Typography>
            <Button variant="contained" color="success" href={cvFile} download="BELALNEWCV.pdf">
              Download CV
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
