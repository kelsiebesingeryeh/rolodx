import React from 'react';
import { useGoogleLogout } from 'react-google-login';

const clientId = "257194673659-esbcpq0klonltdls6i9ta29hj64sahv5.apps.googleusercontent.com";

const Logout = () => {
    const onLogoutSuccess = () => {
        console.log('Logged out Success');
        alert('Logout made successfully!');
    }

    const onFailure = () => {
        console.log('Handle failure cases');
    }

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure
    })

    return (
        <div>
            <button onClick={signOut} className='button'>
            Log Out
            </button>
        </div>
    );
}

export default Logout;