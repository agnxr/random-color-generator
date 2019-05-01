import React from 'react';
import { Button } from './Button/Button';
import './App.css';

//this component‘s job is to:
//a) store a random color, 
//b) use that color to update the screen’s background.

class App extends React.Component {

  //1. store a random color as state.
  constructor(props){
    super(props);
    //display color in rgb format using 3 numbers between 0 and 255 -> color: [red, green, blue]
    this.state = { color: [153, 51, 255] }
  //  this.state = { color: [0, 102, 204] }

  //3. bind with handleClick -> this.handleClick() will update this.state.color to a new, random color.
  this.handleClick = this.handleClick.bind(this);
  }

  //2. define an event handler to update this.state.color to a new random color.
  handleClick() {
    this.setState({ //the method uses this, so I need to bind it.
      color: this.chooseColor()
    });
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  //transform an array(eg. 15351255) into rgb format: rgb(153, 51, 255)
  formatColor(rgbArray) {
    return 'rgb(' + rgbArray.join(', ') + ')';
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  //choose 3 random numbers 0-255
  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  //inform about the color
  render() {
    return (
      <div>
        <h1>
          {this.formatColor(this.state.color)}
        </h1>
        <Button 
          onClick={this.handleClick} 
        />
      </div>
    );
  }
}

export default App;

