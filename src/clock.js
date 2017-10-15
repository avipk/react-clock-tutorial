import React from 'react';
import ClockDigit from './clock-digit';

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
      <div className="clock">
        <ClockDigit value={this.state.time.getHours()}/>
        <ClockDigit value={this.state.time.getMinutes()}/>
        <ClockDigit value={this.state.time.getSeconds()}/>
      </div>
    );
  }  
}


export default Clock;