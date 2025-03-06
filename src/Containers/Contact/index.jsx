import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles.scss";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(""); 

  const validateEmail = (email) => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
      .sendForm(
        "service_lgyamo6",
        "template_j28omxl",
        form.current,
        "587bRM5kYgRY0MHa1"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          e.target.reset();
          setLoading(false); 
        },
        (error) => {
          console.error("FAILED...", error.text);
          setError("Failed to send message. Please try again later.");
          setLoading(false); 
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Let's Connect!</h1>
        <p>Send me a message below. Feel free to reach out with any questions!</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        {error && <p className="error-message">{error}</p>} {/* Show error message */}
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
