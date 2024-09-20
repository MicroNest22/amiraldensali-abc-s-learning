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
    'ABCs Learning': { backgroundColor: 'white', color: 'black' },
    'Color Guess': { backgroundColor: 'white', color: 'black' },
    'Count & Play': { backgroundColor: 'white', color: 'black' },
    'Color Matching': { backgroundColor: 'white', color: 'black' },
    'Guess the Numbers': { backgroundColor: 'white', color: 'black' },
  };

  const easyButtonStyle = {
    backgroundColor: 'green', // Green background for Easy
    color: 'white', // White text color for Easy
    width: '150px', // Specific width for Easy
    height: '60px', // Specific height for Easy
    border: '2px solid white',
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
          background: 'none',
          border: 'none',
          padding: '0',
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
        ASSESSMENT {lesson}
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
        {/* Easy Button */}
        <Button
          sx={{ ...styles.difficultyButton, ...easyButtonStyle }}
          onClick={() => handleDifficultyClick('easy')}
        >
          Easy
        </Button>

        {/* Other Difficulty Buttons */}
        <Button
          sx={{ ...styles.difficultyButton, ...difficultyStyles['ABCs Learning'] }}
          onClick={() => handleDifficultyClick('ABCs Learning')}
        >
          ABC's Learning
        </Button>
        <Button
          sx={{ ...styles.difficultyButton, ...difficultyStyles['Color Guess'] }}
          onClick={() => handleDifficultyClick('Color Guess')}
        >
          Color Guess
        </Button>
        <Button
          sx={{ ...styles.difficultyButton, ...difficultyStyles['Count & Play'] }}
          onClick={() => handleDifficultyClick('Count & Play')}
        >
          Count & Play
        </Button>
        <Button
          sx={{ ...styles.difficultyButton, ...difficultyStyles['Color Matching'] }}
          onClick={() => handleDifficultyClick('Color Matching')}
        >
          Color Matching
        </Button>
        <Button
          sx={{ ...styles.difficultyButton, ...difficultyStyles['Guess the Numbers'] }}
          onClick={() => handleDifficultyClick('Guess the Numbers')}
        >
          Guess the Numbers
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
    height: '50px',
    borderRadius: '10px',
    border: '2px solid black',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    textTransform: 'none', // Disable uppercase text transformation
  },
};

export default DifficultyPage;
