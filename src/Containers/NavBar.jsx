import React from "react";
import NavButton from "../Components/NavButton";
import "./css/Navbar.css";
import lcs_logo from "../images/lcs_logo.png";
import lec_logo from "../images/lec_logo.png";
import owl_logo from "../images/owl_logo.png";
import ssbu_logo from "../images/ssbu_logo.png";
import ssbm_logo from "../images/ssbm_logo.png";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavButton logo={lcs_logo} />
        <NavButton logo={lec_logo} />
        <NavButton logo={owl_logo} />
        <NavButton logo={ssbm_logo} />
        <NavButton logo={ssbu_logo} />
      </div>
    );
  }
}
