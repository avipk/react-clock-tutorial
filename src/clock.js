import React from 'react';
import PropTypes from 'prop-types';

import ClockDigit from './clock-digit';
import AnalogHand from './analog-hand';
import WaterClock from './water-clock';

class Clock extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time || new Date()
    };
  }
  
  getChildContext() {
    const {time} = this.state;
    return {time};
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
        {this.props.children}
      </div>
    );
  }  
}

Clock.childContextTypes = {
    time: PropTypes.instanceOf(Date)
};

export default Clock;