import useData from "./useData";

export interface PlatformSelector {
  id: number;
  name: string;
}

const usePlatform = () => useData<PlatformSelector>("/platforms/lists/parents");

export default usePlatform;
