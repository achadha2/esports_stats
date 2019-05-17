import React from "react";
import "./css/Navbutton.css";

export default class NavButton extends React.Component {
  render() {
    return (
      <div className="navbutton">
        <img className="navimg" src={this.props.logo} alt="lul" />
      </div>
    );
  }
}
