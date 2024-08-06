import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { Platform } from "@/hooks/useGames";
import usePlatform from "@/hooks/usePlatform";
import { platform } from "os";

interface PlatformSelectorProps {
  onSelectPlatforms: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({
  onSelectPlatforms,
  selectedPlatform,
}: PlatformSelectorProps) => {
  const { data, errors } = usePlatform();

  if (errors) return null;

  return (
    <div className="px-3 lg:p-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="w-[180px] bg-gray-400 dark:bg-gray-800 flex justify-between">
            <span>{selectedPlatform?.name || "Platforms"}</span>
            <IoIosArrowDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-[180px]">
          {data.map((platform) => (
            <DropdownMenuItem
              key={platform.id}
              onClick={() => onSelectPlatforms(platform)}
            >
              {platform.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default PlatformSelector;
