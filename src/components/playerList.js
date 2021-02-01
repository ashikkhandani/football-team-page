import React, { Component } from "react";
import Players from "./players";
import { Form, FormControl, Button } from "react-bootstrap";

export default class playerList extends Component {
  /*******  Constructor State Method  *************** */
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  // new player function
  newPlayerToChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  // submit function
  nameSubmit(e) {
    e.preventDefault();
    this.props.playerAddTo(this.state.value);
    this.setState({
      value: "",
    });
  }

  render() {
    const { choosePlayers, playerChange2 } = this.props;
    return (
      <div className="playerContainer col-sm-12 col-md-10 col-lg-5 mx-2 row justify-content-center ">
        <div className="row justify-content-between">
          <h3 className="headerPlayers col-sm-12 col-md-6 my-sm-3  py-sm-2">
            Choose Players
          </h3>
          {/* </div>
        <div> */}
          {/* with Constructive Method */}
          <Form
            inline
            onSubmit={this.nameSubmit.bind(this)}
            className="col-sm-12 col-md-6 "
          >
            <FormControl
              type="text"
              placeholder="Enter player Name. . ."
              className="formC my-sm-2  col-sm-6 col-md-8"
              value={this.state.value}
              onChange={this.newPlayerToChange.bind(this)}
            />

            <Button
              className="btn col-sm-4 col-md-3 my-sm-2 ml-md-2 mt-sm-2"
              type="submit"
              value="Add"
            >
              Add
            </Button>
          </Form>
        </div>

        {/* map method */}
        {choosePlayers.map((el) => {
          return (
            <Players
              key={el.id}
              playersMarket={el}
              onStatusChange2={playerChange2}
            />
          );
        })}
      </div>
    );
  }
}
