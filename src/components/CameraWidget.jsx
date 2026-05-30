import React, { useState } from 'react';
import { Paper, Box, Slider, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function CameraWidget() {
  const [zoom, setZoom] = useState(0);

  const handleZoomChange = (event, newValue) => {
    setZoom(newValue);
  };

  return (
    <Paper 
      elevation={6}
      sx={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#000', 
        borderRadius: 3, 
        border: '2px solid rgba(255, 255, 255, 0.2)',
        position: 'relative', 
        overflow: 'hidden', 
        pointerEvents: 'auto'
      }}
    >
      {/* Video Feed */}
      <Box sx={{ position: 'absolute', inset: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <video 
          src="https://www.pexels.com/download/video/31901286/" 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            transform: `scale(${1 + (zoom / 50)})`, 
            transformOrigin: 'center center',
            transition: 'transform 0.1s ease-out'
          }}
        />
      </Box>

      {/*Zoom Control Sidebar*/}
      <Box 
        onClick={(e) => e.stopPropagation()} 
        onPointerDown={(e) => e.stopPropagation()}
        sx={{ 
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          backdropFilter: 'blur(4px)',
          borderRadius: 8,
          py: 1,
          zIndex: 10 
        }}
      >
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

      {/* Live Recording Indicator*/}
      <Box sx={{ 
        position: 'absolute', 
        top: 15, 
        right: 15, 
        width: 10, 
        height: 10, 
        borderRadius: '50%', 
        backgroundColor: '#ff3333',
        boxShadow: '0 0 10px #ff3333',
        zIndex: 10
      }} />
    </Paper>
  );
}