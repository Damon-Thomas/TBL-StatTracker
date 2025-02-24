import { useEffect, useState } from "react";
import TBLroster from "./apiCalls/teamCalls";
import "./App.css";

function App() {
  const [roster, setRoster] = useState({
    forwards: [],
    defensemen: [],
    goalies: [],
  });

  useEffect(() => {
    TBLroster().then((data) => {
      console.log("data", data);
      setRoster(data);
    });
  }, []);

  return (
    <div className="main">
      <div className="header">
        <h1 className="title">TBL Roster</h1>
      </div>
      <div className="content">
        <ul>
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
      </div>
    </div>
  );
}

export default App;
