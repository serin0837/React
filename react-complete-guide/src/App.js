import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'// start with Uppercase and import name does not really matter

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name : "Manu", age : 29 },
      { name : "Step", age : 26 }
    ],
    otherState: "some other value"
  }
  // event handler
  switchNameHandler = (newName) => {
    // I want to add state
    // console.log("Was clicked!")
    // this this would refer sate with ES6 function
    // this.state.persons[0].name = "Maximailian"
    this.setState({ persons : [
      { name:  newName, age: 28 },
      { name : "Manu", age : 29 },
      { name : "Step", age : 30 }
    ]})
  }

  render() {
    return (
      <div className = "App">
         <h1> Hi I am a react app</h1> 
         <h2> Serin</h2>
        <button onClick = {this.switchNameHandler.bind(this, "Maximilian")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age} click = {this.switchNameHandler.bind(this,"Max")}>My Hobby : racing </Person>
        <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}/>     
      </div>
    );
  }
}

export default App;

// import React, {useState} from "react"
// import "./App.css"
// import Person from "./Person/Person"

// const App = props => {
//  //array distructuring [] array elements 
//   const [this.state, setthis.state] = useState({
//     persons: [
//             { name: "Max", age: 28 },
//             { name : "Manu", age : 29 },
//             { name : "Step", age : 26 }
//           ],
//     });

//     // how to put function // user state for separate datas
//     const [otherState, setOtherState] = useState("some other value2")
//     console.log(this.state, otherState)
//     const switchNameHandler = () => {
//           setthis.state({ persons : [
//             { name: "Macimilian", age: 28 },
//             { name : "Manu", age : 29 },
//             { name : "Step", age : 30 }
//           ]
//         })
//     }
//     return(
//         <div className = "App">
//          <h1> Hi I am a react app</h1> 
//          <h2> Serin</h2>
//         <button onClick = {switchNameHandler}>Switch Name</button>
//         <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}/>
//         <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}>My Hobby : racing </Person>
//         <Person name={this.state.persons[2].name} age ={this.state.persons[2].age}/>     
//       </div>
//   ) 
// }


// export default App;