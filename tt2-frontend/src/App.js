import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Stage from "./Stage/Stage";
import Logs from "./Logs/Logs";
import Commands from "./Commands/Commands";
import Screenshot from "./Screenshot/Screenshot";
import Action from "./Actions/Action";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Stage />
        </header>

        <div className="container">
          <div className="row col-md-12">
            <Action command="STOP" name="Stop" />
            <Action command="LEVEL_ALL_HEROES" name="Level all heroes" />
            <Action command="LEVEL_SWORD_MASTER" name="Level sword master" />
            <Action command="LEVEL_SKILLS" name="Level skills" />
            <Action command="TAP" name="Tap" />
          </div>

          <div className="row col-md-12">
            <Action command="HEAVENLY_STRIKE" name="Heavenly Strike" />
            <Action command="DEADLY_STRIKES" name="Deadly Strikes" />
            <Action command="HAND_OF_MIDAS" name="Hand of Midas" />
            <Action command="FIRE_SWORD" name="Fire Sword" />
            <Action command="WAR_CRY" name="War Cry" />
            <Action command="SHADOW_CLONE" name="Shadow Clone" />
          </div>

          <Action command="PRESTIGE" name="Prestige" />
          <Action command="TOGGLE_LOOP" name="Toggle Loop" />
          <Action command="UPLOAD_SCREENSHOT" name="Refresh Screenshot" />

          <div className="row">
            <div className="col-md-4">
              <Logs />
            </div>
            <div className="col-md-4">
              <Commands />
            </div>
            <div class="col-md-4">
              <Screenshot />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
