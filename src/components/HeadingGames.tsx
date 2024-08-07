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
      <h1 className="font-bold text-5xl my-5 px-3 lg:p-0 font-serif ">
        {heading}
      </h1>
    </div>
  );
};

export default HeadingGames;
