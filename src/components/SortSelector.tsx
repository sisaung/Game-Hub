import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";

interface SortSelectorProps {
  onSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSortOrder, sortOrder }: SortSelectorProps) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "rating", label: "Average Rating" },
  ];

  const currentOrder = sortOrders.find((order) => order.value === sortOrder);

  return (
    <div className="px-3 lg:p-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-[220px] bg-gray-400 dark:bg-gray-800 flex justify-between">
            <span>Order by : {currentOrder?.label || "Relevant"} </span>
            <IoIosArrowDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[180px]">
          {sortOrders.map((order) => (
            <DropdownMenuItem
              key={order.value}
              textValue={order.value}
              onClick={() => onSortOrder(order.value)}
            >
              {order.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortSelector;
