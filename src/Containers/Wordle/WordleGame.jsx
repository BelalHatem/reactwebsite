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

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (gameOver) return;
      const key = event.key.toUpperCase();

      if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      } else if (key === "BACKSPACE") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (key === "ENTER" && currentGuess.length === 5) {
        handleGuess();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, gameOver]);

  // Handle submitting a guess
  const handleGuess = () => {
    if (currentGuess.length !== 5) return;

    const newGuesses = [...guesses];
    newGuesses[attempt] = currentGuess.toUpperCase();
    setGuesses(newGuesses);

    if (currentGuess.toUpperCase() === WORD_TO_GUESS) {
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
    </Box>
  );
};

export default WordleGame;