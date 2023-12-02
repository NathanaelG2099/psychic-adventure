import './App.css';
import Camera from './Components/Camera';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Camera 
        cam1={"https://impeccabletablemanners.files.wordpress.com/2016/05/monkey-puppet-omg-shock-gif.gif"}
        cam2={"https://art.ngfiles.com/images/1442000/1442802_amni3d_3d-among-us-gifs.gif?f1601359412"}
        cam3={"https://upload.wikimedia.org/wikipedia/commons/a/aa/SmallFullColourGIF.gif"}>

        </Camera>
        
      </header>
    </div>
  );
}

export default App;
