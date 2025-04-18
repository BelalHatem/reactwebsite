import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Home from "./Containers/Home/home.jsx";
import About from "./Containers/About/about.jsx";
import Portfolio from "./Containers/Portfolio/portfolio.jsx";
import Contact from "./Containers/Contact/contact.jsx";
import NavBar from "./Components/NavBar/navbar.jsx";
import theme from "./Components/theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset default browser styles */}
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflowy: "auto",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} /> {/* Fallback route */}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
