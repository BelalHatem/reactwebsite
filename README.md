# Go To Finished Website

🌐 [https://belalhatem.github.io/reactwebsite](https://belalhatem.github.io/reactwebsite)

---

## 📁 Project File Breakdown

### `App.js`
The main entry point of the app:
- Wraps everything in a custom Material UI theme.
- Displays a persistent navbar.
- Defines routing logic for all pages (Home, About, Portfolio, Contact).

---

### `navbar.jsx`
Top navigation bar:
- Displays logo, site title, and navigation links.
- Uses `react-router-dom` `Link` for internal routing.
- Includes LinkedIn and GitHub icons with hover styles.

---

### `home.jsx`
Landing page:
- Full-screen animated background with centered content.
- Fade-in animation using Framer Motion.
- Highlights name, project purpose, and includes a download button for a PDF CV.

---

### `about.jsx`
"About Me" page:
- Split layout with text on the left and an embedded Wordle game on the right.
- Includes animated sections for education, experience, and skills.
- Uses a styled background image and responsive layout.

---

### `portfolio.jsx`
*(Assumed based on routing — not yet provided)*  
Will showcase projects or work samples with images, descriptions, and potentially links to GitHub or live demos.

---

### `contact.jsx`
Interactive contact form:
- Users can send you a message via EmailJS (no backend required).
- Validates email before submission.
- Shows a loading state and handles error/success messages.
- Animated form entry and styled with Material UI.

---

### `WordleGame.jsx`
Fully functional Wordle clone:
- Players type or click letters to guess the word.
- Feedback colors indicate correct, misplaced, or wrong letters.
- On-screen keyboard updates dynamically with color states.
- Win/lose detection with replay functionality.

---

## 💬 Reflection

I found this project both interesting and challenging, as it allowed me to apply a variety of front-end development skills in a real-world context. From integrating animations and responsive layouts to embedding a fully functional game, every part of this site pushed me to learn and improve. I especially enjoyed creating something that not only highlights my technical abilities but also reflects a bit of my personality, creativity, and interests. Overall, it was a fun and rewarding experience building a space that's uniquely mine.
