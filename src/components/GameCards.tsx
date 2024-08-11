import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PlatformIconLists from "./PlatformIconLists";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import { Game } from "@/hooks/useGames";
import EmojiByRating from "./EmojiByRating";

interface GameCardProps {
  game: Game;
}
const GameCards = ({ game }: GameCardProps) => {
  return (
    <div className="col-span-1">
      <Card className="flex flex-col overflow-hidden ">
        <CardHeader>
          <CardTitle className="w-full p-0 overflow-hidden">
            <img src={getCroppedImageUrl(game.background_image)} />
          </CardTitle>
        </CardHeader>
        <CardContent className="my-2 mt-auto space-y-4">
          <p className="text-xl font-bold text-gray-700 dark:text-gray-300 text-nowrap">
            {game.name}
          </p>

          <div className="flex items-center justify-between">
            <PlatformIconLists
              platforms={game.parent_platforms.map(({ platform }) => platform)}
            />
            <CriticScore score={game.metacritic} />
          </div>
          <EmojiByRating rating={game.rating_top} />
        </CardContent>
      </Card>
    </div>
  );
};

export default GameCards;
