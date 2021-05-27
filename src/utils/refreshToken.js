export const refreshTokenSetup = (res) => {
    //Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        console.log('newAuthRes:', newAuthRes);
        localStorage.setItem('authToken', newAuthRes.is_token);

        //setup the other timer after the first one
        setTimeout(refreshToken, refreshTiming);
    }

        //setup first refresh timer
        setTimeout(refreshToken, refreshTiming);
};