import useGames from "@/hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { errors, data, isLoading } = useGames(selectedGenre);
  let length: number = 12;
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
        {data.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
