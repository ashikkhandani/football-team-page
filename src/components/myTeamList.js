import React, { Component } from "react";
import MyTeam from "./myTeam";
export default class myTeamList extends Component {
  render() {
    const { teamPlayers, playerChange } = this.props;
    return (
      <div className="teamContainer col-sm-12 col-md-10 col-lg-5 mx-2 row justify-content-center ">
        <h3 className="headerTeam col-sm-12 col-md-10 col-lg-8 my-sm-3 py-sm-2">
          {" "}
          My Team FCK
        </h3>

        {/* Map Method */}
        {teamPlayers.map((el) => {
          return (
            <MyTeam key={el.id} players={el} onStatusChange={playerChange} />
          );
        })}
      </div>
    );
  }
}
