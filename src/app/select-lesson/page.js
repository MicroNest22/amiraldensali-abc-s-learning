"use client"; // Ensure this is present

import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import Image from 'next/image';

const SelectLessonPage = () => {
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
          <Image src="/Color.png" alt="Lesson 1" width={100} height={100} style={{ borderRadius: '10px' }} />
        </Button>
        <Button
          onClick={() => handleImageClick('lesson2')}
          sx={{
            padding: '0',
            background: 'none',
            border: 'none',
          }}
        >
          <Image src="/Numbers.png" alt="Lesson 2" width={100} height={100} style={{ borderRadius: '10px' }} />
        </Button>
        <Button
          onClick={() => handleImageClick('lesson3')}
          sx={{
            padding: '0',
            background: 'none',
            border: 'none',
          }}
        >
          <Image src="/abc.png" alt="Lesson 3" width={100} height={100} style={{ borderRadius: '10px' }} />
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
        <Image src="/settings.png" alt="Settings" width={50} height={50} style={{ cursor: 'pointer' }} />
      </Box>
    </Box>
  );
};

export default SelectLessonPage;
