import React from "react";
import "./css/Navbutton.css";

export default class NavButton extends React.Component {
  render() {
    return (
      <div className="navbutton">
        <img
          className="navimg"
          src={this.props.logo}
          onClick={e => this.props.checkLeague(e, this.props.leagueName)}
          alt="banner_image"
        />
      </div>
    );
  }
}

// {e =>
//             this.props.handleEffect(e, "contrast(500%)", "contrast")
//           }
