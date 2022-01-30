// DOPENESS COMPONENETS
import React, { Component } from "react";

class Dopeness extends Component {
  // setting intial state for dopenessCount
  state = {
    dopenessCount: 0,
  };

  // increases the initial set state
  increaseDopeness = () => {
    let moreDope = this.state.dopenessCount + 1;
    this.setState({
      dopenessCount: moreDope,
    });
  };

  decreaseDopness = () => {
    let lessDope = this.state.dopenessCount - 1;
    this.setState({
      dopenessCount: lessDope,
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.decreaseDopness}>
          -
        </button>
          Dopeness: {this.state.dopenessCount}
          
        <button onClick={this.increaseDopeness}>
          +
        </button>
      </div>
    );
  }
}

export default Dopeness;
