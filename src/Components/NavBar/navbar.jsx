import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Facebook, LinkedIn, GitHub } from "@mui/icons-material";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 3 }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 1.5,
        }}
      >
        {/* Logo / Title */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          Belal's Portfolio
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button component={Link} to="/" sx={navLinkStyle}>
            Home
          </Button>
          <Button component={Link} to="/about" sx={navLinkStyle}>
            About
          </Button>
          <Button component={Link} to="/portfolio" sx={navLinkStyle}>
            Portfolio
          </Button>
          <Button component={Link} to="/contact" sx={navLinkStyle}>
            Contact
          </Button>
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/belalhatem"
            target="_blank"
            rel="noopener noreferrer"
            sx={socialIconStyle}
          >
            <LinkedIn />
          </IconButton>
          
          <IconButton
            component="a"
            href="https://github.com/BelalHatem"
            target="_blank"
            rel="noopener noreferrer"
            sx={socialIconStyle}
          >
            <GitHub />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

/* Custom styles for buttons and social icons */
const navLinkStyle = {
  color: "black",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
};

const socialIconStyle = {
  color: "black",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "#0077b5",
  },
};

export default Navbar;
