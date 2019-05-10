import React from "react";
import NavButton from "../Components/NavButton";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <NavButton />
        <NavButton />
        <NavButton />
      </div>
    );
  }
}
