import { Box } from '@mui/material';
import Map3DView from './components/Map3DView';
import Sidebar from './components/Sidebar';
import TopHUD from './components/TopHUD';
import CameraWidget from './components/CameraWidget';
import ControlCluster from './components/ControlCluster';

export default function App() {
  return (
    <Box sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
      
      {/* THE FOUNDATION: 3D Map Background */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Map3DView />
      </Box>

      {/* THE UI OVERLAY*/}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
        
        {/* Left Sidebar */}
        <Box sx={{ pointerEvents: 'auto', position: 'absolute', left: 0, top: 0, bottom: 0 }}>
          <Sidebar />
        </Box>

        {/* Top HUD */}
        <Box sx={{ pointerEvents: 'auto', position: 'absolute', top: 20, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}>
          <TopHUD />
        </Box>

        {/* Bottom Left: Camera Feed */}
        <Box sx={{ pointerEvents: 'auto', position: 'absolute', bottom: 20, left: 80 }}>
          <CameraWidget />
        </Box>

        {/* Bottom Right: Manual Controls & E-Stop */}
        <Box sx={{ pointerEvents: 'auto', position: 'absolute', bottom: 30, right: 30 }}>
          <ControlCluster />
        </Box>

      </Box>
    </Box>
  );
}