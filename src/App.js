import { useState } from 'react';
import { googleLogout } from '@react-oauth/google';
import { Watch } from './components/watch/Watch.jsx';
import { WeatherForLocation } from './components/weatherForLocation/WeatherForLocation.jsx';
import { BackgroundImage } from './components/backgroundImage/BackgroundImage.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { TestDemo } from './components/eventsCalendar/index.jsx';
import { SignIn } from './components/signIn/index.jsx';
import './App.css';


function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
  const logOut = () => {
    googleLogout();
    localStorage.removeItem('token');
    localStorage.removeItem('event');
    setToken(JSON.parse(localStorage.getItem('token')));
  }
  return (
    <GoogleOAuthProvider clientId="873908410228-2eiurj3dn7askps354etbvtulnpl96nb.apps.googleusercontent.com">
      <div className="App">
        {!token && <SignIn setToken={setToken} />}
        <button onClick={logOut} className='log_out'> sign out </button>
        <div className='content'>
          <div>
            <Watch />
            {token && <TestDemo token={token} />}
          </div>
          <WeatherForLocation setToken={setToken} token={token} />
        </div>
        <BackgroundImage />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
