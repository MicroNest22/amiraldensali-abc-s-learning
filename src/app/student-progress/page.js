"use client"; // Mark this file as a Client Component

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const StudentProgress = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle click outside the sidebar to close it
  const handleClickOutside = (event) => {
    if (event.target.id === 'overlay') {
      setIsSidebarOpen(false);
    }
  };

  const gradientAnimation = `
    @keyframes gradientMove {
      0% { background-position: 0% 0%; }
      50% { background-position: 100% 100%; }
      100% { background-position: 0% 0%; }
    }
  `;

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
        <IconButton
          onClick={toggleSidebar}
          sx={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            fontSize: '30px',
            color: '#fff',
            zIndex: 1000,
            background: 'none',
          }}
        >
          <MenuIcon />
        </IconButton>
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
            <Link href="/student-lesson" style={{ textDecoration: 'none' }}>
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

      {/* Sidebar Menu Icon Outside */}
      {!isSidebarOpen && (
        <IconButton
          onClick={toggleSidebar}
          sx={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            fontSize: '30px',
            color: '#fff',
            zIndex: 1000,
            background: 'none',
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          padding: '20px',
          marginLeft: isSidebarOpen ? '250px' : '60px',
          transition: 'margin-left 0.3s ease',
        }}
      >
        {/* Header Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: '24px',
              marginLeft: '625px',
            }}
          >
            Student Progress
          </Typography>
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
        </Box>

        {/* Progress List */}
        <Box sx={{ marginBottom: '30px' }}>
          <Typography variant="h2" sx={{ fontSize: '18px', marginBottom: '10px' }}>
            Assessment
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              background: '#fff',
              borderRadius: '8px',
              marginBottom: '10px',
            }}
          >
            <Typography sx={{ width: '30%', textAlign: 'center' }}>Count & Play</Typography>
            <Box
              sx={{
                width: '50%',
                backgroundColor: '#ddd',
                borderRadius: '5px',
              }}
            >
              <Box
                sx={{
                  width: '80%',
                  backgroundColor: 'green',
                  height: '10px',
                  borderRadius: '5px',
                }}
              />
            </Box>
            <Typography sx={{ width: '20%', textAlign: 'right' }}>80%</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '10px',
              background: '#fff',
              borderRadius: '8px',
              marginBottom: '10px',
            }}
          >
            <Typography sx={{ width: '30%', textAlign: 'center' }}>Guess the Color</Typography>
            <Box
              sx={{
                width: '50%',
                backgroundColor: '#ddd',
                borderRadius: '5px',
              }}
            >
              <Box
                sx={{
                  width: '90%',
                  backgroundColor: 'green',
                  height: '10px',
                  borderRadius: '5px',
                }}
              />
            </Box>
            <Typography sx={{ width: '20%', textAlign: 'right' }}>90%</Typography>
          </Box>
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ textAlign: 'center' }}>
          <Link href="/student-progress-today" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                padding: '10px 20px',
                borderRadius: '5px',
                border: '2px solid #fff',
                background: 'linear-gradient(45deg,#d2001a,#7462ff,#f48e21,#23d5ab)',
                backgroundSize: '300% 300%',
                animation: 'gradientMove 5s ease infinite',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '16px',
                margin: '0 10px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              Today's Progress
            </Button>
          </Link>
          <Link href="/student-progress-weekly" style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                padding: '10px 20px',
                borderRadius: '5px',
                border: '2px solid #fff',
                background: 'linear-gradient(45deg,#d2001a,#7462ff,#f48e21,#23d5ab)',
                backgroundSize: '300% 300%',
                animation: 'gradientMove 5s ease infinite',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '16px',
                margin: '0 10px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              Weekly Progress
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentProgress;
