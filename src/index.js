import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import './css/index.css';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
	<Clock time={new Date(0,0,0,12,34,56)}/>, 
	document.getElementById('root')
);


registerServiceWorker();