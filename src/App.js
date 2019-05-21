import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Leagues from "./Components/Leagues";
import Navbar from "./Containers/NavBar";
import BannerContainer from "./Containers/BannerContainer";

class App extends Component {
  state = {
    leagueName: "home"
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

  // handleLeagues = leagues => {
  //   this.setState({
  //     leagues: leagues
  //   });
  // };

  checkLeague = (e, leagueName) => {
    this.setState({
      leagueName: leagueName
    });
    console.log(this.state.leagueName);
  };

  render() {
    return (
      <div className="App">
        <div>
          <Navbar checkLeague={this.checkLeague} />
        </div>
        <div>
          <BannerContainer />
        </div>
      </div>
    );
  }
}

export default App;
