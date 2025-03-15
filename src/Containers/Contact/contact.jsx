import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Typography, Paper, Box } from "@mui/material";
import backgroundContact from "../../images/contactBackground.gif";

const Contact = () => {
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
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundContact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: "md",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
          bgcolor: "rgba(255, 255, 255, 0.9)", 
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Let's Connect!
        </Typography>
        <Typography variant="body1" mb={3}>
          Send me a message below. Feel free to reach out with any questions!
        </Typography>

        <form ref={form} onSubmit={sendEmail}>
          <TextField fullWidth label="Your Name" name="from_name" required sx={{ mb: 2 }} />
          <TextField fullWidth label="Your Email" name="from_email" required sx={{ mb: 2 }} />
          {error && <Typography color="error">{error}</Typography>}
          <TextField fullWidth label="Your Message" name="message" multiline rows={4} required sx={{ mb: 2 }} />
          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
