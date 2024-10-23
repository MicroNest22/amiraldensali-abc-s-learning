"use client"; // Ensure this is present

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Typography, IconButton, Dialog, DialogTitle, DialogContent, TextField, Switch } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon for the dialog

const SelectLessonPage = () => {
  const [openSettings, setOpenSettings] = useState(false); // Track whether the settings modal is open or closed
  const router = useRouter(); // Initialize router

  const handleBack = () => {
    router.push('/main'); // Navigate to the /main page
  };

  const handleImageClick = (lesson) => {
    // Define the navigation based on the clicked lesson
    switch (lesson) {
      case 'lesson1':
        router.push('/color-difficulties'); // Navigate to the Lesson 1 page
        break;
      case 'lesson2':
        router.push('/number-difficulties'); // Navigate to the Lesson 2 page
        break;
      case 'lesson3':
        router.push('/color-difficulties'); // Navigate to the Lesson 3 page
        break;
      default:
        console.error('Unknown lesson');
    }
  };

  const handleOpenSettings = () => {
    setOpenSettings(true); // Open the settings modal
  };

  const handleCloseSettings = () => {
    setOpenSettings(false); // Close the settings modal
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
      <IconButton
        onClick={handleBack}
        sx={{
          position: 'absolute',
          top: '10px',
          left: '30px',
          color: 'white',
          fontSize: '50px',
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: 'white',
          marginTop: '20px',
        }}
      >
        Select Lesson
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        <Button
          onClick={() => handleImageClick('lesson1')}
          sx={{
            padding: '0',
            background: 'none',
            border: 'none',
          }}
        >
          <Image src="/Color.png" alt="Lesson 1" width={200} height={200} style={{ borderRadius: '10px' }} />
        </Button>
        <Button
          onClick={() => handleImageClick('lesson2')}
          sx={{
            padding: '0',
            background: 'none',
            border: 'none',
          }}
        >
          <Image src="/Numbers.png" alt="Lesson 2" width={200} height={200} style={{ borderRadius: '10px' }} />
        </Button>
        <Button
          onClick={() => handleImageClick('lesson3')}
          sx={{
            padding: '0',
            background: 'none',
            border: 'none',
          }}
        >
          <Image src="/abc.png" alt="Lesson 3" width={200} height={200} style={{ borderRadius: '10px' }} />
        </Button>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          right: '100px',
          display: 'flex',
          gap: '15px',
        }}
      >
        <Image src="/messages.png" alt="Notification" width={50} height={50} style={{ cursor: 'pointer' }} />
        <Image
          src="/settings.png"
          alt="Settings"
          width={50}
          height={50}
          style={{ cursor: 'pointer' }}
          onClick={handleOpenSettings}
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

export default SelectLessonPage;
