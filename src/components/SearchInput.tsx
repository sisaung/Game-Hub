import { Input } from "./ui/input";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className=" flex-grow relative">
      <IoIosSearch
        size={20}
        className="absolute top-0 left-0 translate-y-1/2 translate-x-1/2"
      />
      <Input className="ps-10" placeholder="Search games ..." />
    </div>
  );
};

export default SearchInput;
