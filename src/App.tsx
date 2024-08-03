import GameGrid from "./components/GameGrid";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex ">
        <div className="hidden lg:w-1/3 lg:flex "> aside </div>
        <GameGrid />
      </div>
    </div>
  );
};

export default App;
