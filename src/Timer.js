//import React, { useEffect, useState } from 'react';

//const Timer = () => {
  //const [seconds, setSeconds] = useState(0);

  //useEffect(() => {
   // const interval = setInterval(() => {
    //  setSeconds((prevSeconds) => prevSeconds + 1);
    //}, 1000);

    //return () => {
    //  clearInterval(interval);
   // };
  //}, []);

  //return <div>{seconds} seconds</div>;
//};

//export default Timer;
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        interval: prevState.interval + 1,
      }));
    }, 1000); // Mettez ici l'intervalle souhaité en millisecondes
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div>Intervalle  : {this.state.interval} secondes</div>;
  }
}

export default Timer;