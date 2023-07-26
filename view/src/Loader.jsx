import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import './App.css';
function Loader({ isGoogleLogin, setIsGoogleLogin }) {
  return (
    <div className="loader">
      {isGoogleLogin ? (
        <Box sx={{ display: 'flex' }}>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={isGoogleLogin}
            // onClick={handleClose}
          >
            <CircularProgress size={150} thickness={2} />{' '}
          </Backdrop>
        </Box>
      ) : (
        ''
      )}
    </div>
  );
}

export default Loader;
