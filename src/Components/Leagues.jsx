import React from "react";

export default class Leagues extends React.Component {
  helper = () => {
    if (this.props.league.series[0]) {
      let year = this.props.league.series[0].year;
      return <div>{year}</div>;
    } else {
      return;
    }
  };

  render() {
    return (
      <div className="leagueCard">
        <img className="leagueImage" src={this.props.league.image_url} alt="" />
        <div>{this.props.league.name}</div>
        <div>{this.props.league.videogame.name}</div>
        <div>{this.helper()}</div>
      </div>
    );
  }

  // displayLeagues = () => {
  //   // debugger;
  //   // console.log(this.props.leagues[1].name);
  //   if (this.props.leagues.length === 0) {
  //     return <div>Loading</div>;
  //   } else {
  //     console.log(this.props.leagues[1]);
  //     return this.props.league.map
  //     return <img src={this.props.leagues[1].image_url} alt="" />;
  //   }
  // };
}
