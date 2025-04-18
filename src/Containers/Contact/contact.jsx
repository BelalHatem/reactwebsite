import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Typography, Paper, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import backgroundContact from "../../images/contactBackground.gif";

const Contact = () => {
  const theme = useTheme();
  const navbarHeight = theme.mixins.toolbar.minHeight || 64;
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const sendEmail = (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(form.current);
    const email = formData.get("from_email");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm("service_lgyamo6", "template_j28omxl", form.current, "587bRM5kYgRY0MHa1")
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
          setLoading(false);
        },
        () => {
          setError("Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: `calc(100vh - ${navbarHeight}px)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundContact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
        marginTop: `${navbarHeight}px`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Paper
          elevation={3}
          sx={{
            maxWidth: { xs: "100%", sm: "500px" },
            width: "100%",
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
            bgcolor: "rgba(255, 255, 255, 0.9)",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
              },
            }}
          >
            Let's Connect!
          </Typography>

          <Typography
            variant="body1"
            mb={3}
            sx={{
              fontSize: {
                xs: "0.95rem",
                sm: "1rem",
              },
              maxWidth: "90%",
            }}
          >
            Send me a message below. Feel free to reach out with any questions!
          </Typography>

          <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
            <TextField
              fullWidth
              label="Your Name"
              name="from_name"
              required
              sx={{ mb: 2 }}
              inputProps={{ style: { fontSize: "1rem" } }}
            />

            <TextField
              fullWidth
              label="Your Email"
              name="from_email"
              required
              sx={{ mb: 2 }}
              inputProps={{ style: { fontSize: "1rem" } }}
            />

            {error && (
              <Typography color="error" sx={{ fontSize: "0.9rem", mb: 1 }}>
                {error}
              </Typography>
            )}

            <TextField
              fullWidth
              label="Your Message"
              name="message"
              multiline
              rows={4}
              required
              sx={{ mb: 2 }}
              inputProps={{ style: { fontSize: "1rem" } }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
              sx={{
                py: 1.5,
                fontSize: {
                  xs: "0.95rem",
                  sm: "1rem",
                },
              }}
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Contact;
