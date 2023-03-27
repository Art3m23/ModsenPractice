import { Watch } from './components/watch/Watch.jsx';
import { BackgroundSlider } from './components/backgroundSlider/BackgroundSlider.jsx';
import './App.css';

const objArrayImages = {
  'sun': ['images/solnechnaya-pogoda1.jpg', 'images/solnechnaya-pogoda2.jpg', 'images/solnechnaya-pogoda3.jpg', 'images/solnechnaya-pogoda4.jpg', 'images/solnechnaya-pogoda5.jpg']
}

function App() {
  return (
    <div className="App">
      <Watch />
      <BackgroundSlider arrayImages={objArrayImages.sun} />
    </div>
  );
}

export default App;
