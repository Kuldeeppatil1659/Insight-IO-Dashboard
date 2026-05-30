import React, { useState } from 'react';
import { Box } from '@mui/material';
import Map3DView from './components/Map3DView';
import Sidebar from './components/Sidebar';
import TopHUD from './components/TopHUD';
import CameraWidget from './components/CameraWidget';
import ControlCluster from './components/ControlCluster';

export default function App() {
  const [isMapMain, setIsMapMain] = useState(true);

  // Reusable styles for the two states
  const fullScreenStyles = {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    transition: 'all 0.3s ease-in-out',
  };

  const pipStyles = {
    position: 'absolute',
    bottom: 20,
    left: 100, 
    width: 380,
    height: 220,
    zIndex: 20,
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
    transition: 'all 0.3s ease-in-out',
    pointerEvents: 'auto', // Ensure it can be clicked
    border: '2px solid rgba(255,255,255,0.2)'
  };

  return (
    <Box sx={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      
      {/* The 3D Map Container */}
      <Box 
        sx={isMapMain ? fullScreenStyles : pipStyles}
        onClick={() => !isMapMain && setIsMapMain(true)}
      >
        <Map3DView />
      </Box>

      {/* The Camera Container */}
      <Box 
        sx={!isMapMain ? fullScreenStyles : pipStyles}
        onClick={() => isMapMain && setIsMapMain(false)}
      >
        <Box sx={{ width: '100%', height: '100%', pointerEvents: isMapMain ? 'auto' : 'none' }}>
           <CameraWidget />
        </Box>
      </Box>


      <Box sx={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
        
        <Box sx={{ pointerEvents: 'auto', position: 'absolute', left: 0, top: 0, bottom: 0 }}>
          <Sidebar />
        </Box>

        <Box sx={{ pointerEvents: 'auto', position: 'absolute', top: 20, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
          <TopHUD />
        </Box>

        <Box sx={{ pointerEvents: 'auto', position: 'absolute', bottom: 30, right: 30 }}>
          <ControlCluster />
        </Box>

      </Box>
    </Box>
  );
}