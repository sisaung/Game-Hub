import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const HeadingGames = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games `;

  return (
    <div>
      <h1 className="font-bold text-3xl mb-5"> {heading} </h1>
    </div>
  );
};

export default HeadingGames;
