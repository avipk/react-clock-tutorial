import React from 'react';

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
    const s_time = [ 
      this.state.time.getHours(), 
      this.state.time.getMinutes(), 
      this.state.time.getSeconds()
    ]
    .map(t=>`${t}`.padStart(2, '0')) // Padding time vals with zeros
    .join(':'); // Join time with ':'
    
    return (
      <div className="clock clock--digital">{s_time}</div>
    );
  }  
}


export default Clock;