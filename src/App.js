import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Leagues from "./Components/Leagues";
import Navbar from "./Containers/NavBar";

class App extends Component {
  state = {
    leagues: []
  };
  // ------------ Fetch function standard----------------------------------
  // componentDidMount = () => {
  //   fetch("https://api.pandascore.co/leagues", {
  //     method: "GET",
  //     headers: {
  //       authorization:
  //         (insert bearer here)
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(json => this.handleLeagues(json));
  // };

  handleLeagues = leagues => {
    this.setState({
      leagues: leagues
    });
  };

  // displayLeagues = () => {
  //   if (this.state.leagues.length > 0) {
  //     return this.state.leagues.map(league => {
  //       if (league.image_url !== null || "") {
  //         return <Leagues league={league} />;
  //       }
  //     });
  //   } else {
  //     return <div> loading... </div>;
  //   }
  // };

  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
