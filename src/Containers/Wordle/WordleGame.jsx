import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";

// Word to guess for the Wordle game
const WORD_TO_GUESS = "HIRED"; // Change this to any 5-letter word

const WordleGame = () => {
  // Game state management
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""]); // Stores each row of guesses
  const [currentGuess, setCurrentGuess] = useState(""); // Stores current typing input
  const [attempt, setAttempt] = useState(0); // Current attempt count
  const [gameOver, setGameOver] = useState(false); // Has the game ended?
  const [message, setMessage] = useState(""); // Win/loss message
  const [letterStatuses, setLetterStatuses] = useState({}); // Tracks guessed letter statuses for keyboard coloring

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameOver) return;
      const key = event.key.toUpperCase();

      handleLetterInput(key); // Unified input handler for both physical and on-screen keyboard
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, gameOver]);

  // Unified function to handle both keyboard and on-screen input
  const handleLetterInput = (key) => {
    if (gameOver) return;

    if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
    } else if (key === "BACKSPACE") {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (key === "ENTER" && currentGuess.length === 5) {
      handleGuess();
    }
  };

  // Handle submitting a guess
  const handleGuess = () => {
    if (currentGuess.length !== 5) return;

    const newGuesses = [...guesses];
    newGuesses[attempt] = currentGuess.toUpperCase();
    setGuesses(newGuesses);

    const guess = currentGuess.toUpperCase();
    const correctArray = WORD_TO_GUESS.split("");
    const newStatuses = { ...letterStatuses };

    guess.split("").forEach((letter, idx) => {
      if (correctArray[idx] === letter) {
        newStatuses[letter] = "correct";
      } else if (correctArray.includes(letter)) {
        if (newStatuses[letter] !== "correct") {
          newStatuses[letter] = "present";
        }
      } else {
        if (!newStatuses[letter]) {
          newStatuses[letter] = "incorrect";
        }
      }
    });

    setLetterStatuses(newStatuses);

    if (guess === WORD_TO_GUESS) {
      setGameOver(true);
      setMessage("🎉 Congratulations! You guessed it!");
    } else if (attempt >= 5) {
      setGameOver(true);
      setMessage(`❌ Game Over! The word was ${WORD_TO_GUESS}`);
    } else {
      setAttempt(attempt + 1);
      setCurrentGuess("");
    }
  };

  // Restart the game
  const restartGame = () => {
    setGuesses(["", "", "", "", "", ""]);
    setCurrentGuess("");
    setAttempt(0);
    setGameOver(false);
    setMessage("");
    setLetterStatuses({});
  };

  // Determine color for each letter box based on correctness
  const getLetterColor = (letter, index, rowIndex) => {
    if (rowIndex >= attempt && !gameOver) return "lightgray"; // Upcoming rows stay default

    const correctWordArray = WORD_TO_GUESS.split("");
    const guessArray = guesses[rowIndex]?.split("");

    if (!guessArray) return "lightgray"; // Avoid errors

    if (correctWordArray[index] === letter) return "#08f74d"; // Correct letter, correct position

    if (correctWordArray.includes(letter)) {
      // Handle duplicate letters
      const correctCount = correctWordArray.filter(l => l === letter).length;
      const guessedCount = guessArray.slice(0, index + 1).filter(l => l === letter).length;

      return guessedCount <= correctCount ? "#ffbd00" : "lightgray"; // Correct letter, wrong position
    }

    return "lightgray"; // Incorrect letter
  };

  // Determine background color for keyboard key
  const getKeyColor = (key) => {
    const status = letterStatuses[key];
    if (status === "correct") return "#08f74d";
    if (status === "present") return "#ffbd00";
    if (status === "incorrect") return "#a9a9a9";
    return "lightgray";
  };

  return (
    <Box textAlign="center" p={3}>
      {/* Title */}
      <Typography variant="h3" gutterBottom sx={{color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,1)"}}>
        Wordle Game
      </Typography>

      {/* Grid of guesses */}
      <Grid container spacing={1} justifyContent="center">
        {guesses.map((guess, rowIndex) => (
          <Grid key={rowIndex} container item spacing={1} justifyContent="center">
            {Array.from(
              rowIndex === attempt ? currentGuess.padEnd(5, " ") : guess.padEnd(5, " ")
            ).map((letter, index) => (
              <Grid key={index} item>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    backgroundColor: getLetterColor(letter, index, rowIndex),
                    borderRadius: 1,
                    border: "2px solid black",
                  }}
                >
                  {letter}
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>

      {/* End message and restart button */}
      {gameOver && (
        <>
          <Typography 
            variant="h4" 
            sx={{ 
              mt: 2, 
              fontWeight: "bold", 
              textShadow: "2px 2px 4px rgba(0,0,0,1)",
              color: gameOver && message.includes("Congratulations") ? "#08f74d" : "#ff0072" // Color based on result
            }}
          >
            {message}
          </Typography>
          <Button 
            variant="contained" 
            sx={{ 
              mt: 2, 
              backgroundColor: "#FF5733", // Custom color
              "&:hover": { backgroundColor: "#C70039" } // Custom hover effect
            }} 
            onClick={restartGame}
          >
            Restart Game
          </Button>
        </>
      )}

      {/* On-screen keyboard */}
      <Box
        mt={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          px: 1,
        }}
      >
        {[
          ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
          ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
          ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"],
        ].map((row, rowIndex) => (
          <Box
            key={rowIndex}
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap={0.8}
            width="100%"
            maxWidth="400px"
          >
            {row.map((key) => (
              <Button
                key={key}
                variant="contained"
                onClick={() => handleLetterInput(key)}
                sx={{
                  flex: key === "ENTER" || key === "BACKSPACE" ? "1.3" : "1",
                  minWidth: 0,
                  height: { xs: 40, sm: 48 },
                  fontSize: { xs: "0.7rem", sm: "0.85rem" },
                  fontWeight: "bold",
                  backgroundColor: getKeyColor(key),
                  color: "black",
                  "&:hover": {
                    backgroundColor: getKeyColor(key),
                  },
                  borderRadius: 1.5,
                  px: 1.2,
                }}
              >
                {key === "BACKSPACE" ? "⌫" : key}
              </Button>
            ))}
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default WordleGame;
