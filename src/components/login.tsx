import React from 'react';
import { RESPONSE_TYPE, SCOPES } from '../constants/constants';
import { Header } from './header';

export const Login = () => {

    const handleLogin = () => {
        window.location.href = process.env.NEXT_PUBLIC_SPOTIFY_BASE_URL + "/authorize?client_id=" + process.env.NEXT_PUBLIC_CLIENT_ID + "&response_type="+ RESPONSE_TYPE + "&redirect_uri=" + process.env.NEXT_PUBLIC_REDIRECT_URI + "&scope=" + SCOPES;
    }

    return(
        <>
        <Header/>
        <button onClick={() => handleLogin()} className="btn-generic">Login with Spotify</button>
        </>
    );
}
