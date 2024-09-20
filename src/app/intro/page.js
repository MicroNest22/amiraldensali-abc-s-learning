'use client'; // This marks the component as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation in Next.js 13+ with App Router
import { Paper, Typography, TextField, Button, Link, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Define the animation using styled-components
const RunningCharacter = styled('div')({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100px',
  animation: 'runAnimation 5s linear infinite',
  bottom: '140px', // Adjust this value to place the character higher
});

// Define the keyframes for the running animation
const globalStyles = `
@keyframes runAnimation {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(100px); }
}
`;

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const router = useRouter(); // Initialize the router

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Login successful');
        router.push('/main'); // Navigate to the 'main' page upon successful login
      } else {
        const status = response.status;
        const errorText = await response.text();
        console.error(`Error ${status}:`, errorText);
        alert(`Error logging in: ${status}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Error logging in');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        background: 'linear-gradient(45deg,#d2001a,#7462ff,#f48e21,#23d5ab)',
        backgroundSize: '300% 300%',
        animation: 'gradientMove 12s ease-in-out infinite',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 'sm', // Limit the max width of the Paper component
          padding: 4,
          borderRadius: 2,
          textAlign: 'center',
          backgroundColor: '#ffffff', // Set the background color to white
          position: 'relative',
        }}
      >
        {/* Add Animated Character */}
        <RunningCharacter>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M19.07 4.93a2.5 2.5 0 00-3.54-3.54L13 3.58 12.17 2.76 9.25 5.68A2.5 2.5 0 0012 11h.8a3.3 3.3 0 012.55-1.47l2.26-2.26A2.5 2.5 0 0019.07 4.93zM12 11a3.3 3.3 0 012.55 1.47L16.81 14a2.5 2.5 0 00-2.71 2.71l-.8 2.4a1 1 0 01-.5.56l-.36.18A1 1 0 0011 20h-.5a1 1 0 01-1-1v-1.5l-.95-.68L5.45 16l-1.28.64A2.5 2.5 0 002 20h2a2.5 2.5 0 002.5-2.5V16l2.5-2.5A3.3 3.3 0 0112 11z"/>
          </svg>
        </RunningCharacter>
        
        <Typography variant="h4" gutterBottom>
          LOGIN
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.2rem' }} gutterBottom>
          Welcome to Learning ABC's
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 1 }}>
            <Link href="/forgot-password" color="primary">
              Forgot Password?
            </Link>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 3 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ width: '100%', maxWidth: '225px', fontSize: '1.1rem', padding: '10px 20px' }}
            >
              LOGIN
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '1.1rem', marginTop: 2 }}>
                Don't have an account?{' '}
                <Link href="/sign-up" color="primary" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                  Register Now!
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
      <style>{globalStyles}</style> {/* Add global styles for animation */}
    </Box>
  );
};

export default LoginForm;
