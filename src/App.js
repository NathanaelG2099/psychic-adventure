import logo from './logo.svg';
import './App.css';
import Camera from './Components/Camera';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Camera feed={"https://impeccabletablemanners.files.wordpress.com/2016/05/monkey-puppet-omg-shock-gif.gif"}>

        </Camera>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
