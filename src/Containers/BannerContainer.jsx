import React from "react";
import tsm_banner from "../images/LCS-TSM.jpg";
import "./css/Banner.css";

export default class BannerContainer extends React.Component {
  render() {
    return (
      <div className="bannercontainer">
        <div className="bannerwrap">
          <img src={tsm_banner} alt="This a BANNER" />
        </div>
      </div>
    );
  }
}
