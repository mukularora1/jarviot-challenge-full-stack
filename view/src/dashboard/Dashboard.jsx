import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetState, selectUser, setIsLoader } from '../store/user/userSlice';
import DashboardBody from './DashboardBody';
import './dashboard.css';

function Dashboard() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const revokeAccessToken = () => {
    if (user.accessToken) {
      dispatch(setIsLoader(true));
      const res = axios.post('revoke-access-token', {
        access_token: user.accessToken.access_token,
      });
      dispatch(setIsLoader(false));
      dispatch(resetState());
      console.log(res);
    }
  };
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__header">
          <div className="dashboard__header-top">
            <div className="dashboard__left">
              <Button
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    color: 'red',
                    borderColor: 'red',
                  },
                }}
                onClick={revokeAccessToken}
              >
                Revoke access
              </Button>
            </div>
            <div className="dashboard__logo">
              <h1>Google Drive API</h1>
            </div>
            <div className="dashboard__right">
              <a
                href="https://github.com/mukularora1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon sx={{ mr: 2 }} />
              </a>
              <a
                href="https://www.linkedin.com/in/mukul-arora1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <div className="dashboard__header-bottom">
            <LockIcon sx={{ mr: 1 }} />
            <p>
              We do not scan the content of files. Scan results are never
              stored.
            </p>
          </div>
        </div>
      </div>
      <div className="dashboard__body">
        <div className="dashboard__body__card">
          <DashboardBody />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
