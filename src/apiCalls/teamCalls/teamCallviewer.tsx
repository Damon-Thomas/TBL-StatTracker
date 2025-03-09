import { useEffect, useState } from "react";
import TBLroster from "./teamCalls";
import "./teamCalls.css";

export default function TeamCallviewer() {
  const [roster, setRoster] = useState({
    forwards: [],
    defensemen: [],
    goalies: [],
  });

  function playerInfo(player: any) {
    return (
      <div className="playerInfoContainer">
        {Object.entries(player).map(
          ([key, value]) => (
            console.log("key", key, "value", value),
            (
              <p key={player.id + key}>
                {key} ={" "}
                {typeof value === "object" && value !== null
                  ? value.default
                  : String(value)}
              </p>
            )
          )
        )}
      </div>
    );
  }

  useEffect(() => {
    TBLroster().then((data) => {
      console.log("data", data);
      setRoster(data);
    });
  }, []);

  return (
    <div className="positionRosterContainer flex flex-col w-full h-full p-4 ">
      <h2>Forwards</h2>

      <ul className="positionList flex flex-wrap">
        {roster.forwards.length > 0 &&
          roster.forwards.map((forward: any) => (
            <li className="flex flex-col" key={forward.id}>
              <h6>
                {forward.firstName.default} {forward.lastName.default}
              </h6>
              {playerInfo(forward)}
            </li>
          ))}
      </ul>
      <h2>Defensemen</h2>
      <ul className="positionList flex flex-wrap">
        {roster.defensemen.length > 0 &&
          roster.defensemen.map((defensemen: any) => (
            <li className="flex flex-col" key={defensemen.id}>
              <h6>
                {defensemen.firstName.default} {defensemen.lastName.default}
              </h6>
              {playerInfo(defensemen)}
            </li>
          ))}
      </ul>
      <h2>Goalies</h2>
      <ul className="positionList flex flex-wrap">
        {roster.goalies.length > 0 &&
          roster.goalies.map((goalie: any) => (
            <li className="flex flex-col" key={goalie.id}>
              <h6>
                {goalie.firstName.default} {goalie.lastName.default}
              </h6>
              {playerInfo(goalie)}
            </li>
          ))}
      </ul>
    </div>
  );
}
