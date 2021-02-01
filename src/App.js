import React, { Component } from "react";
import "./App.css";
import Carousel from "./components/carousel";
import MyTeam from "./components/myTeamList";
import AllPlayers from "./components/playerList";

export default class App extends Component {
  /********* Constructor State Method  ***********/

  constructor(props) {
    super(props);
    this.state = {
      playerList: [
        {
          id: 1,
          name: "A. Ahammed (C)",
          choose: false,
        },
        {
          id: 2,
          name: "L. Messi ",
          choose: false,
        },
        {
          id: 3,
          name: "C. Ronaldo ",
          choose: false,
        },
        {
          id: 4,
          name: "Md. Salah ",
          choose: false,
        },
        {
          id: 5,
          name: "Z. Ibrahimović ",
          choose: false,
        },
        {
          id: 6,
          name: " Luis Suárez",
          choose: false,
        },
        {
          id: 7,
          name: "M. Neuer (GK)",
          choose: false,
        },
        {
          id: 8,
          name: "A. Iniesta ",
          choose: false,
        },
        {
          id: 9,
          name: " C. Tevez ",
          choose: false,
        },
        {
          id: 10,
          name: " S. Agüero  ",
          choose: false,
        },
        {
          id: 11,
          name: " M.-André ter (GK)",
          choose: false,
        },
        {
          id: 12,
          name: "A. Griezmann",
          choose: false,
        },
        {
          id: 13,
          name: "Marcelo V. ",
          choose: false,
        },
        {
          id: 14,
          name: " K. Benzema",
          choose: false,
        },
        {
          id: 15,
          name: "Luka Modrić ",
          choose: false,
        },
        {
          id: 16,
          name: " G. Bale",
          choose: false,
        },
        {
          id: 17,
          name: "K. Mbappé ",
          choose: false,
        },
        {
          id: 18,
          name: "G. Piqué ",
          choose: false,
        },
        {
          id: 19,
          name: " R. Lewandowski",
          choose: false,
        },
        {
          id: 20,
          name: " Neymar",
          choose: false,
        },
      ],
    };
  }

  // Create updateList function
  updatePlayerList(playerListId) {
    let newList = this.state.playerList.map((newPlayers) => {
      if (newPlayers.id === playerListId) {
        newPlayers.choose = !newPlayers.choose;
        return newPlayers;
      } else return newPlayers;
    });
    // add newList to playerList
    this.setState({
      playerList: newList,
    });
  }

  // Add new players function
  addPlayer(value) {
    const newName = {
      id: this.state.playerList.length + 1,
      name: value,
      choose: false,
    };
    this.setState({
      playerList: [...this.state.playerList, newName],
    });
    console.log(this.state.playerList);
  }

  render() {
    const myPlayers = this.state.playerList.filter((e1) => e1.choose);
    const players = this.state.playerList.filter((e2) => !e2.choose);
    return (
      <div>
        {/* Carousel */}
        <Carousel className="carousel" />

        {/* <Navbar /> */}
        <h2 className="title my-3 py-sm-2 py-md-3">fc khandani Berlin 2021</h2>
        {/* <div> */}

        {/* </div> */}
        <div className="main row justify-content-around">
          {/* Create My Team Container */}
          <MyTeam
            teamPlayers={myPlayers}
            playerChange={this.updatePlayerList.bind(this)}
          />
          {/* List of players Container*/}
          <AllPlayers
            choosePlayers={players}
            playerChange2={this.updatePlayerList.bind(this)}
            playerAddTo={this.addPlayer.bind(this)}
          />
        </div>
      </div>
    );
  }
}
