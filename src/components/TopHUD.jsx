import { Paper, Typography } from '@mui/material';
export default function TopHUD() {
  return <Paper sx={{ p: 1, borderRadius: 5, backgroundColor: 'rgba(10, 25, 41, 0.9)', color: 'white' }}><Typography variant="body2">100% 🔋 | System: OK 🟢</Typography></Paper>;
}