import React, { Component } from "react";
// import axios from "axios";
import Tours from "./components/Tours/Tours";

const API_URL = "https://course-api.com/react-tours-project";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="container__title">Our Tours</h2>
        <Tours />
      </div>
    );
  }
}

export default App;

//loading page
//app-->tour--> tourdetails
