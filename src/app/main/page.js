"use client"; // Ensure this is present

import React, { useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { Box, Button, IconButton, Typography, AppBar, Toolbar } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

function MainPage() {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide (0: Lesson, 1: Assessment)
  const router = useRouter(); // Initialize router

  const handleSwipeLeft = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0)); // Switch to Assessment if on Lesson, and vice versa
  };

  const handleSwipeRight = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : 1)); // Switch to Lesson if on Assessment, and vice versa
  };

  const handleSelect = () => {
    if (currentSlide === 0) {
      router.push('/select-lesson'); // Navigate to /select-lesson if on Lesson
    } else if (currentSlide === 1) {
      router.push('/assessment-difficulties'); // Navigate to /assessment if on Assessment
    }
  };

  const slides = [
    {
      imageSrc: "/Lesson.png",
      title: "Lesson",
    },
    {
      imageSrc: "/Assessment.png",
      title: "Assessment",
    },
  ];

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        position: 'relative',
      }}
    >
      {/* Header with Logo and Icons */}
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', position: 'absolute', top: 10, left: 0, right: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100px' }}>
          {/* Centered Logo */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src="/abclogo.png" alt="Logo" style={{ width: '200px', marginLeft: 'none' }} />
          </Box>
          {/* Right Aligned Icons */}
          <Box sx={{ display: 'flex', gap: '15px', position: 'absolute', top: '10px', right: '100px' }}>
            <IconButton>
              <img src="/messages.png" alt="Notification" style={{ width: '50px', height: '50px' }} />
            </IconButton>
            <IconButton>
              <img src="/settings.png" alt="Settings" style={{ width: '50px', height: '50px' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Body with Lesson, Assessment, and Select button */}
      <Box
        sx={{
          textAlign: 'center',
          marginTop: '120px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Left swipe button */}
        <IconButton onClick={handleSwipeRight} sx={{ fontSize: '24px', color: 'white', margin: '0 20px' }}>
          <ArrowBack />
        </IconButton>

        {/* Selection content (Lesson or Assessment) */}
        <Box sx={{ textAlign: 'center' }}>
          <img
            src={slides[currentSlide].imageSrc} // Show Lesson or Assessment image based on currentSlide
            alt={slides[currentSlide].title}
            style={{ width: '150px' }}
          />
          <Typography variant="h2" sx={{ fontSize: '24px', color: 'white', mt: 1 }}>
            {slides[currentSlide].title}
          </Typography>
        </Box>

        {/* Right swipe button */}
        <IconButton onClick={handleSwipeLeft} sx={{ fontSize: '24px', color: 'white', margin: '0 20px' }}>
          <ArrowForward />
        </IconButton>
      </Box>

      {/* Select button */}
      <Button
        variant="contained"
        sx={{
          mt: 2,
          px: 4,
          backgroundColor: '#D0811C',
          '&:hover': {
            backgroundColor: '#B36E1A',
          },
        }}
        onClick={handleSelect}
      >
        Select
      </Button>
    </Box>
  );
}

export default MainPage;
