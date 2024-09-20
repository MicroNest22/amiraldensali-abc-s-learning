"use client";

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Drawer, List, ListItem, ListItemText, Backdrop } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Image from 'next/image';
import Link from 'next/link';

const StudentRecord = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const students = [
    { id: '22210857', name: 'Cole, Manuel J.', age: 2, email: 'Cole@gmail.com' },
    { id: '22320020', name: 'Dacoco, Cihan B.', age: 3, email: 'Sali@gmail.com' },
    { id: '22310257', name: 'Sali, Amir Alden F.', age: 3, email: 'Char@gmail.com' },
    { id: '2232020', name: 'Labajo, Louie Jhay', age: 3, email: 'Jhay@gmail.com' },
    { id: '22240157', name: 'De Castilla, Justin', age: 4, email: 'Walal@gmail.com' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (event.target.id === 'overlay') {
      setIsSidebarOpen(false);
    }
  };

  const gradientAnimation = 
    `@keyframes gradientMove {
      0% { background-position: 0% 0%; }
      50% { background-position: 100% 100%; }
      100% { background-position: 0% 0%; }
    }`;

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = gradientAnimation;
    document.head.appendChild(style);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        position: 'relative',
        background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '250px',
          height: '100%',
          background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
          backgroundSize: '200% 200%',
          animation: 'gradientMove 5s ease infinite',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-250px)',
          transition: 'transform 0.3s ease',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <Image
          src="/abclogo.png"
          alt="ABC Learning Sidebar"
          width={200}
          height={200}
          style={{ borderRadius: '50%', marginBottom: '20px' }}
        />
        <Box
          component="ul"
          sx={{
            listStyle: 'none',
            padding: 0,
            width: '100%',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="li" sx={{ width: '100%', margin: '10px 0' }}>
            <Link href="/teacher-main" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  gap: '10px',
                  color: 'black',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                🧑‍🏫 Student Assessment
              </Button>
            </Link>
          </Box>
          <Box component="li" sx={{ width: '100%', margin: '10px 0' }}>
            <Link href="/teacher-student-record" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  gap: '10px',
                  color: 'black',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                📋 Student Record
              </Button>
            </Link>
          </Box>
          <Box component="li" sx={{ width: '100%', margin: '10px 0' }}>
            <Link href="/student-progress" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  gap: '10px',
                  color: 'black',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                📈 Student Progress
              </Button>
            </Link>
          </Box>
          <Box component="li" sx={{ width: '100%', margin: '10px 0' }}>
            <Link href="/student-progress" style={{ textDecoration: 'none' }}>
              <Button
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  backgroundColor: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
                  cursor: 'pointer',
                  fontSize: '16px',
                  gap: '10px',
                  color: 'black',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                📚 Student Lesson
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: 'auto',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            sx={{
              padding: '10px 20px',
              backgroundColor: '#ff6464',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              fontSize: '16px',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
              cursor: 'pointer',
            }}
            onClick={toggleSidebar}
          >
            <ExitToAppIcon sx={{ marginRight: '8px' }} />
            🚪 Exit
          </Button>
        </Box>
      </Box>

      {/* Overlay */}
      {isSidebarOpen && (
        <Box
          id="overlay"
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
          }}
          onClick={handleClickOutside}
        />
      )}

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          padding: '20px',
          marginLeft: isSidebarOpen ? '250px' : '0', // Adjust margin to account for sidebar
          background: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
          transition: 'margin-left 0.3s ease', // Smooth transition
        }}
      >
        {/* Top Bar */}
          <AppBar position="static" sx={{ background: 'linear-gradient(45deg,#d2001a,#7462ff,#f48e21,#23d5ab)', backgroundSize: '300% 300%',
                animation: 'gradientMove 5s ease infinite' }}>
          <Toolbar>
            {/* Sidebar Toggle Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleSidebar}
              sx={{ marginRight: '10px' }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Student Records
            </Typography>

            {/* Custom Image Icons */}
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Image
                src="/messages.png"
                alt="Chat Icon"
                width={50}
                height={50}
                style={{ cursor: 'pointer' }}
              />
              <Image
                src="/settings.png"
                alt="Settings Icon"
                width={50}
                height={60}
                style={{ cursor: 'pointer' }}
              />
            </Box>
          </Toolbar>
        </AppBar>

        {/* Search Bar */}
        {/* Search Bar with Glass Effect */}
{/* Search Bar with Glass Effect and Bold Label */}
<Box
  sx={{
    margin: '20px 0',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white for glass effect
    backdropFilter: 'blur(10px)', // Blur for glass effect
    borderRadius: '10px',
    padding: '10px',
    boxShadow: '2px 4px 15px rgba(0, 0, 0, 0.2)', // Slight shadow for depth
  }}
>
  <TextField
    label="Search"
    variant="outlined"
    fullWidth
    InputProps={{
      style: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent input background
        borderRadius: '10px',
        color: 'white', // Input text color
      },
    }}
    InputLabelProps={{
      style: {
        color: 'rgba(255, 255, 255, 0.8)', // Slightly brighter white
        fontWeight: 'bold', // Bold for the "Search" label
      },
    }}
    sx={{
      input: {
        color: 'white', // Input text color
      },
    }}
  />
  <IconButton color="primary" sx={{ marginLeft: '10px', color: 'white' }}>
    <SearchIcon />
  </IconButton>
</Box>


        {/* Student Table */}
        <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default StudentRecord;
