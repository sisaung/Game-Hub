import React from "react";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-red-500"> nav </div>
      <div className="flex ">
        <div className="bg-gray-500 w-0 lg:w-1/3"> aside </div>

        <div className="bg-purple-500 w-full"> main </div>
      </div>
    </div>
  );
};

export default App;
