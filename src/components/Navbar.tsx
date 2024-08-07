import logo from "../assets/logo.png";
import { ModeToggle } from "./mode-toggle";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <nav className="flex flex-col px-2 py-5 lg:p-0 ">
      <div className="flex gap-2 md:gap-5 items-center ">
        {/* <div className="flex gap-0 md:gap-3 items-center"> */}
        <img src={logo} className="h-12" />
        {/* </div> */}
        <SearchInput onSearch={onSearch} />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
