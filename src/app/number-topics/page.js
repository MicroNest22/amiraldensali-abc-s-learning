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
    'Count & Play': { backgroundColor: 'white', color: 'black' },
    'Number Explorers': { backgroundColor: 'white', color: 'black' },
    'Digit Detective': { backgroundColor: 'white', color: 'black' },
    'Math Safari': { backgroundColor: 'white', color: 'black' },
    'Numerical Adventure': { backgroundColor: 'white', color: 'black' },
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
        NUMBER GAMES {lesson}
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
          sx={{ 
            width: '250px',
            height: '100px',
            borderRadius: '10px',
            border: '2px solid black', // Add border
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'none',
            backgroundColor: difficultyStyles['Count & Play'].backgroundColor,
            color: difficultyStyles['Count & Play'].color
          }}
          onClick={() => handleDifficultyClick('ColorMatching')}
        >
          <Typography variant="button" sx={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            Count & Play
          </Typography>
        </Button>

        {/* Color Guess Button */}
        <Button
          variant="contained"
          sx={{ 
            width: '250px',
            height: '100px',
            borderRadius: '10px',
            border: '2px solid black',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'none',
            backgroundColor: difficultyStyles['Number Explorers'].backgroundColor,
            color: difficultyStyles['Number Explorers'].color
          }}
          onClick={() => handleDifficultyClick('ColorGuess')}
        >
          <Typography variant="button" sx={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            Number Explorers
          </Typography>
        </Button>

        {/* Trace the Color Button */}
        <Button
          variant="contained"
          sx={{ 
            width: '250px',
            height: '100px',
            borderRadius: '10px',
            border: '2px solid black',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'none',
            backgroundColor: difficultyStyles['Digit Detective'].backgroundColor,
            color: difficultyStyles['Digit Detective'].color
          }}
          onClick={() => handleDifficultyClick('TracetheColor')}
        >
          <Typography variant="button" sx={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            Digit Detective
          </Typography>
        </Button>

        {/* Find the Color Button */}
        <Button
          variant="contained"
          sx={{ 
            width: '250px',
            height: '100px',
            borderRadius: '10px',
            border: '2px solid black',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'none',
            backgroundColor: difficultyStyles['Math Safari'].backgroundColor,
            color: difficultyStyles['Math Safari'].color
          }}
          onClick={() => handleDifficultyClick('FindtheColor')}
        >
          <Typography variant="button" sx={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            Math Safari
          </Typography>
        </Button>

        {/* Color Sorting Button */}
        <Button
          variant="contained"
          sx={{ 
            width: '250px',
            height: '100px',
            borderRadius: '10px',
            border: '2px solid black',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textTransform: 'none',
            backgroundColor: difficultyStyles['Numerical Adventure'].backgroundColor,
            color: difficultyStyles['Numerical Adventure'].color
          }}
          onClick={() => handleDifficultyClick('ColorSorting')}
        >
          <Typography variant="button" sx={{ fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
            Numerical Adventure
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

export default DifficultyPage;
