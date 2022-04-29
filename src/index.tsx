import React from 'react';
import ReactDOM from 'react-dom';
import './assets/lineaIcons/styles.css'; //Icon Font Linea
import './style/main.scss';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './component/Navbar';
import Routing from './component/Routing';
import Footer from './component/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className=''>
        <Navbar />
        <Routing />
        <Footer />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
