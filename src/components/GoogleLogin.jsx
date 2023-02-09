import React, {useEffect} from 'react'
import ReactGoogleLogin from "react-google-login";
import { gapi } from "gapi-script";



export default function GoogleLogin(props){
    const clientId = '409424653363-iifos73tsatb4j1iic5roms522fd1qi6.apps.googleusercontent.com';

    useEffect(()=>{
        const iniClient=()=>{
            gapi.client.init({
                clientId: clientId,
                scope: ''
        })
    }
        gapi.load('client:auth2', iniClient);
    })
    const OnSuccess=(res)=>{
        console.log('---------res',res)
    }


    return (
        <div>
            <ReactGoogleLogin
                clientId={clientId}
                buttonText='GoogleLogin'
                onSuccess={OnSuccess}
                onFailure={OnSuccess}
                cookiePolicy={'single_host_origin'}

            />
        </div>
    )
}