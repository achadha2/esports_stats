import React from "react";
import NavButton from "../Components/NavButton";
import "./css/Navbar.css";
import lcs_logo from "../images/lcs_logo.png";
import lec_logo from "../images/lec_logo.png";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavButton logo={lcs_logo} />
        <NavButton logo={lec_logo} />
      </div>
    );
  }
}
