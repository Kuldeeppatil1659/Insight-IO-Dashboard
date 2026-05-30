import React, { useState } from 'react';
import { Paper, Stack, Typography, Box, Button } from '@mui/material';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const StatusDot = ({ color = '#00ff00' }) => (
  <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: color, boxShadow: `0 0 8px ${color}`, ml: 1 }} />
);

export default function TopHUD() {
  const [drivingMode, setDrivingMode] = useState('auto');

  return (
    <Stack direction="row" spacing={3} alignItems="center">
      
      {/*Mission Status */}
      <Paper sx={{ px: 3, py: 1, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 2, backgroundColor: '#f5f5f5' }}>
        <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold' }}>Status</Typography>
        <Typography variant="body2" sx={{ color: '#000', fontWeight: 'bold' }}>On Mission 1234</Typography>
        <Box sx={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: '#0a0a0a', display: 'flex', justifyContent: 'center', alignItems: 'center', ml: 1 }}>
           <Box sx={{ width: 8, height: 8, backgroundColor: '#fff' }} /> {/* Mock Pause Icon */}
        </Box>
      </Paper>

      {/*Main Telemetry */}
      <Paper sx={{ px: 4, py: 1.5, borderRadius: 10, display: 'flex', alignItems: 'center', gap: 4, backgroundColor: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(10px)', color: 'white', border: '1px solid rgba(255,255,255,0.1)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Typography variant="body2" fontWeight="bold">100%</Typography><BatteryFullIcon sx={{ color: '#00ff00', fontSize: 18 }} /></Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><SignalCellularAltIcon sx={{ color: '#ffb300', fontSize: 18 }} /><Typography variant="body2" fontWeight="bold">Strong</Typography></Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}><Typography variant="body2" color="gray" sx={{ mr: 1 }}>Failsafe</Typography> Okay <StatusDot /></Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}><Typography variant="body2" color="gray" sx={{ mr: 1 }}>System</Typography> Okay <StatusDot /></Box>
      </Paper>

      {/*Mode Toggle */}
      <Paper sx={{ p: 0.5, borderRadius: 10, display: 'flex', backgroundColor: '#f5f5f5' }}>
        <Button 
          onClick={() => setDrivingMode('auto')}
          sx={{ 
            borderRadius: 10, 
            px: 3, 
            py: 0.5, 
            backgroundColor: drivingMode === 'auto' ? '#0a0a0a' : 'transparent', 
            color: drivingMode === 'auto' ? 'white' : '#666', 
            fontWeight: 'bold',
            '&:hover': { backgroundColor: drivingMode === 'auto' ? '#333' : 'rgba(0,0,0,0.05)' } 
          }}
        >
          AUTO
        </Button>
        <Button 
          onClick={() => setDrivingMode('manual')}
          sx={{ 
            borderRadius: 10, 
            px: 3, 
            py: 0.5, 
            backgroundColor: drivingMode === 'manual' ? '#0a0a0a' : 'transparent', 
            color: drivingMode === 'manual' ? 'white' : '#666', 
            fontWeight: 'bold',
            '&:hover': { backgroundColor: drivingMode === 'manual' ? '#333' : 'rgba(0,0,0,0.05)' } 
          }}
        >
          MANUAL
        </Button>
      </Paper>

    </Stack>
  );
}