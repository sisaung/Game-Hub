import logo from "../assets/logo.png";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="flex flex-col p-5">
      <div className="flex justify-between items-center ">
        <div className="flex gap-3 items-center">
          <img src={logo} className="h-12" />
          <h1 className="font-bold text-2xl"> Game Hub </h1>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;