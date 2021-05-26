import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = "257194673659-esbcpq0klonltdls6i9ta29hj64sahv5.apps.googleusercontent.com";

const Logout = () => {
    const onSuccess = () => {
        alert('Logout made successfully!');
    }

    return (
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText='Logout'
            onLogoutSuccess={onSuccess} 
            ></GoogleLogout>
        </div>
    );
}

export default Logout;