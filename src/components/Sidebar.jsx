import React, { useState } from 'react';
import { Paper, IconButton, Box, Typography, Stack } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState(1); 

  const navItems = [
    { id: 0, icon: <GridViewIcon /> },
    { id: 1, icon: <MapOutlinedIcon /> },
    { id: 2, icon: <LocationOnOutlinedIcon /> },
    { id: 3, icon: <CenterFocusStrongOutlinedIcon /> },
    { id: 4, icon: <ShowChartOutlinedIcon /> },
  ];

  return (
    <Paper
      elevation={4}
      sx={{
        width: 80,
        height: '100%',
        backgroundColor: '#0a0a0a', 
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 3,
        borderRight: '1px solid rgba(255,255,255,0.1)', 
        color: 'white',
        zIndex: 100 
      }}
    >
      {/* Logo / Company Name */}
      <Box sx={{ mb: 6, textAlign: 'center', cursor: 'pointer' }}>
        <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1, letterSpacing: 1 }}>ERIC</Typography>
        <Typography variant="caption" sx={{ color: '#888', fontSize: '0.55rem', letterSpacing: 2 }}>ROBOTICS</Typography>
      </Box>

      {/*Navigation Icons */}
      <Stack spacing={3} sx={{ flex: 1, width: '100%', alignItems: 'center' }}>
        {navItems.map((item) => (
          <Box key={item.id} sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            
            {activeTab === item.id && (
              <Box sx={{ 
                position: 'absolute', 
                left: 0, 
                top: '10%', 
                height: '80%', 
                width: 4, 
                backgroundColor: 'white', 
                borderRadius: '0 4px 4px 0' 
              }} />
            )}
            
            <IconButton
              onClick={() => setActiveTab(item.id)}
              sx={{
                color: activeTab === item.id ? 'white' : '#555',
                transition: 'all 0.2s',
                '&:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.05)' }
              }}
            >
              {item.icon}
            </IconButton>
          </Box>
        ))}
      </Stack>

      {/*User Profile */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mb: 2 }}>
        <IconButton sx={{ color: '#555', '&:hover': { color: 'white', backgroundColor: 'rgba(255,255,255,0.05)' } }}>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Paper>
  );
}