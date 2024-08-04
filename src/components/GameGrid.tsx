import { error } from "console";
import GameCards from "./GameCards";
import useGames from "./hooks/useGames";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { errors, games, isLoading } = useGames();
  let length: number = 6;
  const skeletonArr = Array.from({ length }, (_, index) => index + 1);

  return (
    <div className=" w-full">
      {errors && <p> {errors} </p>}
      <div className="grid grid-cols-1 p-3 lg:p-0  md:grid-cols-2 lg:grid-cols-3  gap-3">
        {isLoading && (
          <>
            {skeletonArr.map((_, index) => (
              <GameCardSkeleton key={index} />
            ))}
          </>
        )}
        {games.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
