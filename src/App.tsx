import "./App.css";
import TeamCallviewer from "./apiCalls/teamCalls/teamCallviewer";
import PlayerCallViewer from "./apiCalls/playerCalls/playerCallViewer";

function App() {
  return (
    <div className="main w-screen h-screen overflow-hidden bg-gray-100 p-2">
      <div className="header">
        <h1 className="title">TBL Roster</h1>
      </div>
      <div className="content-wrapper w-full h-full overflow-hidden">
        <div className="content flex flex-row w-full h-full p-4 overflow-auto box-border">
          <div className="flex-1">
            <TeamCallviewer />
          </div>
          <div className="flex-1">
            <PlayerCallViewer playerId={8476453} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
