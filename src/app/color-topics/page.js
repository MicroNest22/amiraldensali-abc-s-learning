"use client"; // Ensure this is present

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Import useRouter and useSearchParams from next/navigation
import { Box, Button, Typography, IconButton } from '@mui/material'; // MUI components
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // MUI back arrow icon

const DifficultyPage = () => {
  const router = useRouter(); // Initialize router
  const searchParams = useSearchParams(); // Get search params

  const lesson = searchParams.get('lesson'); // Get the lesson from query parameters

  const handleDifficultyClick = (difficulty) => {
    // Navigate to the respective difficulty page
    router.push(`/difficulties/${lesson}-${difficulty}`);
  };

  const handleBack = () => {
    router.back(); // Go back to the previous page
  };

  const difficultyStyles = {
    ColorMatching: { backgroundColor: 'white', color: 'black' }, // White background for ColorMatching
    ColorGuess: { backgroundColor: 'white', color: 'black' }, // White background for ColorGuess
    TracetheColor: { backgroundColor: 'white', color: 'black' }, // White background for TracetheColor
    FindtheColor: { backgroundColor: 'white', color: 'black' }, // White background for FindtheColor
    ColorSorting: { backgroundColor: 'white', color: 'black' }, // White background for ColorSorting
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
        padding: '20px',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      {/* Back Button */}
      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '10px',
          left: '30px',
          color: 'white',
        }}
      >
        <ArrowBackIcon sx={{ fontSize: '50px' }} /> {/* Larger Back Arrow */}
      </IconButton>

      {/* Title */}
      <Typography
        variant="h1"
        sx={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '20px',
        }}
      >
        COLOR GAMES {lesson}
      </Typography>

      {/* Difficulty Buttons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        {/* Color Matching Button */}
        <Button
          variant="contained"
          sx={{ ...styles.difficultyButton, ...difficultyStyles.ColorMatching }}
          onClick={() => handleDifficultyClick('ColorMatching')}
        >
          <Typography variant="button" sx={styles.buttonText}>
            Color Matching
          </Typography>
        </Button>

        {/* Color Guess Button */}
        <Button
          variant="contained"
          sx={{ ...styles.difficultyButton, ...difficultyStyles.ColorGuess }}
          onClick={() => handleDifficultyClick('ColorGuess')}
        >
          <Typography variant="button" sx={styles.buttonText}>
            Color Guess
          </Typography>
        </Button>

        {/* Trace the Color Button */}
        <Button
          variant="contained"
          sx={{ ...styles.difficultyButton, ...difficultyStyles.TracetheColor }}
          onClick={() => handleDifficultyClick('TracetheColor')}
        >
          <Typography variant="button" sx={styles.buttonText}>
            Trace the Color
          </Typography>
        </Button>

        {/* Find the Color Button */}
        <Button
          variant="contained"
          sx={{ ...styles.difficultyButton, ...difficultyStyles.FindtheColor }}
          onClick={() => handleDifficultyClick('FindtheColor')}
        >
          <Typography variant="button" sx={styles.buttonText}>
            Find the Color
          </Typography>
        </Button>

        {/* Color Sorting Button */}
        <Button
          variant="contained"
          sx={{ ...styles.difficultyButton, ...difficultyStyles.ColorSorting }}
          onClick={() => handleDifficultyClick('ColorSorting')}
        >
          <Typography variant="button" sx={styles.buttonText}>
            Color Sorting
          </Typography>
        </Button>
      </Box>

      {/* Icons */}
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          right: '100px',
          display: 'flex',
          gap: '15px',
        }}
      >
        <Box
          component="img"
          src="/messages.png"
          alt="Notification"
          sx={{ width: '50px', height: '50px', cursor: 'pointer' }}
        />
        <Box
          component="img"
          src="/settings.png"
          alt="Settings"
          sx={{ width: '50px', height: '50px', cursor: 'pointer' }}
        />
      </Box>
    </Box>
  );
};

const styles = {
  difficultyButton: {
    width: '200px',
    height: '100px',
    borderRadius: '10px',
    border: '2px solid black', // Add white border
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center the text vertically and horizontally
    textTransform: 'none', // Disable uppercase text transformation
  },
  buttonText: {
    fontSize: '18px',
    fontWeight: 'bold',
    whiteSpace: 'nowrap', // Prevent text from wrapping to the next line
  },
};

export default DifficultyPage;
