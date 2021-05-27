import React, { useState } from 'react';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';

import './App.css';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const successfulSignIn = () => {
    setIsSignedIn(true);
  }

  const logOut = () => {
    setIsSignedIn(false)
  }

  return (
    <div className="App">
      {!isSignedIn && <Login successfulSignIn={successfulSignIn} />}
      {isSignedIn && <Logout logOut={logOut} />}
    </div>
  );
}

export default App;
