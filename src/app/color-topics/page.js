"use client"; // Ensure this is present

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Import useRouter and useSearchParams from next/navigation
import { Box, Button, Typography, IconButton, Dialog, DialogTitle, DialogContent, TextField, Switch } from '@mui/material'; // MUI components
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // MUI back arrow icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon for the dialog

const DifficultyPage = () => {
  const [openSettings, setOpenSettings] = useState(false); // Track the state of the settings modal
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

  const handleOpenSettings = () => {
    setOpenSettings(true); // Open the settings modal
  };

  const handleCloseSettings = () => {
    setOpenSettings(false); // Close the settings modal
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
          onClick={handleOpenSettings} // Open settings modal on click
        />
      </Box>

      {/* Settings Modal */}
      <Dialog open={openSettings} onClose={handleCloseSettings} fullWidth maxWidth="xs">
        <DialogTitle>
          <IconButton edge="start" color="inherit" onClick={handleCloseSettings} aria-label="close">
            <CloseIcon />
          </IconButton>
          Settings
        </DialogTitle>
        <DialogContent>
          <div style={{ textAlign: 'center' }}>
            <img src="/avatar.jfif" alt="Avatar" style={{ width: 100, height: 100, borderRadius: '50%', marginLeft: '150px' }} />
            <Typography variant="h6">Miko Sali</Typography>
            <Typography variant="caption" onClick={() => console.log('Change account')}>
              Change account
            </Typography>
          </div>

          <TextField label="Name" fullWidth margin="normal" defaultValue="Miko Sali" />
          <TextField label="E-mail" fullWidth margin="normal" defaultValue="mikosali90@gmail.com" />
          <TextField label="Id number" fullWidth margin="normal" defaultValue="123456" />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography>Background Music</Typography>
            <Switch />
          </div>

          <Button variant="contained" color="warning" fullWidth style={{ marginTop: 20 }}>
            SIGN OUT
          </Button>
        </DialogContent>
      </Dialog>
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
