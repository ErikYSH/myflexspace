// DOPENESS COMPONENETS

import { useEffect, useState } from "react";

function Dopeness() {
  const [dopeness, setDopeness] = useState(0);
  // const [something, set something] = useState({})

  useEffect(() => {
    console.log("this is dope!")
  }, []); // [] is a dependency array , it will pause the effect like componentDidUpdate

  return (
    <div>
      <button
        style={{ margin: "12px" }}
        onClick={() => setDopeness(dopeness + 1)}
      >
        DOPE
      </button>
      <p>This post has {dopeness} level dopeness!</p>
      <button
        style={{ margin: "12px" }}
        onClick={() => setDopeness(dopeness - 1)}
      >
        NOT DOPE
      </button>
    </div>
  );
}

export default Dopeness;

// import React, { Component } from "react";

// class Dopeness extends Component {
//   // setting intial state for dopenessCount
//   state = {
//     dopenessCount: 0,
//   };

//   // increases the initial set state
//   increaseDopeness = () => {
//     let moreDope = this.state.dopenessCount + 1;
//     this.setState({
//       dopenessCount: moreDope,
//     });
//   };

//   decreaseDopness = () => {
//     let lessDope = this.state.dopenessCount - 1;
//     this.setState({
//       dopenessCount: lessDope,
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.decreaseDopness}>
//           -
//         </button>
//           Dopeness: {this.state.dopenessCount}

//         <button onClick={this.increaseDopeness}>
//           +
//         </button>
//       </div>
//     );
//   }
// }

// export default Dopeness;
