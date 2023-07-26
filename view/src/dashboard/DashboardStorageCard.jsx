import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import React from 'react';
function DashboardStorageCard({ title, Icon, description, stats }) {
  return (
    <Box sx={{ width: 400, mt: 5, height: 500 }}>
      <Card variant="outlined" sx={{ height: 500 }}>
        <CardContent>
          <Box
            component="div"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            {Icon}
          </Box>
          <Box
            component="div"
            sx={{ display: 'flex', justifyContent: 'center', fontSize: 60 }}
          >
            <p style={{ fontWeight: 200 }}>{stats}</p>
          </Box>
          <Box
            component="div"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <h3 style={{ fontWeight: 300 }}>{title}</h3>
          </Box>
          <Box
            component="div"
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <p>{description}</p>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DashboardStorageCard;
