import { useEffect, useState } from "react";
import TBLroster from "./apiCalls/teamCalls";
import playerInfo from "./apiCalls/playerCalls";
import "./App.css";

function App() {
  const [roster, setRoster] = useState({
    forwards: [],
    defensemen: [],
    goalies: [],
  });
  const [player, setPlayer] = useState({});
  const [seasonTotals, setSeasonTotals] = useState([]);

  useEffect(() => {
    TBLroster().then((data) => {
      console.log("data", data);
      setRoster(data);
    });
    async function fetchPlayerInfo() {
      playerInfo(8476453).then((data) => {
        setPlayer(data);
        setSeasonTotals(data.seasonTotals);
      });
    }
    fetchPlayerInfo();
  }, []);

  return (
    <div className="main w-screen h-screen overflow-hidden bg-gray-100">
      <div className="header">
        <h1 className="title">TBL Roster</h1>
      </div>
      <div className="content flex flex-col w-full h-full">
        <ul className="flex wrap w-full h-full">
          <h2>Forwards</h2>
          {roster.forwards.length > 0 &&
            roster.forwards.map((forward: any) => (
              <li key={forward.id}>
                {forward.firstName.default} {forward.lastName.default}
              </li>
            ))}
          <h2>Defensemen</h2>
          {roster.defensemen.length > 0 &&
            roster.defensemen.map((defensemen: any) => (
              <li key={defensemen.id}>
                {defensemen.firstName.default} {defensemen.lastName.default}
              </li>
            ))}
          <h2>Goalies</h2>
          {roster.goalies.length > 0 &&
            roster.goalies.map((goalie: any) => (
              <li key={goalie.id}>
                {goalie.firstName.default} {goalie.lastName.default}
              </li>
            ))}
        </ul>
        <ul>
          <h2>Player Info</h2>
          {seasonTotals.map((total: any, index: number) => (
            <li className="flex bg-blue" key={index}>
              {console.log("total", total, "season", total.season)}
              <p className="season">{`${total.season
                .toString()
                .substring(0, 4)} - ${total.season
                .toString()
                .substring(4, 8)}`}</p>
              <p className="goals">{`${total.goals}`}</p>
              <p className="assists">{`${total.assists}`}</p>
              <p className="points">{`${total.points}`}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
