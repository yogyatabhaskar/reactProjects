import { Component } from "react";
import Card from "./components/Card/Card";
import birthdayData from "./data/birthdays.json";

class App extends Component {
  state = {
    birthdayData,
  };

  handleClick = () => {
    this.setState({
      birthdayData: [],
    });
  };

  render() {
    return (
      <div className="container">
        <h2>{birthdayData.length} birthdays today</h2>
        <Card data={birthdayData} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
