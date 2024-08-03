import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))

      .catch((error) => {
        console.log(error.message);
        setErrors(error.message);
      });
  }, []);

  console.log(games);

  return (
    <div className="bg-purple-500 w-full">
      {games.map((game) => (
        <div key={game.id}> {game.name} </div>
      ))}
    </div>
  );
};

export default GameGrid;
