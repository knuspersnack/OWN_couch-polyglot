import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';


/* ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
); */

ReactDOM.render(<App />, document.getElementById('root'));

