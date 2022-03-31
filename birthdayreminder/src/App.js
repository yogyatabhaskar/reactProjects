import React, { Component } from "react";
import Card from "./components/Card/Card";
import birthdayData from "./data/birthdays.json";
import "./App.scss";

class App extends Component {
  state = {
    birthdayDetails: birthdayData,
  };

  handleClick = () => {
    this.setState({
      birthdayDetails: [],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="container__card">
          <h2 className="container__title">
            {this.state.birthdayDetails.length} Birthdays Today
          </h2>
          <Card data={this.state.birthdayDetails} />
          <button className="container__btn" onClick={this.handleClick}>
            Clear All
          </button>
        </div>
      </div>
    );
  }
}

export default App;
