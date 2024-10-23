"use client"; // Ensure this is present

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Import useRouter and useSearchParams from next/navigation
import { Button, Typography, Box, Dialog, DialogTitle, DialogContent, TextField, Switch, IconButton as MuiIconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon for the dialog

// Styled components
const Container = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
  padding: '20px',
  minHeight: '100vh',
  position: 'relative',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
  marginBottom: '20px',
}));

const DifficultyButton = styled(Button)(({ theme, difficulty }) => ({
  width: '200px',
  height: '100px',
  borderRadius: '10px',
  border: '2px solid white',
  color: 'white',
  fontSize: '25px',
  fontWeight: 'bold',
  backgroundColor: difficulty === 'easy' ? 'green' :
                    difficulty === 'normal' ? 'orange' : 'red',
  '&:hover': {
    backgroundColor: difficulty === 'easy' ? 'darkgreen' :
                      difficulty === 'normal' ? 'darkorange' : 'darkred',
  },
}));

const IconButton = styled('img')(({ theme }) => ({
  width: '50px',
  height: '50px',
  cursor: 'pointer',
}));

const BackButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  left: '30px',
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '50px',
  cursor: 'pointer',
  lineHeight: '1',
  padding: '0',
}));

const DifficultyPage = () => {
  const [openSettings, setOpenSettings] = useState(false); // Track the state of the settings modal
  const router = useRouter(); // Initialize router
  const searchParams = useSearchParams(); // Get search params
  const lesson = searchParams.get('lesson'); // Get the lesson from query parameters

  const handleDifficultyClick = (difficulty) => {
    // Navigate to the respective difficulty page
    switch (difficulty) {
      case 'easy':
        router.push(`/color-topics`); // Navigate to Color Matching page
        break;
      case 'normal':
        router.push(`/color-topics`); // Navigate to Color Guess page
        break;
      case 'hard':
        router.push(`/color-topics`); // Navigate to Trace the Color page
        break;
      default:
        console.error('Unknown difficulty');
    }
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

  return (
    <Container>
      <BackButton onClick={handleBack}>
        &laquo; {/* HTML entity for left double angle quote */}
      </BackButton>
      <Title>Select Difficulty {lesson}</Title>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="20px"
      >
        <DifficultyButton
          difficulty="easy"
          onClick={() => handleDifficultyClick('easy')}
        >
          Easy
        </DifficultyButton>
        <DifficultyButton
          difficulty="normal"
          onClick={() => handleDifficultyClick('normal')}
        >
          Normal
        </DifficultyButton>
        <DifficultyButton
          difficulty="hard"
          onClick={() => handleDifficultyClick('hard')}
        >
          Hard
        </DifficultyButton>
      </Box>
      <Box
        position="absolute"
        top="10px"
        right="100px"
        display="flex"
        gap="15px"
      >
        <IconButton src="/messages.png" alt="Notification" />
        <IconButton
          src="/settings.png"
          alt="Settings"
          onClick={handleOpenSettings} // Trigger the settings modal
        />
      </Box>

      {/* Settings Modal */}
      <Dialog open={openSettings} onClose={handleCloseSettings} fullWidth maxWidth="xs">
        <DialogTitle>
          <MuiIconButton edge="start" color="inherit" onClick={handleCloseSettings} aria-label="close">
            <CloseIcon />
          </MuiIconButton>
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
    </Container>
  );
};

export default DifficultyPage;
