import { useState, useEffect } from 'react'
import './login.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'

function Login() {

    const clientId = "283108737984-hs1mqvvvsptc2kei70g8a923p8d03l56.apps.googleusercontent.com"
  
    const [profile, setProfile] = useState(null)
  
    useEffect(() => {
      const initClient = () => {
        gapi.client.init({
          clientId: clientId,
          scope: ''
        })
      }
      gapi.load("client:auth2", initClient)
    }, [])
  
    const onSuccess = (res) => {
        setProfile(res.profileObj)
      console.log('success', res)
    }
    const onFailure = (res) => {
      console.log('failed', res)
    }
    const logOut = () => {
        setProfile(null);
    }
    return (
      <div className='login'>
        <h1>React Google Login</h1>
        <br /><br />
        {profile ? (
            <div>
                <img src={profile.imageUrl} alt="user image" />
                <h2>User Logged in</h2>
                <p>Name : {profile.name}</p>
                <p>Email : {profile.email}</p>
                <br /><br />
                <GoogleLogout clientId={clientId} buttontext="Log out" onLogoutSuccess={logOut}/>
            </div>
        ) : (
            <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        )}
      </div>
    )
  }
  
  export default Login
  
