import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresLists from "./components/GenresLists";
import Navbar from "./components/Navbar";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  console.log(selectedPlatform);

  return (
    <div className="flex flex-col min-h-screen p-0 lg:p-5 gap-5 ">
      {/* <Test /> */}
      <Navbar />

      <div className="flex ">
        <div className="hidden lg:w-1/3 lg:flex">
          <GenresLists
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="flex flex-col gap-3">
          <PlatformSelector
            onSelectPlatforms={(platform) => setSelectedPlatform(platform)}
            selectedPlatform={selectedPlatform}
          />

          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
