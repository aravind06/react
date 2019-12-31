import React from 'react';
import './App.css';
import Inc from "./Inc";
import Dec from "./Dec";
import Reset from "./reset";
    

export default class App extends React.Component {
  state={
    count: 0
  }
  
  //increase the counter value
  handleUp() {
    const prevState = this.state.count;
    this.setState({count: prevState+1});
  }

  //decrease the counter value
  handledown() {
    const prevState = this.state.count;
    this.setState({count: prevState-1});
  }

  //reset the counter value to initial value "0"
  handleReset() {
    this.setState({count: 0});
  }

  render() {
    return (
      <div className="App">
        <div>Click Counter</div>
        <div className="card">
          <div className="count">
        {this.state.count}
        </div>
        <div >
          <Inc func={() => this.handleUp()} />
          <Reset func={() => this.handleReset()} />
          <Dec func={() => this.handledown()} />
        </div>
        </div>
      </div>
    );
  }
}

