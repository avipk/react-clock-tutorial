import React from 'react';

function WaterClock(props) {
  const {value=0, sections=60} = props;
  const maxfill= 0.6;
  const fill=(value/sections) * maxfill * 100;
  
  return (
    <div className='clock-water drop' style={{color: props.color}}>
      <div className="water" style={{height: `${fill}%`}}></div>
      <span className="val">{props.value}</span>
    </div>
  );
}

export default WaterClock;