import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import './css/index.css';

import registerServiceWorker from './registerServiceWorker';


setInterval( ()=> {
  ReactDOM.render(<Clock time={new Date()}/>, 
  document.getElementById('root'));
},1000);




registerServiceWorker();