import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresLists from "./components/GenresLists";
import Navbar from "./components/Navbar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="flex flex-col min-h-screen p-0 lg:p-5 gap-5 ">
      {/* <Test /> */}
      <Navbar />

      <div className="flex ">
        <div className="hidden lg:w-1/3 lg:flex">
          <GenresLists
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </div>
        <div className="flex flex-col gap-3">
          <PlatformSelector
            onSelectPlatforms={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />

          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  );
};

export default App;
