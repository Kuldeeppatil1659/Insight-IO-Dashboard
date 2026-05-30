import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ControlCluster() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      
      {/* Emergency Stop Button */}
      <Box sx={{ 
        width: 120, height: 120, borderRadius: '50%', backgroundColor: '#ffcc00', 
        display: 'flex', justifyContent: 'center', alignItems: 'center', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.5)', cursor: 'pointer',
        transition: 'transform 0.1s', '&:active': { transform: 'scale(0.95)' }
      }}>
        <Box sx={{ 
          width: 90, height: 90, borderRadius: '50%', backgroundColor: '#cc0000', 
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          color: 'white', border: '4px solid #b30000'
        }}>
          <Typography variant="caption" fontWeight="bold" sx={{ letterSpacing: 1 }}>EMERGENCY</Typography>
          <Typography variant="body1" fontWeight="bold">STOP</Typography>
        </Box>
      </Box>

      {/* D-Pad Controls */}
      <Box sx={{ 
        width: 140, height: 140, borderRadius: '50%', backgroundColor: 'rgba(10, 10, 10, 0.8)', 
        backdropFilter: 'blur(10px)', position: 'relative', border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <IconButton sx={{ position: 'absolute', top: 5, left: '50%', transform: 'translateX(-50%)', color: 'white' }}>
          <KeyboardArrowUpIcon />
        </IconButton>
        <IconButton sx={{ position: 'absolute', bottom: 5, left: '50%', transform: 'translateX(-50%)', color: 'white' }}>
          <KeyboardArrowDownIcon />
        </IconButton>
        <IconButton sx={{ position: 'absolute', left: 5, top: '50%', transform: 'translateY(-50%)', color: 'white' }}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton sx={{ position: 'absolute', right: 5, top: '50%', transform: 'translateY(-50%)', color: 'white' }}>
          <KeyboardArrowRightIcon />
        </IconButton>
        
        {/* Center label */}
        <Box sx={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', pointerEvents: 'none' }}>
           <Typography variant="caption" sx={{ color: '#666', fontSize: '0.6rem', textAlign: 'center' }}>W<br/>A S D</Typography>
        </Box>
      </Box>

    </Box>
  );
}