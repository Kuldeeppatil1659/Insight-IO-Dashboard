import React, { useState } from 'react';
import { Paper, Box, Slider, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CameraWidget() {
  const [zoom, setZoom] = useState(50);

  const handleZoomChange = (event, newValue) => {
    setZoom(newValue);
  };

  return (
    <Paper 
      elevation={6}
      sx={{ 
        width: 380, 
        height: 220, 
        backgroundColor: '#0a0a0a', 
        borderRadius: 3, 
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Zoom Control Sidebar */}
      <Box sx={{ 
        width: 40, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        py: 1
      }}>
        <IconButton size="small" sx={{ color: 'white' }} onClick={() => setZoom(Math.min(zoom + 10, 100))}>
          <AddIcon fontSize="small" />
        </IconButton>
        
        <Slider
          orientation="vertical"
          value={zoom}
          onChange={handleZoomChange}
          aria-label="Camera Zoom"
          sx={{ 
            height: 100, 
            my: 1,
            color: '#fff',
            '& .MuiSlider-thumb': { width: 12, height: 12 }
          }}
        />

        <IconButton size="small" sx={{ color: 'white' }} onClick={() => setZoom(Math.max(zoom - 10, 0))}>
          <RemoveIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Video Feed */}
      <Box sx={{ flex: 1, position: 'relative', backgroundColor: '#000' }}>
        <video 
          src="/assets/camera-feed.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            // Simulating a digital zoom effect locally for polish
            transform: `scale(${1 + (zoom / 100)})`,
            transition: 'transform 0.2s ease-out'
          }}
        />
        
        {/* Recording Indicator */}
        <Box sx={{ 
          position: 'absolute', 
          top: 10, 
          right: 10, 
          width: 8, 
          height: 8, 
          borderRadius: '50%', 
          backgroundColor: '#ff3333',
          boxShadow: '0 0 8px #ff3333'
        }} />
      </Box>
    </Paper>
  );
}