import React from 'react';

function AnalogHand(props) {
  const angle = -90 + (props.value/props.sections)*360;
  
  const style = {
    backgroundColor: props.color || 'currentcolor',
    width: props.width,
    transform: `translateY(-50%) rotate(${angle}deg)`
  }
  
  return (
    <div className="clock-hand" data-value={props.value} style={style} />
  )
}

export default AnalogHand;