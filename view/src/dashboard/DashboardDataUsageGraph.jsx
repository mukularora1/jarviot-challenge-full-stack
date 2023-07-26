import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/user/userSlice';
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);
function DashboardDataUsageGraph() {
  const user = useSelector(selectUser);
  console.log('here');
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Box sx={{ width: 400, mt: 5, height: 500 }}>
        <Card variant="outlined">
          <CardContent>
            <Box
              component="div"
              sx={{
                width: '100%',
                height: '100%',
                mb: 2,
              }}
            >
              <Typography sx={{ fontSize: 20, color: 'blue' }} component="span">
                Drive storage
              </Typography>
            </Box>
            <Box
              component="div"
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ width: '400px', height: '400px' }}>
                <Doughnut data={user.graphData} options={options} />
              </div>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default DashboardDataUsageGraph;
