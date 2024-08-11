import logo from "../assets/logo.png";
import { ModeToggle } from "./mode-toggle";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <nav className="flex flex-col px-2 py-5 lg:p-0 ">
      <div className="flex items-center gap-2 md:gap-5 ">
        <img src={logo} className="h-12" />
        <SearchInput onSearch={onSearch} />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
