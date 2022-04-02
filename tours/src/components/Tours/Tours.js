import React, { Component } from "react";
import axios from "axios";
import TourDetails from "../TourDetails/TourDetails";

const API_URL = "https://course-api.com/react-tours-project";

class Tours extends Component {
  state = {
    tours: [],
  };
  componentDidMount() {
    axios.get(API_URL).then((response) => {
      console.log(response.data);
      this.setState({
        tours: response.data,
      });
    });
  }

  render() {
    return (
      <>
        {this.state.tours.map((tour) => {
          return (
            <TourDetails
              key={tour.id}
              tour={tour}
              handleClick={this.handleClick}
            />
          );
        })}
      </>
    );
  }
}
export default Tours;
