import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import cvFile from "../../images/BELALNEWCV.pdf";
import backgroundImageHome from "../../images/homepageBackground.gif";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
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
        <Box sx={{ bgcolor: "rgba(40, 40, 40, 0.85)", p: 4, borderRadius: 2 }}>
          <Typography variant="h2" fontWeight="bold" color="white" gutterBottom>
            BELAL HATEM
          </Typography>
          <Typography variant="h4" color="white" gutterBottom>
            My PORTFOLIO
          </Typography>
          <Typography variant="body1" color="white" paragraph>
            I created this website to showcase my projects and bring my work to life.
            Building it not only strengthened my front-end development skills but also gave
            me a creative way to share my experiences, passions, and personality.
          </Typography>
          <Button variant="contained" color="success" href={cvFile} download="BELALNEWCV.pdf">
            Download CV
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
