import { useEffect, useState } from "react";
import playerInfo from "./playerCalls";

export default function PlayerCallViewer() {
  const [player, setPlayer] = useState({});
  const [seasonTotals, setSeasonTotals] = useState([]);

  useEffect(() => {
    async function fetchPlayerInfo() {
      playerInfo(8476453).then((data) => {
        setPlayer(data);
        setSeasonTotals(data.seasonTotals);
      });
    }
    fetchPlayerInfo();
  }, []);

  return (
    <ul>
      <h2>Player Info</h2>
      {seasonTotals.map((total: any, index: number) => (
        <li className="flex bg-blue" key={index}>
          {/* {console.log("total", total, "season", total.season)} */}
          <p className="season">{`${total.season
            .toString()
            .substring(0, 4)} - ${total.season.toString().substring(4, 8)}`}</p>
          <p className="goals">{`${total.goals}`}</p>
          <p className="assists">{`${total.assists}`}</p>
          <p className="points">{`${total.points}`}</p>
        </li>
      ))}
    </ul>
  );
}
