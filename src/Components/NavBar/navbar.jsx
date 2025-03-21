import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { LinkedIn, GitHub } from "@mui/icons-material";
import logo from "../../images/luffypng.png";

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
        {/* Logo and Title on the left side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Logo Image */}
          <img src={logo} alt="Logo" style={{ height: 40 }} />

          {/* Website Title */}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
            Belal's Portfolio
          </Typography>
        </Box>

        {/* Navigation Links in the middle */}
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

        {/* Social Media Icons on the right */}
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* LinkedIn Icon */}
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/belalhatem"
            target="_blank"
            rel="noopener noreferrer"
            sx={socialIconStyle}
          >
            <LinkedIn />
          </IconButton>

          {/* GitHub Icon */}
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

// Style for navigation links
const navLinkStyle = {
  color: "black",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
};

// Style for social media icons
const socialIconStyle = {
  color: "black",
  transition: "color 0.3s ease-in-out",
  "&:hover": {
    color: "#0077b5",
  },
};

export default Navbar;