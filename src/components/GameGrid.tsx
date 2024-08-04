import { error } from "console";
import GameCards from "./GameCards";
import useGames from "./hooks/useGames";

const GameGrid = () => {
  const { errors, games } = useGames();

  return (
    <div className=" w-full">
      {errors && <p> {errors} </p>}
      <div className="grid grid-cols-1 p-3 lg:p-0  md:grid-cols-2 lg:grid-cols-3  gap-3">
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
