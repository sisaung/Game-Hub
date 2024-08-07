import React, { useRef } from "react";
import { Input } from "./ui/input";
import { IoIosSearch } from "react-icons/io";

interface SearchInputProps {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputRef.current) onSearch(inputRef.current.value);
  };

  return (
    <div className=" flex-grow relative">
      <form onSubmit={handleSubmit}>
        <IoIosSearch
          size={20}
          className="absolute top-0 left-0 translate-y-1/2 translate-x-1/2"
        />
        <Input
          ref={inputRef}
          className="ps-10"
          placeholder="Search games ..."
        />
      </form>
    </div>
  );
};

export default SearchInput;
