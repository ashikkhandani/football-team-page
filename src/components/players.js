import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class players extends Component {
  render() {
    const { playersMarket, onStatusChange2 } = this.props;
    return (
      <div className="playersMarket row col-sm-5  mx-sm-3 justify-content-between align-items-center">
        <ul onClick={() => onStatusChange2(playersMarket.id)}>
          <li>{playersMarket.name}</li>
        </ul>
        {/* <p>{playersMarket.name} </p> */}
        <Button
          className="iconPlayers my-sm-1 py-sm-2 px-sm-3"
          onClick={() => onStatusChange2(playersMarket.id)}
        ></Button>
      </div>
    );
  }
}
