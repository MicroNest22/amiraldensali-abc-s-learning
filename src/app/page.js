'use client'; // This marks the component as a client component

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Button, Typography } from '@mui/material';

const IntroPage = () => {
  const router = useRouter();

  // Keyframes for the gradient and bounce animations
  const gradientAndBounceAnimation = `
    @keyframes color {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
  `;

  // Inject the gradient and bounce animation CSS into the document head
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = gradientAndBounceAnimation;
    document.head.appendChild(style);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: '100vh',
        width: '100%',
        background: 'linear-gradient(45deg,#d2001a,#7462ff,#f48e21,#23d5ab)',
        backgroundSize: '300% 300%',
        animation: 'color 12s ease-in-out infinite',
      }}
    >
      <Box textAlign="center">
        {/* Use img instead of Avatar to keep it centered */}
        <Box
          component="img"
          src="/abclogo.png"
          alt="Learning ABC"
          sx={{
            width: 300,
            height: 150,
            mx: 'auto',
            animation: 'bounce 2s infinite', // Apply bounce animation
          }}
        />
        <Typography
          variant="h1"
          sx={{ mt: 3, fontWeight: 'bold', fontSize: '2.5rem', color: 'black' }}
        >
          Let's Learn Alphabet
        </Typography>
      </Box>

      <Box mt={4} display="flex" gap={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'orange',
            color: 'white',
            fontWeight: 'bold',
            py: 1,
            px: 5,
            borderRadius: '9999px', // Rounded full
          }}
          onClick={() => router.push('/intro')}
        >
          LOGIN
        </Button>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 'bold',
            py: 1,
            px: 5,
            borderRadius: '9999px',
          }}
          onClick={() => router.push('/sign-up')}
        >
          SIGN UP
        </Button>
      </Box>
    </Box>
  );
};

export default IntroPage;
