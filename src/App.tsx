import GameGrid from "./components/GameGrid";
import GenresLists from "./components/GenresLists";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Test /> */}
      <Navbar />
      <div className="flex ">
        <div className="hidden lg:w-1/3 lg:flex ">
          <GenresLists />
        </div>
        <GameGrid />
      </div>
    </div>
  );
};

export default App;
