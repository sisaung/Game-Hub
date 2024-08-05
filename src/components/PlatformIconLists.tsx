import {
  FaAndroid,
  FaApple,
  FaWindows,
  FaLinux,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";

interface PlatFormIconsProps {
  platforms: Platform[];
}

const PlatformIconLists = ({ platforms }: PlatFormIconsProps) => {
  const iconMaps = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <BsNintendoSwitch />,
    mac: <FaApple />,
    linux: <FaLinux />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
    android: <FaAndroid />,
  };

  return (
    <div className="flex items-center gap-2">
      {platforms.map((p) => (
        <p key={p.name} className=" text-gray-700 dark:text-gray-400">
          {iconMaps[p.slug as keyof typeof iconMaps]}
        </p>
      ))}
    </div>
  );
};

export default PlatformIconLists;
