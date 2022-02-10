import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Main from './component/Main';
import { HashRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

;
