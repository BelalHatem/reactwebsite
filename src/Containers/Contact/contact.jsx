import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Typography, Paper, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import backgroundContact from "../../images/contactBackground.gif";

const Contact = () => {
  const theme = useTheme();
  const navbarHeight = theme.mixins.toolbar.minHeight || 64; // Get navbar height (default to 64px if undefined)
  const form = useRef();
  const [loading, setLoading] = useState(false); // Indicates whether the form is submitting
  const [error, setError] = useState(""); // Stores email validation error messages

  // Function to validate email address format using regex
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handles sending the email using EmailJS service
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload
    setError(""); // Clear previous errors

    const formData = new FormData(form.current); // Get form data
    const email = formData.get("from_email"); // Extract email field

    // Validate email before sending
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true); // Show loading state while sending

    // EmailJS sendForm function to send the email
    emailjs
      .sendForm("service_lgyamo6", "template_j28omxl", form.current, "587bRM5kYgRY0MHa1")
      .then(
        () => {
          alert("Message sent successfully!"); // Success feedback
          e.target.reset(); // Reset form inputs
          setLoading(false); // End loading state
        },
        () => {
          setError("Failed to send message. Please try again later."); // Show error
          setLoading(false);
        }
      );
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: `calc(100vh - ${navbarHeight}px)`, // Full height minus navbar height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundContact})`, // Background image for the contact section
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0 1rem",
        marginTop: `${navbarHeight}px`, // Push content below the fixed navbar
      }}
    >
      {/* Slide-in animation wrapper for form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Paper container for form with rounded corners and shadow */}
        <Paper
          elevation={3}
          sx={{
            maxWidth: "500px", // Limit form width
            width: "100%",
            p: { xs: 3, sm: 4 }, // Responsive padding
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
            bgcolor: "rgba(255, 255, 255, 0.9)", // White semi-transparent background
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
            height: "100%",
          }}
        >
          {/* Form Header */}
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Let's Connect!
          </Typography>

          {/* Form Subheading */}
          <Typography variant="body1" mb={3}>
            Send me a message below. Feel free to reach out with any questions!
          </Typography>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
            {/* Name Field */}
            <TextField fullWidth label="Your Name" name="from_name" required sx={{ mb: 2 }} />

            {/* Email Field */}
            <TextField fullWidth label="Your Email" name="from_email" required sx={{ mb: 2 }} />

            {/* Error message display */}
            {error && <Typography color="error">{error}</Typography>}

            {/* Message Textarea */}
            <TextField
              fullWidth
              label="Your Message"
              name="message"
              multiline
              rows={4}
              required
              sx={{ mb: 2 }}
            />

            {/* Submit Button */}
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Contact;