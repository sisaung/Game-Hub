import { Game } from "./hooks/useGames";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface GameCardProps {
  game: Game;
}
const GameCards = ({ game }: GameCardProps) => {
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
        <CardContent className="mt-auto">
          <p className="text-xl text-nowrap"> {game.name} </p>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default GameCards;
