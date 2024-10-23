"use client"; // Mark this file as a Client Component

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, IconButton, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Close sidebar when clicking outside of it
  const closeSidebar = (e) => {
    if (e.target.id === 'overlay') {
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

  const injectKeyframes = () => {
    const style = document.createElement('style');
    style.innerHTML = gradientAnimation;
    document.head.appendChild(style);
  };

  useEffect(() => {
    injectKeyframes();

    // Add event listener to close sidebar when clicking outside of it
    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Overlay to close sidebar */}
      {isSidebarOpen && (
        <Box
          id="overlay"
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
          }}
        />
      )}
      
      {/* Header Section */}
      <Box
        component="header"
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
        }}
      >
        <IconButton
          onClick={toggleSidebar}
          sx={{
            fontSize: '30px',
            cursor: 'pointer',
            background: 'none',
            border: 'none',
            position: 'absolute',
            left: '20px',
            top: '20px',
            color: '#fff',
          }}
        >
          <MenuIcon />
        </IconButton>
        <Image
          src="/abclogo.png"
          alt="ABC Learning"
          width={200}
          height={200}
          style={{ borderRadius: '50%' }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '10px',
            position: 'absolute',
            right: '30px',
            top: '20px',
          }}
        >
          {/* Custom Chat Icon */}
          <Image
            src="/messages.png"
            alt="Chat Icon"
            width={50}
            height={50}
            style={{ cursor: 'pointer' }}
          />
          {/* Custom Settings Icon */}
          <Image
            src="/settings.png"
            alt="Settings Icon"
            width={50}
            height={50}
            style={{ cursor: 'pointer' }}
          />
        </Box>
      </Box>

      {/* Sidebar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '250px',
          height: '100%',
          background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradientMove 10s ease infinite',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-250px)',
          transition: 'transform 0.3s ease',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Image
          src="/abclogo.png"
          alt="ABC Learning Sidebar"
          width={200}
          height={200}
          style={{ borderRadius: '50%' }}
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
            <Link href="/student-assessment" passHref>
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
                  textDecoration: 'none',
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
            <Link href="/teacher-student-record" passHref>
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
                  textDecoration: 'none',
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
            <Link href="/student-progress" passHref>
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
                  textDecoration: 'none',
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
            <Link href="/student-lesson" passHref>
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
                  textDecoration: 'none',
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
              width: '100%',
              justifyContent: 'center',
            }}
            onClick={toggleSidebar}
          >
            <ExitToAppIcon sx={{ marginRight: '8px' }} />
            🚪 Exit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
