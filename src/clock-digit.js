import React from 'react';
function ClockDigit(props) {
	const padVal = props.value.toString().padStart(2, '0');
	return (
		<span className="clock-digit">{padVal}</span>
	);
}

export default ClockDigit;