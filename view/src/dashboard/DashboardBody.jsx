import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import Title from '../Title';
import DashboardStats from './DashboardStats';
import DashboardTable from './DashboardTable';
function DashboardBody() {
  return (
    <>
      <Card
        sx={{
          minWidth: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardContent sx={{ width: '100%' }}>
          <div
            style={{
              display: 'flex',
              borderBottom: '1px solid rgb(153, 153, 153)',
              justifyContent: 'space-between',
            }}
          >
            <Title />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p>Risk score:</p>
              <Button variant="outlined" sx={{ ml: 1 }}>
                <LocalFireDepartmentIcon />
                High
              </Button>
            </div>
          </div>
          <div>
            <DashboardStats />
            <DashboardTable />
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default DashboardBody;
