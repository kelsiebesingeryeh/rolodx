import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import googleIcon from "../../assets/btn_google_signin_light_normal_web@2x.png";
import './Login.css'

//refresh token
import { refreshTokenSetup } from '../../utils/refreshToken';

const clientId = "257194673659-esbcpq0klonltdls6i9ta29hj64sahv5.apps.googleusercontent.com";

const Login = ({ successfulSignIn }) => {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    successfulSignIn()
    // alert(`Logged in successfully welcome ${res.profileObj.name}. \n See console for full profile object.`);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed res:", res);
    alert("Failed to login.");
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
  });

  return (
    <div>
      <button onClick={signIn} className="googleLoginButton">
        <img src={googleIcon} alt="google login" className="googleLoginIcon" />
      </button>
    </div>
  );
};

export default Login;