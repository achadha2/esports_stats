import React from "react";
import Banner from "../Components/Banner";
import lcsbanner from "../images/LCSbanner.jpg";
import lecbanner from "../images/LECbanner.png";
import owlbanner from "../images/OWLbanner.jpg";
import ssbmbanner from "../images/SSBMbanner.jpg";
import ssbubanner from "../images/SSBUbanner.jpg";
import homebanner from "../images/home.JPG";
import "./css/Banner.css";

export default class BannerContainer extends React.Component {
  whatBanner = () => {
    switch (this.props.league) {
      case "home":
        return <Banner bannerimg={homebanner} />;
      case "lcs":
        return <Banner bannerimg={lcsbanner} />;
      case "lec":
        return <Banner bannerimg={lecbanner} />;
      case "owl":
        return <Banner bannerimg={owlbanner} />;
      case "ssbm":
        return <Banner bannerimg={ssbmbanner} />;
      case "ssbu":
        return <Banner bannerimg={ssbubanner} />;
    }
  };
  render() {
    return (
      <div className="bannercontainer">
        <div className="bannerwrap">{this.whatBanner()}</div>
      </div>
    );
  }
}
