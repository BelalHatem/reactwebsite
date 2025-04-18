import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, LinkedIn, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../../images/luffypng.png";

const navLinks = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Portfolio", path: "/portfolio" },
  { text: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect if screen is below 768px

  return (
    <>
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 3 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3, py: 1.5 }}>
          {/* Left - Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img src={logo} alt="Logo" style={{ height: 40 }} />
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
              Belal's Portfolio
            </Typography>
          </Box>

          {/* Middle - Nav Links or Menu Button */}
          {isMobile ? (
            <IconButton onClick={() => setDrawerOpen(true)} edge="start" sx={{ color: "black" }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 3 }}>
              {navLinks.map((link) => (
                <Button key={link.text} component={Link} to={link.path} sx={navLinkStyle}>
                  {link.text}
                </Button>
              ))}
            </Box>
          )}

          {/* Right - Social Icons */}
          {!isMobile && (
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
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.text} disablePadding>
                <ListItemButton component={Link} to={link.path}>
                  <ListItemText primary={link.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
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
        </Box>
      </Drawer>
    </>
  );
};

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
