"use client"; // Add this directive

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const users = [
  { name: 'Justin De Castillo', status: 'Active', email: 'DeCastillo@Memail.com' },
  { name: 'Chin Davido', status: 'Not Active', email: 'DavidoMemail.com' },
  { name: 'Manuel Cole', status: 'Not Active', email: 'Cole-Manuel@gmail.com' },
  { name: 'Miko Sibi', status: 'Active', email: 'SibiMiko@gmail.com' },
  { name: 'Lora Labuyo', status: 'Active', email: 'Labuyo247@gmail.com' },
];

const App = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [role, setRole] = React.useState('');

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        padding: '20px', // Optional padding
      }}
    >
      {/* AppBar */}
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(45deg,#d2001a,#7462ff,#f48e21,#23d5ab)',
          animation: 'gradientMove 5s ease infinite',
          '@keyframes gradientMove': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          backgroundSize: '200% 200%',
          boxShadow: 'none', // Remove AppBar shadow
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Manage Account
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <Box
          sx={{
            width: 250,
            padding: 2,
            background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', // Gradient for Sidebar
            height: '100vh',
          }}
        >
          <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
            <img src="abclogo.png" alt="Logo" style={{ maxWidth: '100%' }} />
          </Typography>
          <List>
            <ListItem button>
              <img src="your-update-system-image.png" alt="Update System" style={{ width: '24px', marginRight: '10px' }} />
              Update System
            </ListItem>
            <ListItem button>
              <img src="your-manage-account-image.png" alt="Manage Account" style={{ width: '24px', marginRight: '10px' }} />
              Manage Account
            </ListItem>
            <ListItem button>
              <img src="your-create-lesson-image.png" alt="Create Lesson" style={{ width: '24px', marginRight: '10px' }} />
              Create Lesson
            </ListItem>
          </List>
          <Box sx={{ position: 'absolute', bottom: 20, left: 20 }}>
            <Button variant="contained" color="error" startIcon={<ExitToAppIcon />}>
              Exit
            </Button>
          </Box>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ padding: 2, backgroundColor: 'transparent', height: '100vh', borderRadius: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          {/* Search Bar with Role Dropdown Inside */}
          <TextField
            label="Users"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ paddingRight: '10px' }}>
                  <Select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    displayEmpty
                    variant="outlined"
                    sx={{ height: '100%', marginLeft: '-10px' }}
                  >
                    <MenuItem value=""><em>Role</em></MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="user">User</MenuItem>
                  </Select>
                </InputAdornment>
              ),
            }}
            sx={{ flexGrow: 1 }}
          />

          {/* Delete Button */}
          <Button variant="contained" color="error" sx={{ marginLeft: 2 }}>
            <DeleteIcon /> Delete
          </Button>
        </div>

        {/* User Table */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Full Name</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Email</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  <Typography sx={{ color: user.status === 'Active' ? 'green' : 'red' }}>
                    {user.status}
                  </Typography>
                </TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default App;
