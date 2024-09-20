"use client"; // This marks the component as a client component

import React, { useState } from 'react';
import { TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    month: '',
    date: '',
    year: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registration successful');
      } else {
        const status = response.status;
        const errorText = await response.text(); // Read the error text from response
        console.error(`Error ${status}:`, errorText); // Log status and error text
        alert(`Error registering: ${status}`);
      }
    } catch (error) {
      console.error('Fetch error:', error); // Log the actual fetch error
      alert('Error registering');
    }
  };

  return (
    <main
      style={{
        background: 'linear-gradient(45deg,#d2001a,#7462ff,#f48e21,#23d5ab)',
        backgroundSize: '300% 300%',
        animation: 'gradientMove 12s ease-in-out infinite',
        height: '100vh', // Full viewport height
        width: '100vw', // Full viewport width
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          width: '100%',
          maxWidth: 500, // Ensuring box width is consistent with the login form
          borderRadius: 2,
          boxShadow: 3,
          padding: 2,
          opacity: 0.9, // Slightly adjusted opacity
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" paragraph sx={{ fontWeight: 'bold' }}>
          Just a few quick things to get started
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="E-mail"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <TextField
              name="month"
              label="Month"
              variant="outlined"
              size="small"
              sx={{ width: '30%' }}
              value={formData.month}
              onChange={handleChange}
            />
            <TextField
              name="date"
              label="Date"
              variant="outlined"
              size="small"
              sx={{ width: '30%' }}
              value={formData.date}
              onChange={handleChange}
            />
            <TextField
              name="year"
              label="Year"
              variant="outlined"
              size="small"
              sx={{ width: '30%' }}
              value={formData.year}
              onChange={handleChange}
            />
          </Box>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={formData.role}
              onChange={handleChange}
              label="Role"
            >
              <MenuItem value="" disabled>Select an option</MenuItem>
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="teacher">Teacher</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ fontWeight: 'bold', paddingX: 4, paddingY: 1 }} // Adjusted padding for button
            >
              Sign Up
            </Button>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="body2">
              <span style={{ fontWeight: 'bold' }}>
                Already have an account?{' '}
              </span>
              <a href="/intro" style={{ color: '#1e88e5', textDecoration: 'none', fontWeight: 'bold' }}>Log in</a>
            </Typography>
          </Box>
        </form>
      </Box>
    </main>
  );
};

export default SignUp;
