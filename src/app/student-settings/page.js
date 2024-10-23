"use client"; // Add this if it's a Client Component

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Button, IconButton, TextField, Switch, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function StudentProgressPage() {
  const [openSettings, setOpenSettings] = useState(false);

  const handleOpenSettings = () => {
    setOpenSettings(true);
  };

  const handleCloseSettings = () => {
    setOpenSettings(false);
  };

  return (
    <div>
      {/* Your existing page content (progress bars, etc.) */}

      {/* Link to existing settings icon */}
      <IconButton 
        onClick={handleOpenSettings}
        style={{
          position: 'absolute', // Adjust if needed
          top: '20px', // Position based on your layout
          right: '20px', // Adjust based on your icon position
        }}
      >
        {/* Assuming you already have an icon component or image for settings */}
        <img src="/path-to-your-settings-icon.png" alt="Settings Icon" />
      </IconButton>

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
            <img src="/avatar.png" alt="Avatar" style={{ width: 100, height: 100, borderRadius: '50%' }} />
            <Typography variant="h6">Miko Sai</Typography>
            <Typography variant="caption" onClick={() => console.log('Change account')}>
              Change account
            </Typography>
          </div>

          <TextField label="Name" fullWidth margin="normal" defaultValue="Miko Sai" />
          <TextField label="E-mail" fullWidth margin="normal" defaultValue="example@email.com" />
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
    </div>
  );
}
