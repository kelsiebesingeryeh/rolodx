import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "257194673659-esbcpq0klonltdls6i9ta29hj64sahv5.apps.googleusercontent.com";

const Login = () => {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('[Login failed] res:', res)
    }
    return (
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px'}}
            inSignedIn={true}
            />
        </div>
    );
}

export default Login;