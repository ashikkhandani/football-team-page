import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class myTeam extends Component {
  render() {
    const { players, onStatusChange } = this.props;
    return (
      <div className="myPlayers row col-sm-5  mx-sm-3 justify-content-between align-items-center">
        <ul>
          <li>{players.name}</li>
        </ul>

        <Button
          className="iconTeam my-sm-1 py-sm-2 px-sm-3"
          onClick={() => onStatusChange(players.id)}
        >
          &#8635;
        </Button>
      </div>
    );
  }
}
