import { useState, useEffect } from 'react';

import { googleLogout } from '@react-oauth/google';
import { Watch } from './components/watch/index.jsx';
import { WeatherForLocation } from './components/weatherForLocation/index.jsx';
import { BackgroundImage } from './components/backgroundImage/index.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { resetWeather } from './actions/weather.jsx';
import { resetEvents } from './actions/events.jsx';
import { useDispatch } from 'react-redux';
import { EventsCalendar } from './components/eventsCalendar/index.jsx';
import { MainPage } from "./components/mainPage/index.jsx";
import './App.css';


function App() {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
  const dispatch = useDispatch();

  useEffect(() => {
    googleLogout();
    dispatch(resetWeather());
    dispatch(resetEvents());
    localStorage.removeItem('token');
    localStorage.removeItem('persist:root');
    setToken(JSON.parse(localStorage.getItem('token')));
  }, [dispatch]);

  const logOut = () => {
    googleLogout();
    dispatch(resetWeather());
    dispatch(resetEvents());
    localStorage.removeItem('token');
    localStorage.removeItem('persist:root');
    setToken(JSON.parse(localStorage.getItem('token')));
  }
  
  return (
    <GoogleOAuthProvider clientId="873908410228-2eiurj3dn7askps354etbvtulnpl96nb.apps.googleusercontent.com">
      <div className="App">
        {!token && <MainPage setToken={setToken} />}
        <button onClick={logOut} className='log_out'> sign out </button>
        <div className='content'>
          <div>
            <Watch />
            {token && <EventsCalendar />}
          </div>
          <WeatherForLocation setToken={setToken} token={token} />
        </div>
        <BackgroundImage />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
