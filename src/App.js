import React, { Component } from 'react';
import './App.css';
import Flexi from "./Flexi";

const flexiConfig = {
  items: [
    {
      "name": "person_name",
      "label": "Person's Name",
      "type": "TextField",
      "children": [{
        "name": "person_name_1",
        "label": "First Person's Name",
        "type": "TextField",
      }]
    },
    {
      "name": "states",
            "label": "Person's state",
      "type": "DropDown",
            "values": [
                "Maharashtra",
                "Kerala",
                "Tamil Nadu"
      ]
    }
   ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Domino</h1>
        </header>
          <Flexi
            onSubmit={() => {}}
            config={flexiConfig}
          />
      </div>
    );
  }
}

export default App;
