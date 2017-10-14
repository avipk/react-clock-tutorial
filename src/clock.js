import React from 'react';

class Clock extends React.Component { 
  render() {
    const s_time = [ 
      this.props.time.getHours(), 
      this.props.time.getMinutes(), 
      this.props.time.getSeconds()
    ]
    .map(t=>`${t}`.padStart(2, '0')) // Padding time vals with zeros
    .join(':'); // Join time with ':'
    
    return (
      <div className="clock clock--digital">{s_time}</div>
    );
  }  
}

export default Clock;