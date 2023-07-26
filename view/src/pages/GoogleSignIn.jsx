import GoogleIcon from '@mui/icons-material/Google';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setAccessToken,
  setGraphData,
  setIsLoader,
  setIsLogin,
  setTableData,
  setUsage,
} from '../store/user/userSlice';

function GoogleSignIn() {
  const dispatch = useDispatch();
  const [tokenClient, setTokenClient] = useState({});
  const client_id =
    '1021730461585-esoqfrphkj1jj1eb7be8aesfuraaob2q.apps.googleusercontent.com';
  const getAccess = () => {
    tokenClient.requestAccessToken();
  };

  useEffect(() => {
    const getUserData = async (token) => {
      dispatch(setIsLoader(true));
      dispatch(setAccessToken(token));
      const res = await axios.post('save-google-credentials', {
        access_token: token.access_token,
      });
      if (res.data && res.data.status === 'success' && res.data.data.length) {
        dispatch(setTableData(res.data.data));
      }
      const response = await axios.post('get-file-storage-use', {
        access_token: token.access_token,
      });
      if (
        response.data &&
        response.data.status === 'success' &&
        Object.keys(response.data.data).length
      ) {
        const remainingStorage = (
          Number(response.data.data.limit) / 1073741824 -
          Number(response.data.data.usage) / 1073741824
        ).toFixed(2);
        const totalStorage = (
          Number(response.data.data.limit) / 1073741824
        ).toFixed(2);
        const usedStorage = (
          Number(response.data.data.usage) / 1073741824
        ).toFixed(2);
        let data = [usedStorage, remainingStorage];
        dispatch(setUsage({ totalStorage, usedStorage, remainingStorage }));
        dispatch(setGraphData(data));
      }
      dispatch(setIsLogin(true));
      dispatch(setIsLoader(false));
    };
    // eslint-disable-next-line
    google.accounts.id.initialize({
      client_id:
        '1021730461585-esoqfrphkj1jj1eb7be8aesfuraaob2q.apps.googleusercontent.com',
      callback: handleCallback,
    });

    setTokenClient(
      // eslint-disable-next-line
      google.accounts.oauth2.initTokenClient({
        client_id: client_id,
        scope:
          'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/userinfo.profile',
        callback: getUserData,
      })
    );
  }, [dispatch]);

  const handleCallback = (res) => {
    console.log(jwt_decode(res.credential));
  };
  return (
    <>
      <Card
        sx={{
          minWidth: 375,
          maxWidth: 700,
          height: 500,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Avatar
              src="/broken-image.jpg"
              sx={{ mb: 5, width: 56, height: 56 }}
            />
          </Box>
          <Button variant="contained" onClick={getAccess}>
            <GoogleIcon sx={{ mr: 2 }} />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </>
  );
}

export default GoogleSignIn;
