import { useEffect, useState } from "react";
import playerInfo from "./playerCalls";

export default function PlayerCallViewer({ playerId }: { playerId: number }) {
  const [player, setPlayer] = useState({});
  const [seasonTotals, setSeasonTotals] = useState([]);

  useEffect(() => {
    async function fetchPlayerInfo() {
      playerInfo(playerId).then((data) => {
        console.log("DATA", data);
        setPlayer(data);
        setSeasonTotals(data.seasonTotals);
      });
    }
    fetchPlayerInfo();
  }, []);

  return (
    <div className="flex flex-col w-full h-full overflow-y-auto">
      <h2 className="bg-amber-200 p-4 ">
        {player.firstName?.default} {player.lastName?.default}
      </h2>
      <div className="headings grid grid-cols-5 gap-4 bg-blue">
        <p className="season col-span-2">Season</p>
        <p className="goals">Goals</p>
        <p className="assists">Assists</p>
        <p className="points">Points</p>
      </div>
      <ul className="w-full">
        {seasonTotals.map((total: any, index: number) => (
          <li className="grid grid-cols-5 gap-4 bg-blue" key={index}>
            <p className="season col-span-2">{`${total.season
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
  );
}
