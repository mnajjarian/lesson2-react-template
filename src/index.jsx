/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Hello = (props) => {
  const icon = `http://openweathermap.org/img/w/${props.icon}.png`
  return(
    <div>
      <h2>Helsinki Weather</h2>
      <h3>{props.description}</h3>
      <img src={icon} height='200px' alt="weather-icon"/>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: []
    }
  }
  componentDidMount() {
    fetch('https://weatherapp.eficode.fi/api/forecast')
    .then(response => {
      return response.json()
    })
    .then((obj) => {
      this.setState({
        weather: obj
      })
    })
  }
  render() {

console.log(this.state.weather)
    return (
      <Hello icon={this.state.weather.icon}
        description={this.state.weather.description}/>
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
