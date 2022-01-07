import Navigation from './Navigation';
import Routing from './Routing'
import './Main.css';
import logo from '../resource/logo.png';

const Main = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Navigation</h2>
      <Navigation />
      <Routing />
    </div>
  );
}

export default Main;