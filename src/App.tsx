import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenresLists from "./components/GenresLists";
import Navbar from "./components/Navbar";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="flex flex-col min-h-screen p-0 lg:p-5 gap-5 ">
      {/* <Test /> */}
      <Navbar />
      <div className="flex ">
        <div className="hidden lg:w-1/3 lg:flex">
          <GenresLists
            onSelectGenre={onSelectGenre}
            selectedGenre={selectedGenre}
          />
        </div>
        <GameGrid selectedGenre={selectedGenre} />
      </div>
    </div>
  );
};

export default App;
