import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Loader from './Loader';
import Title from './Title';
import Dashboard from './dashboard/Dashboard';
import GoogleSignIn from './pages/GoogleSignIn';
import { selectUser } from './store/user/userSlice';

function App() {
  const user = useSelector(selectUser);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  return (
    <>
      <Loader isGoogleLogin={user.isLoader} />
      {!user.isLogin ? (
        <div className="App">
          <Title />
          <GoogleSignIn
            isGoogleLogin={isGoogleLogin}
            setIsGoogleLogin={setIsGoogleLogin}
          />
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default App;
