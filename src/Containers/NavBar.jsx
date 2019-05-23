import React from "react";
import NavButton from "../Components/NavButton";
import "./css/Navbar.css";
import lcs_logo from "../images/lcs_logo.png";
import lec_logo from "../images/lec_logo.png";
import owl_logo from "../images/owl_logo.png";
import ssbu_logo from "../images/ssbu_logo.png";
import ssbm_logo from "../images/ssbm_logo.png";

export default class Navbar extends React.Component {
  // state = {
  //   names: [
  //     { lcs: lcs_logo },
  //     { lec: lec_logo },
  //     { owl: owl_logo },
  //     { ssbm: ssbm_logo },
  //     { ssbu: ssbu_logo }
  //   ]
  // };

  // handleNavButtons = () = {
  //   this.state.names.map(league => {
  //     console.log(league)
  //   })
  // }

  render() {
    return (
      <div className="navbar">
        <NavButton
          logo={lcs_logo}
          checkLeague={this.props.checkLeague}
          leagueName="lcs"
        />
        <NavButton
          logo={lec_logo}
          checkLeague={this.props.checkLeague}
          leagueName="lec"
        />
        <NavButton
          logo={owl_logo}
          checkLeague={this.props.checkLeague}
          leagueName="owl"
        />
        <NavButton
          logo={ssbm_logo}
          checkLeague={this.props.checkLeague}
          leagueName="ssbm"
        />
        <NavButton
          logo={ssbu_logo}
          checkLeague={this.props.checkLeague}
          leagueName="ssbu"
        />
      </div>
    );
  }
}
