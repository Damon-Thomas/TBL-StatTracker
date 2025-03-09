import { useEffect, useState } from "react";
import TBLroster from "./apiCalls/teamCalls/teamCalls";
import playerInfo from "./apiCalls/playerCalls/playerCalls";
import "./App.css";
import TeamCallviewer from "./apiCalls/teamCalls/teamCallviewer";
import PlayerCallViewer from "./apiCalls/playerCalls/playerCallViewer";

function App() {
  return (
    <div className="main w-screen h-screen overflow-hidden bg-gray-100">
      <div className="header">
        <h1 className="title">TBL Roster</h1>
      </div>
      <div className="content flex flex-col w-full h-full overflow-auto p-4">
        <TeamCallviewer />
        <PlayerCallViewer />
      </div>
    </div>
  );
}

export default App;
