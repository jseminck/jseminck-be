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
          <div className="row">
            <div className="col-md-2">
              <Action command="OPEN_APP" name="Open App" />
              <Action command="CLOSE_APP" name="Close App" />
              <Action
                command="COLLECT_INACTIVE_GOLD"
                name="Collect inactive gold"
              />
              <Action
                command="SWIPE_ALL_MENUS_TO_TOP"
                name="Swipe all menus to top"
              />
              <Action command="UPLOAD_SCREENSHOT" name="Refresh Screenshot" />
              <Action command="SLEEP_30" name="Sleep 30" />
              <Action command="CLAN_QUEST" name="Clan Quest" />
              <Action command="PRESTIGE" name="Prestige" />
              <Action command="TOGGLE_LOOP" name="Toggle Loop" />
              <Action command="STATS" name="Stats" />
            </div>
            <div className="col-md-2">
              <Action
                command="LEVEL_ALL_HEROES_15"
                name="Level heroes (15 swipes)"
              />
              <Action
                command="LEVEL_ALL_HEROES_3"
                name="Level heroes (3 swipes)"
              />
              <Action
                command="LEVEL_ALL_HEROES_1"
                name="Level heroes (1 swipe)"
              />
              <Action command="LEVEL_SKILLS_1" name="Level skills (1)" />
              <Action command="LEVEL_SKILLS_3" name="Level skills (3)" />
              <Action command="LEVEL_SWORD_MASTER" name="Level sword master" />
              <Action command="TAP_MANY" name="Tap Many" />
              <Action command="TAP_LITTLE" name="Tap Little" />
            </div>

            <div className="col-md-2">
              <Action command="LEVEL_HEAVENLY_STRIKE" name="Level HS" />

              <Action command="LEVEL_DEADLY_STRIKES" name="Level DS" />
              <Action
                command="LEVEL_DEADLY_STRIKES_MAX"
                name="Level DS (Max)"
              />
              <Action command="LEVEL_HAND_OF_MIDAS" name="Level HoM" />
              <Action
                command="LEVEL_HAND_OF_MIDAS_MAX"
                name="Level HoM (Max)"
              />
              <Action command="LEVEL_FIRE_SWORD" name="Level FS" />
              <Action command="LEVEL_FIRE_SWORD_MAX" name="Level FS (Max)" />
              <Action command="LEVEL_WAR_CRY" name="Level WC" />
              <Action command="LEVEL_WAR_CRY_MAX" name="Level WC (Max)" />
              <Action command="LEVEL_SHADOW_CLONE" name="Level SC" />
              <Action command="LEVEL_SHADOW_CLONE_MAX" name="Level SC (Max)" />
            </div>

            <div className="col-md-2">
              <Action
                command="ACTIVATE_HEAVENLY_STRIKE"
                name="Heavenly Strike"
              />
              <Action command="ACTIVATE_DEADLY_STRIKES" name="Deadly Strikes" />
              <Action command="ACTIVATE_HAND_OF_MIDAS" name="Hand of Midas" />
              <Action command="ACTIVATE_FIRE_SWORD" name="Fire Sword" />
              <Action command="ACTIVATE_WAR_CRY" name="War Cry" />
              <Action command="ACTIVATE_SHADOW_CLONE" name="Shadow Clone" />
              <Action
                command="ACTIVATE_ALL_SKILLS_EXCEPT_HEAVENLY_STRIKE"
                name="All Skills (except HS)"
              />
            </div>

            <div className="col-md-2">
              <Action command="SM_INITIAL" name="SM Initial" />
              <Action command="SM_FARM" name="SM Farm" />
            </div>
          </div>

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
