import Navigation from './component/Navigation';
import Main from './component/Main'
import './App.css';
import logo from './resource/logo.png';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Navigation</h2>
      <Navigation />
      <Main />
    </div>
  );
}

export default App;