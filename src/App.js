import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme, Box } from "@mui/material";
import Home from "./Containers/Home/home.jsx";
import About from "./Containers/About/about.jsx";
import Portfolio from "./Containers/Portfolio/portfolio.jsx";
import Contact from "./Containers/Contact/contact.jsx";
import NavBar from "./Components/NavBar/navbar.jsx";

const theme = createTheme({
  palette: {
    primary: { main: "#007bff" },
    secondary: { main: "#f50057" },
    background: { default: "#f8f8f8" },
    height: "100vh",
    overflow: "hidden",
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh", 
          overflow: "hidden", 
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
