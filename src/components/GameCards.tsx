import { Game } from "./hooks/useGames";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PlatformIconLists from "./PlatformIconLists";
import CriticScore from "./CriticScore";

interface GameCardProps {
  game: Game;
}
const GameCards = ({ game }: GameCardProps) => {
  const p = game.parent_platforms.map(({ platform }) => platform);
  console.log(p);

  return (
    <div className="col-span-1">
      <Card className="flex flex-col overflow-hidden ">
        <CardHeader>
          <CardTitle className="w-full p-0 overflow-hidden">
            <img src={game.background_image} />
          </CardTitle>
          <CardDescription>
            {/* <img src={game.background_image} /> */}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto my-2 space-y-4">
          <p className="text-xl text-gray-700 dark:text-gray-300 text-nowrap font-bold">
            {game.name}
          </p>

          <div className="flex justify-between items-center">
            <PlatformIconLists
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            />
            <CriticScore score={game.metacritic} />
          </div>
        </CardContent>

        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default GameCards;
