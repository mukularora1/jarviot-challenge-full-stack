import React from 'react';
import './App.css';
import googleDriveSvg from './assets/google-drive-svgrepo-com.svg';
function Title() {
  return (
    <div className="App__title">
      <img src={googleDriveSvg} alt="googleDriveSvg" />
      <h1>Google Drive Risk Report</h1>
    </div>
  );
}

export default Title;
