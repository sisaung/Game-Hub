import useGames from "./hooks/useGames";

const GameGrid = () => {
  const { errors, games } = useGames();

  return (
    <div className=" w-full">
      {errors && <p> {errors} </p>}
      {games.map((game) => (
        <div key={game.id}> {game.name} </div>
      ))}
    </div>
  );
};

export default GameGrid;
