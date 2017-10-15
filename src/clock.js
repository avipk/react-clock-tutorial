import React from 'react';
import ClockDigit from './clock-digit';
import AnalogHand from './analog-hand';

class Clock extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time || new Date()
    };
  }
  
  componentWillMount() {
    setInterval( ()=>{
      this.setState({
        time: new Date(this.state.time.getTime()+1000)
      });
    }, 1000);
  }
  
  render() {       
    return (
      <div className="clock clock--analog">
        <AnalogHand value={this.state.time.getHours()} sections={12} width="30%"/>
        <AnalogHand value={this.state.time.getMinutes()} sections={60} width="35%"/>
        <AnalogHand value={this.state.time.getSeconds()} sections={60} width="40%" color="#ff6565"/>
      </div>
    );
  }  
}

export default Clock;