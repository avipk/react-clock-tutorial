import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Clock from './clock';
import ClockDigit from './clock-digit';
import AnalogHand from './analog-hand';
import WaterClock from './water-clock';

import './css/index.css';

import registerServiceWorker from './registerServiceWorker';

function clockHOC(Component) {
	const hoc = function(props, context) {
		const {time} = context;
		const parts = {
			hours: time.getHours(), 
			minutes: time.getMinutes(), 
			seconds: time.getSeconds()
		};

		const value = parts[props.part];


		return (<Component {...props} value={value}/>);
	}

	hoc.contextTypes = {
		time: PropTypes.instanceOf(Date)
	};

	return hoc;
}

const AnlogHandHOC = clockHOC(AnalogHand);

ReactDOM.render(
	<Clock time={new Date(0,0,0,12,34,56)}>
		<div className="clock--analog">
			<AnlogHandHOC part="hours" sections={12} width="30%"/>
        	<AnlogHandHOC part="minutes" sections={60} width="35%"/>
        	<AnlogHandHOC part="seconds" sections={60} width="40%" color="#ff6565"/>
        </div>
	</Clock>
	, 
	document.getElementById('root')
);


registerServiceWorker();