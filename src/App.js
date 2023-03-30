import { Watch } from './components/watch/Watch.jsx';
import { WeatherForLocation } from './components/weatherForLocation/WeatherForLocation.jsx';
import { BackgroundImage } from './components/backgroundImage/BackgroundImage.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Watch />
      <WeatherForLocation/>
      <BackgroundImage/>
    </div>
  );
}

export default App;
