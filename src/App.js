import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Leagues from "./Components/Leagues";
import Navbar from "./Containers/NavBar";
import BannerContainer from "./Containers/BannerContainer";
import GameContainer from "./Containers/GameContainer";

class App extends Component {
  state = {
    leagueName: "home"
  };

  checkLeague = (e, leagueName) => {
    this.setState({
      leagueName: leagueName
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Navbar checkLeague={this.checkLeague} />
        </div>
        <div>
          <BannerContainer league={this.state.leagueName} />
        </div>
        <div>
          <GameContainer />
        </div>
      </div>
    );
  }
}

export default App;
